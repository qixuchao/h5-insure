<!--
 * @Description: 半圆进度条 （支持自定义颜色、半径、粗细）
 * @Autor: kevin.liang
 * @Date: 2022-03-02 17:39:42
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-12 11:01:31
-->
<template>
  <div
    class="com-progress"
    :style="{
      height: boxHieght,
      width: svgStyle.width,
    }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      :viewBox="viewBox"
      :style="svgStyle"
    >
      <defs>
        <linearGradient id="greenGradient">
          <stop v-for="(c, index) in colors" :key="c" :offset="index" :stop-color="c" />
        </linearGradient>
      </defs>
      <circle
        :cx="circleCenter"
        :cy="circleCenter"
        :r="radius"
        stroke="#f3f3fa"
        :stroke-width="innerStrokeWidth"
        fill="none"
        :stroke-dasharray="harfPer"
        :stroke-dashoffset="0"
        stroke-linecap="round"
      />
      <circle
        v-if="modelValue > 0"
        :cx="circleCenter"
        :cy="circleCenter"
        :r="radius"
        stroke="url(#greenGradient)"
        :stroke-width="outerStrokeWidth"
        fill="none"
        :stroke-dasharray="dasharray"
        :stroke-dashoffset="0"
        stroke-linecap="round"
      />
      <circle
        v-for="(c, i) in cirs"
        :key="i"
        :cx="c.x"
        :cy="c.y"
        :r="c.x === 270 ? outerStrokeWidth * 0.36 : '1'"
        stroke="#f3f3fa"
        :stroke-width="c.x === 270 ? 'none' : '2'"
        :fill="c.x === 270 ? '#fff' : 'none'"
        stroke-linecap="round"
      />
      <circle
        v-show="modelValue > 0"
        :cx="target.x"
        :cy="target.y"
        :r="outerStrokeWidth * 0.36"
        stroke="none"
        fill="#fff"
        stroke-linecap="round"
      ></circle>
    </svg>
    <div :class="size">
      <div class="percent">
        <div class="number">{{ modelValue }}<small>%</small></div>
        <div class="desc">{{ desc }}</div>
      </div>
      <div v-show="isShowMark" class="mark start" :style="{ left: `${markPosition - -5}px` }">0</div>
      <div v-show="isShowMark" class="mark end" :style="{ right: `${markPosition - -5}px` }">
        <div class="end-text">100</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';

interface Props {
  modelValue: number;
  colors?: string[]; // 半圆过渡颜色
  radius?: number; // 半径
  innerStrokeWidth?: number; // 底圈半径
  outerStrokeWidth?: number; // 颜色圈半径
  desc: string; // 数据描述文字（不要超过15个字）
  isShowMark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  colors: () => ['var(--activity-circle-top-2)', 'var(--activity-circle-top-1)'],
  radius: 100,
  innerStrokeWidth: 10,
  outerStrokeWidth: 20,
  desc: '活动量汇总',
  isShowMark: true,
});

const newModelValue = ref(0);
const { modelValue, colors, radius, innerStrokeWidth, outerStrokeWidth, desc, isShowMark } = toRefs(props);
if (modelValue.value > 100) {
  newModelValue.value = 100;
  // try {
  //   throw new Error('value 必须是0~100之间的数值');
  // } catch (e) {
  //   console.error(e);
  // }
} else if (modelValue.value < 0) {
  newModelValue.value = 0;
  // try {
  //   throw new Error('value 必须是0~100之间的数值');
  // } catch (e) {
  //   console.error(e);
  // }
} else {
  newModelValue.value = modelValue.value;
}

console.log(modelValue.value, newModelValue.value);
const percent = computed(() => newModelValue.value / 100); // 百分比小数
const perimeter = Math.PI * 2 * radius.value; // 周长
const harfPer = computed(() => perimeter / 2);
const svgStyle = computed(() => {
  return {
    width: `${(radius.value + outerStrokeWidth.value) * 2}px`,
    height: `${radius.value * 2 + outerStrokeWidth.value}px`,
  };
});

const dasharray = computed(() => `${perimeter * percent.value * 0.5} ${perimeter}`); // 要画的部分
const viewBox = `0 0 ${radius.value * 2 + outerStrokeWidth.value} ${radius.value * 2 + outerStrokeWidth.value}`;
// 圆圈定位中心
const circleCenter = computed(() => radius.value + outerStrokeWidth.value / 2);
// 外框高度
const boxHieght = `${radius.value + outerStrokeWidth.value + 4}px`;
const markPosition = outerStrokeWidth.value * 1.7;

const size = radius.value < 100 ? 'small' : radius.value > 200 ? 'large' : '';
// 计算出小点点的位置
const r = radius.value;
// 十个小点的位置
const angles = [0, 18, 36, 54, 72, 90, 108, 126, 144, 162, 180];
const cirs = angles.map((ang) => {
  return {
    x: circleCenter.value + r * Math.sin(((ang + 270) * Math.PI) / 180),
    y: circleCenter.value + r * Math.cos(((ang + 270) * Math.PI) / 180),
  };
});

// 当前百分比点位的角度
const targetAngle = computed(() => (newModelValue.value / 100) * 180 + 270);
const target = computed(() => ({
  // 这里加 负号，因为sin 移动270°之后，变成负数了
  x: circleCenter.value + r * Math.sin((-targetAngle.value * Math.PI) / 180),
  y: circleCenter.value + r * Math.cos((targetAngle.value * Math.PI) / 180),
}));
</script>

<style lang="scss">
$numFont: -apple-system, Helvetica, sans-serif;
$fontSize: var(--fs);
.com-progress {
  position: relative;
  overflow: hidden;
  margin: 82px auto;
  svg {
    // border: 1px solid red;
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
  circle {
    -webkit-transition: stroke-dasharray 0.25s;
    // transform: translate(100px, 100px) rotate(50deg);
    transition: stroke-dasharray 0.25s;
  }
  // 小图下面的尺寸
  .small {
    .percent {
      font-size: $zaui-font-size-sm;
      .number {
        font-size: 68px;
      }
      small {
        font-size: 20px;
      }
    }
  }
  // 大图下面的尺寸
  .large {
    .percent {
      font-size: 36px;
      top: 50%;
      .number {
        font-size: 118px;
      }
      small {
        font-size: $zaui-font-size-lg;
      }
      .desc {
        font-weight: 400;
      }
    }
  }
  .percent {
    position: absolute;
    width: 60%;
    height: 100px;
    font-size: $zaui-font-size-md;
    top: 40%;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    color: $tip-color;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 400;
    .number {
      color: $text-color;
      font-size: 90px;
      font-family: $numFont;
      font-weight: bold;
      line-height: 1;
    }
    small {
      font-size: $zaui-font-size-md2;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
    }
  }
  $img: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAiCAYAAADoFwGaAAAAAXNSR0IArs4c6QAAAixJREFUaEPl2jFoFEEUBuD/7XJKjuOaCGITJY2dKAgRDVYqKulTWwrGTltttRUsLOwCNraKsdSQIAhJkUIQwcLUYWf21uzM3i+7MafH7WX3rsrMbntvHu977+529uYEFVeScC7L7EOSdwHMAzhZteb4vS4KwE4YBqszM8ErEUnzGuWoQuPYLmVZf1UE3eMHmrqirTBsLbXb8mssXuv0IoBN0sVJVzZmq9NpLZTiSUocm68kLlWmcTQgDMOVUrxS+8uAvHHUVbNs2RzBkwy1NjsAztfM4miYqBG81vYe2X/tqGiisofwJE/EsflG4txEWRwNHsIrlT4A8MJRy8RlD/C7u2x3u/Y7yTMTZ3F0wQCvtXlM8pmjjqnKLvAku1rbHwBnp8ri6KICr5R5CvCJo4apy5Yo4qxIMXWf9u+1GiJam0ckn9eK9ixIlEo/AVj0zFWLk+N/ApirFe1ZUI7fBnDBM1ctTo5/CeB+rWjPgiSO08ukfMmf4T2zVXIKsNbmHck7ldGeBRT4Xi9d6Pdlo2nT/39v/57kbc+GeyRngO/1eCXLzEYj8Qd7/P0PgNxqSgOGvuGjyFwV4Xoj8QfTT9cA3GxCA0bu7VFkronwcyPxf+/7H0ne8LsBJT9d5+AkMYvWMn/a8/gqObQ41Gpt1kh6+9kfe1yVN2Bv7/d8EATbIuh4OP7xB5WH2CQx163lWwCnPGpA9RH1v7c/T5PpCiDLInKWZMu9RpT/OeEPy2rp87OCIgYAAAAASUVORK5CYII=');
  .mark {
    background-image: $img;
    background-size: 100% 100%;
    font-size: $zaui-font-size-md;
    font-family: $numFont;
    color: #bcbcbc;
    font-weight: bold;
    position: absolute;
    bottom: 12px;
    height: 34px;
    line-height: 34px;
    width: 64px;
    text-align: center;
    &.start {
      left: 30px;
    }
    &.end {
      right: 30px;
      transform: rotate(180deg);
    }
    .end-text {
      transform: rotate(-180deg);
    }
  }
}
</style>
