<!-- 卡片进度  -->
<template>
  <div class="com-progress-card" :class="[progressCardClass || '']">
    <div class="description">
      <p class="title">
        <span>{{ title }}</span>
        <span class="unit">({{ unit }})</span>
      </p>
      <p class="quantification">{{ quantification }}</p>
    </div>
    <div v-show="isShowPorgress" class="progress">
      <van-progress
        :percentage="progress"
        :stroke-width="strokewidth"
        pivot-color="#FD4438"
        :show-pivot="false"
        :track-color="getRbgaString(color, 0.2)"
        :color="getRbgaString(color, 1)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * title  标题
 * unit  单位
 * quantification  量化说明格式例如（56/78%或 67）
 * color  颜色（注意传rgb,例如：(0, 175, 255)）
 * progress 进度
 */
import { withDefaults } from 'vue';

interface Props {
  title?: string;
  unit?: string;
  quantification?: string;
  color?: string;
  strokewidth?: string;
  isShowPorgress?: boolean;
  progressCardClass?: string;
}

const getRbgaString = (color: string, colorValue: number) => {
  return `rgba(${color},${colorValue})`;
};

const props = withDefaults(defineProps<Props>(), {
  title: '',
  unit: '次',
  quantification: '0/0%',
  color: '0, 175, 25',
  strokewidth: '4',
  isShowPorgress: true,
  progressCardClass: '',
});
const { title, unit, quantification, color, strokewidth } = toRefs(props);
// const reg = /(?<=\/).*(?=%)/g;
const startIndex = quantification?.value.indexOf('/');
const endIndex = quantification?.value.indexOf('%');

// const resProgress = quantification?.value.toString().match(reg);
const resProgress = quantification?.value.substring(startIndex + 1, endIndex);

const progress = ref(resProgress === '' ? '0' : Number(resProgress) > 100 ? '100' : resProgress);
// console.log('progress', title.value, progress.value);
</script>

<style lang="scss" scoped>
.com-progress-card {
  padding: 32px 16px 30px 16px;
  border-radius: 16px;
  background: rgba(236, 236, 247, 0.3);

  .description {
    // display: flex;
    line-height: 37px;
    // flex-direction: row;
    // justify-content: space-between;
    font-family: PingFangSC-Semibold, PingFang SC;
    .title {
      font-size: $zaui-font-size-sm2;
      font-weight: 600;
      color: #343434;
      .unit {
        margin-left: 6px;
        color: #616161;
        font-weight: 400;
        font-size: $zaui-font-size-sm;
      }
    }
    .quantification {
      font-size: $zaui-font-size-sm;
      font-weight: 400;
      color: #616161;
      margin-top: 4px;
    }
  }
  .progress {
    margin-top: 11px;
  }
}
</style>
