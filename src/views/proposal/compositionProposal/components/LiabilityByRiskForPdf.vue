<template>
  <div class="liability-wrap">
    <template v-for="(product, index) in productList" :key="index">
      <div class="pdf-content">
        <div class="product-name">{{ `保障计划${index + 1}: ${product.productName}` }}</div>
        <div v-for="(item, i) in product?.liabilityByRiskVOList" :key="i" class="risk-part">
          <div class="risk-title">{{ item.riskName }}</div>
          <div v-for="(liability, k) in item.proposalRiskLiabilityVOList" :key="k" class="liability-part">
            <div class="liability-name">{{ liability.liabilityName }}</div>
            <div v-dompurify-html="liability.liabilityDesc" class="liability-desc"></div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import html2canvas from 'html2canvas';
import { withDefaults } from 'vue';
import { fileUploadBase64 } from '@/api/modules/file';

const props = withDefaults(
  defineProps<{
    insuredId: number;
    productList: Array;
  }>(),
  {
    insuredId: null,
    productList: () => [],
  },
);

const emits = defineEmits(['uploadImg']);

const handleCharts = () => {
  setTimeout(() => {
    const nodeList = document.querySelector('.liability-wrap').querySelectorAll('.pdf-content');

    const productImageList = [];
    nodeList.forEach((node, index) => {
      const { width, height } = node.getBoundingClientRect();
      html2canvas(node, {
        useCORS: true,
        dpi: 400,
        height,
        // canvas高度与所截图高度相同或者更小，解决底部白边问题
        width,
      }).then(async (res) => {
        const chartsImg = res.toDataURL('image/jpeg', 0.5);

        const res2 = await fileUploadBase64({ fileBase64: chartsImg, uploadType: '99' });
        const { url } = res2.data;
        productImageList.push({ productCode: props.productList?.[index]?.productCode, productPicture: url });
      });
    });
    emits('uploadImg', { id: props.insuredId, productList: productImageList });
  }, 500);
};

onMounted(() => {
  handleCharts();
});
</script>

<style lang="scss" scoped>
.liability-wrap {
  widows: 100%;
  background: #ffffff;
  border-radius: 16px;
  margin-bottom: 20px;
  padding: 0 20px 30px 20px;
  .pdf-content {
    .product-name {
      font-size: 20px;
      font-weight: 600;
      color: #c41e21;
      padding: 13px 12px;
    }
    .risk-part {
      border: 1px solid #dcdcdc;
      padding-bottom: 12px;
      .risk-title {
        font-size: 18px;
        font-weight: 600;
        color: #203e72;
        border-bottom: 1px solid #dcdcdc;
        padding: 12px 13px;
      }
      .liability-part {
        padding: 12px 13px 0;
        .liability-name {
          font-size: 15px;
          font-weight: 600;
          color: #393d46;
          padding-bottom: 13px;
        }
        .liability-desc {
          font-size: 12px;
          font-weight: 400;
          color: #393d46;
        }
      }
    }
  }
}
</style>
