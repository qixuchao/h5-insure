<!--
 * @Author: za-yuxiaowei yuxiaowei@zhongan.io
 * @Date: 2022-07-12 10:50:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-27 15:15:10
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProSelect/index.vue
 * @Description:
-->
<template>
  <ProPopup v-model:show="isShow" class="com-select" title="选择保单通讯信息">
    <div class="com-select-container">
      <van-radio-group v-model="checked">
        <van-radio v-for="(item, index) in dataSource" :key="index" :name="index + 1" class="radio-item">
          <div class="radio-item-wrapper">
            <p>
              <span class="name">{{ item.contactName }}</span>
              <span class="hone">{{ item.contactPhoneNo }}</span>
            </p>
            <p class="address">{{ item.contactAddress }}</p>
          </div>
        </van-radio>
      </van-radio-group>
    </div>
    <div class="footer-button">
      <VanButton plain type="primary">取消</VanButton>
      <VanButton type="primary" @click="handleSubmit">确认</VanButton>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup>
import ProPopup from '@/components/ProPopup/index.vue';

const emits = defineEmits(['update', 'submit']);

const props = defineProps({
  dataSource: {
    type: Array as () => Array<any>,
    default: () => [],
  },
  show: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
});

const checked = ref(null);
const isShow = ref(props.show);

const handleSubmit = () => {
  emits('submit', checked.value);
  isShow.value = false;
};

// watch(
//   () => props.show,
//   (val) => {
//     isShow.value = val;
//   },
// );

watch(
  () => props.modelValue,
  (newVal) => {
    checked.value = newVal;
  },
);

watch(isShow.value, (val) => {
  emits('update:show', val);
});
</script>

<style lang="scss" scoped>
.com-select {
  .com-select-container {
    padding: 30px;
    .radio-item {
      margin: 20px 0;
      .radio-item-wrapper {
        padding: 0 32px;
        p {
          font-size: 30px;
          font-family: PingFangSC-Semibold, PingFang SC, serif;
          color: #393d46;
          margin: 5px 0;
        }
        .name {
          font-weight: 600;
          margin-right: 30px;
        }
        .phone {
          font-weight: 400;
        }
      }
    }
  }
}
</style>
