<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 10:50:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-12 11:02:25
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProSelect/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPopup v-model:show="isShow" class="com-select" title="请选择" show-footer @submit="handleSubmit">
    <div class="com-select-container">
      <van-radio-group v-model="checked">
        <van-radio v-for="item in dataSource" :key="item[valueKey]" :name="item[valueKey]" class="radio-item">
          {{ item[labelKey] }}
        </van-radio>
      </van-radio-group>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup>
import ProPopup from '@/components/ProPopup/index.vue';

const emits = defineEmits(['update:show', 'submit']);

const props = defineProps({
  dataSource: {
    type: Array as () => Array<any>,
    default: () => [],
  },
  labelKey: {
    type: String,
    default: 'title',
  },
  valueKey: {
    type: String,
    default: 'id',
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const checked = ref(0);
const isShow = ref(props.show);

const handleSubmit = () => {
  emits('submit', checked.value);
  isShow.value = false;
};

watch(
  () => props.show,
  (val) => {
    isShow.value = val;
  },
);

watch(isShow, (val) => {
  emits('update:show', val);
});
</script>

<style lang="scss" scoped>
.com-select {
  .com-select-container {
    padding: 30px;
    .radio-item {
      margin: 20px 0;
    }
  }
}
</style>
