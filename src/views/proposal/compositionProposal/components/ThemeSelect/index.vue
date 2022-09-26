<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-22 14:49:36
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-26 14:41:07
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/compositionProposal/components/ThemeSelect/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPopup v-model:show="show" class="theme-select-wrap" title="选择计划书封面" @close="emits('update:show', false)">
    <div class="popup-body">
      <van-cell center title="封面图">
        <template #right-icon>
          <van-switch v-model="themeStatus" :inactive-value="0" :active-value="themeList[0].id" size="24" />
        </template>
      </van-cell>

      <div class="">
        <VanRadioGroup v-model="checked">
          <VanCellGroup inset>
            <div class="radio-wrap">
              <div v-for="item in themeList" :key="item.id" class="radio-item">
                <div
                  class="radio-img"
                  :style="{ backgroundImage: `url(${item.showConfig.thumbnailImage})` }"
                  @click="onCheck(item.id)"
                >
                  <VanRadio :name="item.id" />
                </div>
                <span>{{ item.name }}</span>
              </div>
            </div>
          </VanCellGroup>
        </VanRadioGroup>
      </div>
    </div>
    <div class="footer">
      <VanButton type="primary" :disabled="!(checked || !themeStatus)" block @click="submit">确定</VanButton>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="themeSelect">
import { withDefaults } from 'vue';
import { ThemeItem } from '@/api/modules/compositionProposal.data';

interface Props {
  show: boolean;
  themeList: ThemeItem[];
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  themeList: () => [],
});

const emits = defineEmits(['submit', 'update:show']);

const { show, themeList } = unref(props);
const checked = ref<number>(themeList?.[0]?.id);
const themeStatus = ref<number>(themeList?.[0]?.id);

const onCheck = (value: number) => {
  checked.value = value;
};

const submit = () => {
  emits('submit', themeStatus.value ? checked.value || themeList?.[0]?.id : themeStatus.value);
};
</script>

<style lang="scss">
.theme-select-wrap {
  z-index: 99999999 !important;

  .van-cell-group--inset {
    margin: 0 20px;
  }

  .radio-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .radio-item {
      text-align: center;
      width: 216px;
      margin: 16px 10px;
    }
    .radio-img {
      width: 100%;
      height: 304px;
      border-radius: $zaui-border-radius-tag-small;

      background-repeat: no-repeat;
      background-size: contain;
      background-position: center top;
      text-align: right;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 20px;
    }
  }

  .footer {
    position: absolute;
    width: 100%;
    height: 106px;
    padding: 0 $zaui-card-border;
    background-color: #ffffff;
    bottom: 0;
  }
}
</style>
