<template>
  <div className="card-certificate-out">
    <div className="card-certificate">
      <div className="certificate-pic-left"></div>
      <div className="certificate-pic-right"></div>
      <div className="certificate-content-title"></div>
      <div className="certificate-title"></div>
      <div className="certificate-line"></div>
      <div className="certificate-info">
        <div className="certificate-info-row">
          <div className="certificate-label">姓名</div>
          <div className="certificate-text">{{ name }}</div>
        </div>
        <div className="certificate-info-row">
          <div className="certificate-label">所属公司</div>
          <div className="certificate-text">{{ agencyName }}</div>
        </div>
        <div className="certificate-info-row">
          <div className="certificate-label">执业证编号</div>
          <div className="certificate-text">{{ agentCertNo }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';

interface CetificateProps {
  name?: string;
  agencyName?: string;
  agentCertNo?: string;
}
// 获取props，并设置默认值
const props = withDefaults(defineProps<CetificateProps>(), {
  name: '',
  agencyName: '',
  agentCertNo: '',
});

// const { name, agencyName, agentCertNo } = toRefs(props);
</script>
<style lang="scss" scoped>
.card-certificate-out {
  position: relative;
  z-index: 0;
  .card-certificate {
    position: relative;
    background-image: url('@/assets/images/card/cer-bg-1.png');
    border-radius: 30px;
    background-position: center center;
    background-size: 100% 100%;
    height: 345px;
    .certificate-pic-left {
      position: absolute;
      background-image: url('@/assets/images/card/cer-pic.png');
      background-position: center center;
      background-size: 100% 100%;
      // height: 159px;
      // width: 138px; 94
      height: 109px;
      width: 94px;
      top: 30px;
      left: 27px;
    }
    .certificate-pic-right {
      position: absolute;
      background-image: url('@/assets/images/card/cer-bj-rg.png');
      background-position: center center;
      background-size: 100% 100%;
      height: 154px;
      width: 138px;
      top: 0px;
      right: 0px;
    }
    .certificate-content-title {
      background-image: url('@/assets/images/card/cer-title.png');
      background-position: center center;
      background-size: 100% 100%;
      width: 208px;
      height: 37px;
      position: absolute;
      top: 41px;
      left: 150px;
    }
    .certificate-title {
      position: absolute;
      background-image: url('@/assets/images/card/cer-subtitle.png');
      background-position: center center;
      background-size: 100% 100%;
      height: 24px;
      width: 332px;
      top: 91px;
      left: 150px;
    }
    .certificate-line {
      width: 453px;
      height: 1px;
      background: linear-gradient(360deg, #e8c483 0%, #d9ba83 100%);
      top: 159px;
      left: 30px;
      position: absolute;
    }
    .certificate-info {
      padding: 179px 0 22px 30px;
      .certificate-label {
        width: 160px;
        font-size: $zaui-font-size-sm;
        font-weight: 400;
        color: #aa8350;
        line-height: 46px;
      }
      .certificate-text {
        font-size: $zaui-font-size-sm;
        font-weight: 400;
        color: #663a13;
        line-height: 46px;
      }
      .certificate-info-row {
        display: flex;
        line-height: 50px;
      }
    }
    .certificate-badge {
      position: absolute;
      right: 40px;
      top: 35px;
      width: 200px;
      height: 200px;
    }
    .top78 {
      top: 10px;
    }
    .certificate-empty {
      padding: 58px 30px;
    }
    .certificate-empty-title {
      line-height: 45px;
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #4b2c26;
      margin-bottom: 6px;
    }
    .certificate-iconfont {
      font-size: $zaui-font-size-lg;
      margin-right: 14px;
    }
    .certificate-empty-text {
      color: #c2a6a0;
      font-size: $zaui-font-size-md;
      margin-bottom: 35px;
    }
    .certificate-empty-action {
      color: #ae4a35;
      font-size: $zaui-font-size-lg;
      font-weight: 600;
    }
    .certificate-content {
      padding: 40px 30px 36px;
    }

    .certificate-info-row {
      display: flex;
      line-height: 50px;
    }
    .certificate-label {
      width: 160px;
      font-size: $zaui-font-size-md;
      color: #c2a6a0;
    }
    .certificate-text {
      color: #43231d;
      font-size: $zaui-font-size-md;
    }
  }
  .card-certificate::after {
    position: absolute;
    background: linear-gradient(180deg, rgba(255, 252, 245, 1), rgba(255, 251, 236, 0), rgba(255, 244, 193, 1));
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    content: '';
    z-index: -1;
    border-radius: 30px;
    box-shadow: 0px 4px 18px 0px rgba(227, 185, 120, 0.6);
  }
}
</style>
