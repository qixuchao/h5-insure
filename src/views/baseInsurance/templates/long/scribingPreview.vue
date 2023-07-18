<template>
  <div class="page-scribing-preview-wrap">
    <div class="header-tip">点击文字框可进行修改</div>
    <div class="scribing-list">
      <van-space wrap>
        <template v-for="(signObj, index) in signCollection" :key="index">
          <div
            :class="`scribing-item ${+signObj.status !== YES_NO_ENUM.YES ? 'activity' : ''}`"
            @click="updateSign(signObj)"
          >
            <img :src="signObj.thumbnail" alt="" />
          </div>
        </template>
      </van-space>
    </div>
    <div class="footer-btn">
      <ProShadowButton :shadow="false" :disabled="scribingStatus === YES_NO_ENUM.NO" @click="handleSubmit">
        <slot>确认</slot>
      </ProShadowButton>
    </div>
  </div>
  <ProPopup
    :show="visible"
    teleport=".page-scribing-preview-wrap"
    class="sign-popup"
    :title="currentSignRecord.content"
    :closeable="false"
    position="center"
    @close="handleCancel"
  >
    <div class="popup-body">
      <ProSign v-model="currentSignRecord.image" has-bg :placeholder="currentSignRecord.content" closeable></ProSign>
    </div>
    <div class="popup-footer">
      <van-button @click="handleCancel">取消</van-button>
      <van-button type="primary" plain :disabled="!currentSignRecord.image" @click="handleConfirm">确定</van-button>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="scribingPreview">
import { useRoute, useRouter } from 'vue-router';
import { useToggle } from '@vant/use';
import { Toast } from 'vant';
import { YES_NO_ENUM, SCRIBING_TYPE_ENUM } from '@/common/constants';
import ProShadowButton from '../components/ProShadowButton/index.vue';
import { confirmRiskTranscription, queryListRiskTranscription, saveRiskTranscription } from '@/api/modules/scribing';

interface RouterParams {
  orderNo: string;
  text: string;
  [propName: string]: string;
}

const router = useRouter();
const route = useRoute();

const signCollection = ref<any[]>([]);

const { orderNo, text, tenantId, orderId } = route.query as RouterParams;
const currentSignRecord = ref<any>({});
const [visible, toggleVisible] = useToggle(false);
const scribingStatus = ref<number>();

const queryScribingList = async () => {
  const { code, data } = await queryListRiskTranscription({
    orderId,
    tenantId,
    contentType: SCRIBING_TYPE_ENUM.HANDLE,
  });
  if (code === '10000') {
    signCollection.value = data.riskTranscriptionList;
    scribingStatus.value = data.status;
  }
};

const updateSign = (record) => {
  currentSignRecord.value = { ...record, image: '' };
  toggleVisible(true);
};

const handleCancel = () => {
  toggleVisible(false);
};

const handleConfirm = () => {
  if (currentSignRecord.value.image) {
    saveRiskTranscription({
      orderNo,
      tenantId,
      riskTranscriptionList: [{ ...currentSignRecord.value, status: 2 }],
    }).then(({ code, data }) => {
      if (code === '10000') {
        toggleVisible(false);
        queryScribingList();
      }
    });
  }
};

const handleSubmit = () => {
  confirmRiskTranscription({
    content: text,
    image: '',
    orderNo,
    tenantId,
    transcriptionType: SCRIBING_TYPE_ENUM.HANDLE,
  }).then(({ code }) => {
    if (code === '10000') {
      router.back();
    }
  });
};
const isMounted = ref<boolean>(false);

onMounted(() => {
  isMounted.value = true;
  queryScribingList();
});
</script>

<style lang="scss">
.popup-body {
  padding: 58px 80px;
  width: 560px;
  height: 518px;
  .com-sign-wrapper {
    .sign-container {
      .close-part {
        top: 4px;
        right: 2px;
      }
      .placeholder {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 320px;
      }
    }
  }
}

.popup-footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid $zaui-line;
  button {
    width: 50%;
    height: 98px;
    border: none;
    &:first-of-type {
      border-right: 1px solid $zaui-line;
    }
  }
}

.page-scribing-preview-wrap {
  background-color: #f2f2f2;
  min-height: 100vh;
  padding: $zaui-space-border-big 0px 14px $zaui-space-border-big;

  .van-popup {
    width: 560px !important;
    height: 745px !important;
    border-radius: 12px;
    &.com-pro-popup .pop-container .header {
      line-height: 128px;
      background-color: #fff6e4;
      font-size: 36px;
      flex: none;
      font-weight: 600;
      color: #ff911e;
    }
  }
  .header-tip {
    font-size: $zaui-font-size-md2;
    font-weight: 400;
    color: #393d46;
    line-height: 42px;
  }

  .scribing-list {
    width: 100%;
    margin-top: 30px;
    .scribing-item {
      width: 150px;
      height: 150px;
      background-color: #ffffff;
      margin: 0 14px 14px 0;
      &.activity {
        border: 1px solid red;
      }
      img {
        width: 100%;
      }
    }
  }
  .footer-btn {
    position: fixed;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    left: 0;
  }
}
</style>
