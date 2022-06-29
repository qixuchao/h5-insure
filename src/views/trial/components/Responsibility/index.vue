<template>
  <div class="risk-responsibility">
    <div class="title">责任投保说明</div>
    <div class="responsibility-content">
      <ul>
        <li v-if="dataSourse && dataSourse.length >= 1">
          <div class="responsibility-sign">1</div>
          <span>{{ isShowData[0] }}</span>
        </li>
        <li v-if="dataSourse && dataSourse.length >= 2">
          <div class="responsibility-sign">2</div>
          <span>{{ isShowData[1] }}</span>
        </li>
        <div v-show="isShow">
          <li v-for="(item, index) in dataSourse" :key="index">
            <div class="responsibility-sign">{{ index + 3 }}</div>
            <span>{{ item }}</span>
          </li>
        </div>
      </ul>
      <div class="spread">
        <div style="text-align: center" @click="handleClick">
          <span>{{ isShow ? '收起' : '展开' }}</span>
          <ZaSvg
            style="width: 20px; height: 20px; vertical-align: top"
            :name="isShow ? 'arrow-up' : 'arrow-down'"
          ></ZaSvg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed, ref } from 'vue';

const props = defineProps({
  dataSourse: {
    type: Array,
    default: () => [],
  },
});
const isShowData = computed(() => {
  return [
    props.dataSourse && props.dataSourse[0] ? props.dataSourse[0] : '',
    props.dataSourse && props.dataSourse[1] ? props.dataSourse[1] : '',
  ];
});
const hiddenData = computed(() => {
  const arr = props.dataSourse && props.dataSourse.length ? props.dataSourse : [];
  return arr.splice(1, 2);
});

const isShow = ref(false);

const handleClick = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="scss" scoped>
.risk-responsibility {
  .title {
    padding: var(--zaui-page-border) var(--zaui-space-home-card);
    font-size: $zaui-font-size;
    font-weight: 700;
    color: #000;
  }
  .responsibility-content {
    padding-left: var(--zaui-page-border);
    font-size: $zaui-font-size;
    color: #ccc;
    li {
      display: flex;
      align-items: center;
      height: 54px;
    }
    .responsibility-sign {
      margin-right: var(--zaui-space-card);
      width: 36px;
      height: 36px;
      text-align: center;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
  }
}
</style>
