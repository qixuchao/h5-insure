<template>
  <div class="input-group">
    <div v-if="showTypes === 1">
      <!-- 步进值 -->
      <ProField type="input" name="minValue" label="最小值" :disabled="disabled" />
      <ProField type="input" name="maxValue" label="最大值" :disabled="disabled" />
      <ProField type="input" name="stepValue" label="步进值" :disabled="disabled" />
      <van-stepper v-model="value" />
    </div>
    <div v-else-if="showTypes === 2" class="flex-field">
      <ProField type="checkboxGroup" :maxlength="200">
        <el-checkbox-group v-model="mValuesSelected" style="display: flex" :min="1">
          <template v-for="item in mConfigs.riskCalcMethodInfoVO.displayValues" :key="item">
            <el-checkbox :label="item" :disabled="mConfigs.riskCalcMethodInfoVO.displayValues.length === 1">{{
              item
            }}</el-checkbox>
          </template>
        </el-checkbox-group>
      </ProField>
      <!-- <div>
          <div style="display: inline-flex; width: 400px">
            <span style="width: 200px">最小值：</span>
            <el-input
              v-model="mValues.minValue"
              class="input-area"
              type="number"
              :onblur="handleInputBlur"
            />
            <span style="width: 200px; margin-left: 20px">最大值：</span>
            <el-input
              v-model="mValues.maxValue"
              class="input-area"
              type="number"
              :onblur="handleInputBlur"
            />
          </div>
        </div> -->
    </div>
    <div v-else-if="showTypes === 3">
      <!-- 枚举 份数 -->
      <div class="">
        <ProField type="checkboxGroup" :maxlength="200">
          <el-checkbox-group v-model="mValuesSelected" style="display: flex" :min="1">
            <template v-for="item in mConfigs.riskCalcMethodInfoVO.displayValues" :key="item">
              <el-checkbox :label="item" :disabled="mConfigs.riskCalcMethodInfoVO.displayValues.length === 1">{{
                item
              }}</el-checkbox>
            </template>
          </el-checkbox-group>
        </ProField>
      </div>
      <div>
        <div style="display: inline-flex; width: 400px">
          <span style="width: 200px">最小份：</span>
          <el-input
            v-model="mValues.minValue"
            class="input-area"
            type="number"
            :onblur="handleInputBlur"
            :disabled="disabled"
          />
          <span style="width: 200px; margin-left: 20px">最大份：</span>
          <el-input
            v-model="mValues.maxValue"
            class="input-area"
            type="number"
            :onblur="handleInputBlur"
            :disabled="disabled"
          />
        </div>
      </div>
    </div>
    <div v-else-if="showTypes === 4">
      <!-- 份数 -->
      <ProField type="input" name="minValue" label="最小份" :onblur="handleInputBlur" :disabled="disabled" />
      <ProField type="input" name="maxValue" label="最大份" :onblur="handleInputBlur" :disabled="disabled" />
      <ProField type="input" name="eachCopyPrice" label="每份金额" :disabled="disabled" :onblur="handleCopiesBlur" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue';

// 参看CollapseItem组件
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [0, 0],
  }, // Vue3使用modelValue取代了Vue2中的value
  disabled: {
    type: Boolean,
    default: () => false,
  },
});

const mValues = ref(props.modelValue.amountPremiumConfigVO);
const showTypes = ref(1);

watch(
  () => mValues,
  (v) => {
    if (v.displayType === 1) {
      showTypes.value = 1;
    } else if (v.displayType === 3 && v.requireCopies === 2) {
      showTypes.value = 2;
    } else if (v.displayType === 3 && v.requireCopies === 1) {
      showTypes.value = 3;
    } else if (v.displayType === 2) {
      showTypes.value = 4;
    }
  },
  {
    deep: true,
  },
);
</script>
<style lang="scss" scoped>
.flex-form {
  // display: flex;
  .flex-field {
    display: flex;
    flex-direction: column;
    // height: 80px;
    .input-area {
      // width: 100px;
    }
  }
}
.gap {
  display: inline-block;
  width: 100px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  background-color: rgb(233, 231, 231);
  border: 1px solid rgb(205, 205, 205);
}
</style>
