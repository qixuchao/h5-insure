<template>
  <div class="com-sign-part">
    <ProCard :title="title" class="card">
      <template #extra>
        <div class="people">
          <div class="name">{{ currentPersonalInfo?.name }}</div>
          <div
            v-if="showVerify && needVerify(currentPersonalInfo?.certType)"
            :class="['status', { verified: currentPersonalInfo?.isCert === YES_NO_ENUM.YES }]"
          >
            {{ currentPersonalInfo?.isCert === YES_NO_ENUM.YES ? '已认证' : '待认证' }}
          </div>
        </div>
      </template>
      <div v-if="showVerify && currentPersonalInfo?.certNo" class="verify-item">
        <div class="label">证件号码</div>
        <div class="no">{{ currentPersonalInfo?.certNo }}</div>
        <div
          v-if="currentPersonalInfo?.isCert !== YES_NO_ENUM.YES && needVerify(currentPersonalInfo?.certType)"
          class="action"
          @click="handleVerify"
        >
          去认证
          <ProSvg name="right_arrow" class="icon" />
        </div>
      </div>
    </ProCard>
    <ProCard v-if="showSign" :title="`${title}签名`" :show-icon="false" class="sign-card" :show-line="false">
      <template #extra>
        <div class="sign-status">
          <div v-if="!disabled" class="resign" @click="resetSign">重签</div>
        </div>
      </template>
      <Sign
        ref="signRef"
        v-model="signData"
        :sign-string="currentPersonalInfo?.name || ''"
        class="sign"
        @submit-sign="submitSign"
      >
        <template #signImg="{ data }">
          <div class="sign-board" @click="openSign">
            <img v-if="data" :src="data" class="sign-img" alt="" />
            <span v-else class="sign-desc">请签名</span>
          </div>
        </template>
      </Sign>
      <div class="sign-body">
        <div class="date">签名日期： {{ signDate }}</div>
        <div class="file">
          <AttachmentList
            v-if="fileList?.length"
            :attachment-list="fileList"
            pre-text="签名将被用于以下文件："
            @preview-file="(index) => previewFile(index)"
          />
        </div>
      </div>
    </ProCard>
    <FilePreview
      v-if="showFilePreview"
      v-model:show="showFilePreview"
      :content-list="fileList"
      is-only-view
      :active-index="activeIndex"
      text="关闭"
      @on-close-file-preview-by-mask="onResetFileFlag"
    ></FilePreview>
  </div>
</template>

<script lang="ts" setup name="signPart">
import { withDefaults } from 'vue';
import dayjs from 'dayjs';
import { CERT_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import Sign from '../../components/Sign/index.vue';

const AttachmentList = defineAsyncComponent(() => import('../../components/AttachmentList/index.vue'));
const FilePreview = defineAsyncComponent(() => import('../../components/FilePreview/index.vue'));

interface Props {
  signString?: string[]; // 签字配置信息
  personalInfo: any; // 投被保人信息
  fileList: any[];
  title: string;
  showSign: boolean;
  showVerify: boolean;
  showShareSign: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  personalInfo: () => ({}),
  title: '',
  showSign: false,
  showVerify: false,
  showShareSign: false,
  signString: () => [],
  disabled: false,
});
const emits = defineEmits(['handleVerify', 'handleSign']);
const currentPersonalInfo = ref<any>({});
const signData = ref<string[]>([]);

/** -----------资料阅读模块开始-------------------- */
const productMaterialPlanList = ref([]);
const currentPlanObj = ref({});
const isOnlyView = ref<boolean>(true); // 资料查看模式
const showFilePreview = ref<boolean>(false); // 附件资料弹窗展示状态
const activeIndex = ref<number>(0); // 附件资料弹窗中要展示的附件编号

// 文件预览
const previewFile = (index: number) => {
  activeIndex.value = index;
  showFilePreview.value = true;
};
/** -----------资料阅读模块结束-------------------- */
// 如果证件类型时身份证，则需要去认证
const needVerify = (certType: keyof typeof CERT_TYPE_ENUM) => {
  return `${certType}` === CERT_TYPE_ENUM.CERT;
};

const signDate = computed(() => dayjs().format('YYYY-MM-DD'));

// 去认证
const handleVerify = () => {
  emits('handleVerify', currentPersonalInfo.value?.name, currentPersonalInfo.value?.certNo);
};

const onResetFileFlag = () => {
  showFilePreview.value = false;
};

// 重签
const signRef = ref<InstanceType<typeof Sign>>();
const resetSign = () => {
  if (signRef.value) {
    signRef.value.openSign(true);
    // signRef.value.rewrite();
  }
};
const openSign = () => {
  if (props.disabled) {
    return;
  }
  if (signRef.value) {
    signRef.value.openSign();
  }
};

const submitSign = (str) => {
  emits('handleSign', str);
};

const validateSign = () => {
  return new Promise((resolve, reject) => {
    if (signData.value?.length) {
      resolve(true);
      return;
    }
    reject(new Error(`请先完成${props.title}签名`));
  });
};

const validateVerify = () => {
  return new Promise((resolve, reject) => {
    if (props.personalInfo?.isCert === YES_NO_ENUM.YES) {
      resolve(true);
      return;
    }
    reject(new Error(`请${props.title}完成认证`));
  });
};

defineExpose({
  validateSign,
  validateVerify,
});

watch(
  () => props.signString,
  () => {
    signData.value = props.signString;
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => props.personalInfo,
  () => {
    currentPersonalInfo.value = props.personalInfo;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scope>
.com-sign-part {
  .sign-wrap {
    .sign-board {
      width: 690px;
      height: 400px;
      background-color: #eaeaea;
      color: #99a9c0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .sign-desc {
        position: absolute;
        z-index: 1;
        font-size: 40px;
      }
      .sign-img {
        transform: rotateZ(-90deg);
        height: 690px;
        width: 400px;
      }
    }
  }
  .verify-item {
    display: flex;
    justify-content: space-between;
  }
  .people {
    display: flex;
  }

  .card {
    .people {
      flex: 1;
      margin-left: 40px;
      display: flex;
      align-items: center;

      .name {
        font-size: 30px;
        font-weight: 600;
        color: #393d46;
      }

      .status {
        margin-left: 20px;
        text-align: center;
        width: 90px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        border: 1px solid #99a9c0;
        font-size: 24px;
        color: #99a9c0;

        &.verified {
          color: $zaui-brand;
          border-color: $zaui-brand;
        }
      }
    }

    .verify-item {
      display: flex;
      align-items: center;
      height: 106px;
      line-height: 106px;
      font-size: 30px;
      color: #393d46;

      .no {
        margin-left: 48px;
      }

      .action {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #99a9c0;

        .icon {
          margin-left: 10px;
          color: #99a9c0;
          font-size: 24px;
        }
      }
    }
  }

  .sign-card {
    .resign {
      font-size: 28px;
      color: $zaui-brand;
    }

    .sign-body {
      padding-bottom: 30px;

      .date {
        margin-top: 24px;
        font-size: 28px;
        color: #99a9c0;
        line-height: 40px;
      }

      .file {
        margin-top: 16px;
        font-size: 28px;
        color: #393d46;
        line-height: 40px;

        .file-name {
          color: $zaui-brand;

          .dun-hao {
            color: #393d46;
          }
        }
      }
    }
  }
}
</style>
