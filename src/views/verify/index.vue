<template>
  <ProPageWrap>
    <div class="page-verify">
      <ProMessage
        type="warning"
        title="尊敬的客户，本次投保需要进行身份认证"
        content="本产品投保需要对投保人、被保人进行实名认证，您购买本产品的累计总保费已超过20万，按监管要求，需要提供投保人、被保人、指定受益人证件影像，本产品非本人投保且带身故责任、需对投保人、被保人（成人）的投保意愿进行签字确认。"
      />
      <ProCard title="投保人" class="card">
        <template #extra>
          <div class="people">
            <div class="name">王小明</div>
            <div class="status">待认证</div>
          </div>
        </template>
        <div class="verify-item">
          <div class="label">身份证号码</div>
          <div class="no">510***********292X</div>
          <div class="action" @click="handleVerify">去认证 <ProSvg name="right_arrow" class="icon" /></div>
        </div>
      </ProCard>
      <ProCard title="投保人签名" :show-icon="false" class="sign-card" :show-line="false">
        <template #extra>
          <div class="resign" @click="handleResign1">重签</div>
        </template>
        <ProSign ref="sign1" class="sign" />
        <div class="sign-body">
          <div class="date">签名日期： 2022-01-01</div>
          <div class="file">
            签名将被用于以下文件：<span v-for="(item, index) in fileList" :key="index" class="file-name"
              >{{ `《${item}》` }}<span v-if="index !== fileList.length - 1" class="dun-hao">、</span></span
            >
          </div>
        </div>
      </ProCard>
      <ProCard title="被保人" class="card">
        <template #extra>
          <div class="people">
            <div class="name">王小明</div>
            <div class="status">待认证</div>
          </div>
        </template>
        <div class="verify-item">
          <div class="label">身份证号码</div>
          <div class="no">510***********292X</div>
          <div class="action">去认证 <ProSvg name="right_arrow" class="icon" /></div>
        </div>
      </ProCard>
      <ProCard title="投保人签名" :show-icon="false" class="sign-card" :show-line="false">
        <template #extra>
          <div class="resign" @click="handleResign2">重签</div>
        </template>
        <ProSign ref="sign2" class="sign" />
        <div class="sign-body">
          <div class="date">签名日期： 2022-01-01</div>
          <div class="file">
            签名将被用于以下文件：<span v-for="(item, index) in fileList" :key="index" class="file-name"
              >{{ `《${item}》` }}<span v-if="index !== fileList.length - 1" class="dun-hao">、</span></span
            >
          </div>
        </div>
      </ProCard>
      <div class="footer-button footer">
        <van-button plain type="primary">分享</van-button>
        <van-button type="primary" @click="handleSubmit">提交</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import ProMessage from '@/components/ProMessage/index.vue';
import ProCard from '@/components/ProCard/index.vue';
import ProSvg from '@/components/ProSvg/index.vue';
import ProSign from '@/components/ProSign/index.vue';
import { faceVerify, saveSign } from '@/api/modules/verify';

const fileList = ['营销员保至书', '投保人须知', 'xxxxxxxxxxxxx'];
const sign1 = ref();
const sign2 = ref();

const handleResign1 = () => {
  sign1.value?.clear();
};

const handleResign2 = () => {
  sign2.value?.clear();
};

const handleVerify = () => {
  faceVerify({ callbackUrl: 'string', certiNo: '', faceAuthMode: 'TENCENT', userName: '' });
};

const handleSubmit = () => {
  const empty1 = sign1.value?.isEmpty();
  const empty2 = sign2.value?.isEmpty();
  if (empty1) {
    Toast.fail('请投保人签名');
    return;
  }
  if (empty2) {
    Toast.fail('请被保人签名');
    return;
  }
  const data1 = sign1.value?.save();
  const data2 = sign2.value?.save();
  Promise.all([saveSign('HOLDER', data1), saveSign('INSURED', data2)]);
};
</script>

<style lang="scss" scoped>
.page-verify {
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
      color: #0d6efe;
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
          color: #0d6efe;
        }
      }
    }
  }
  .footer {
    position: static;
  }
}
</style>
