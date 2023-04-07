<!--
 * @Author: zhaopu
 * @Date: 2022-11-01 13:46:41
 * @LastEditors: zhaopu
 * @LastEditTime: 2023-02-06 13:25:45
 * @Description: 加油包
-->
<template>
  <div class="refueling-package-com">
    <div class="title">加油包</div>
    <ProForm ref="formRef">
      <ProField
        v-for="(item, index) in displayList"
        :key="`${item.value}_${index}`"
        v-model="item.value"
        :label="item.packageName"
        required
        placeholder="请选择"
      >
        <template #input>
          <ProRadioButton v-model="item.value" :options="INSURE_TYPE_LIST" :disabled="item.disabled" />
        </template>
      </ProField>
      <div v-if="isShowOptBtn" class="show-more" @click="handleShowMore">
        {{ showMore ? '收起' : '查看更多' }} <ProSvg name="down" :class="['icon', { showMore }]" />
      </div>
    </ProForm>
  </div>
</template>

<script lang="ts" setup name="package">
import { useToggle } from '@vant/use';
import { withDefaults } from 'vue';
import { INSURE_TYPE_LIST } from '@/common/constants/infoCollection';
import { PackageProductVoItem } from '@/api/modules/trial.data';
import ProSvg from '@/components/ProSvg/index.vue';

interface Props {
  packageProductList: PackageProductVoItem[];
  isShowClose: boolean;
  count: number;
}

const props = withDefaults(defineProps<Props>(), {
  packageProductList: () => [],
  isShowClose: false,
  count: 3,
});

const [showMore, toggle] = useToggle(false);

const isShowOptBtn = computed(() => {
  if (props.packageProductList.length > props.count) {
    if (props.isShowClose) return true;
    return !showMore.value;
  }
  return false;
});

const handleShowMore = () => {
  toggle();
};

const displayList = computed(() => {
  if (props.packageProductList.length <= props.count) {
    return props.packageProductList;
  }
  if (showMore.value) {
    return props.packageProductList;
  }
  return props.packageProductList.slice(0, props.count);
});
</script>

<style lang="scss" scope>
.refueling-package-com {
  background: #fff;
  .title {
    background: #ffffff;
    font-size: 32px;
    font-weight: 500;
    color: #333333;
    line-height: 30px;
    padding: 30px 25px;
  }

  .van-cell {
    align-items: center;
    .van-field__label {
      min-width: 300px !important;
    }
  }

  .show-more {
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: $zaui-brand;
    .icon {
      margin-left: 10px;
      font-size: 20px;
      transition: transform 0.5s;
      &.showMore {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
