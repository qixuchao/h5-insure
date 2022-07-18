<template>
  <ProPageWrap>
    <div class="page-product-detail">
      <van-swipe class="swipe">
        <van-swipe-item v-for="(item, index) in imageList" :key="index">
          <img :src="item" class="swipe-img" />
        </van-swipe-item>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
      <div class="title">
        <div class="text">富得生命满天星重大疾病保险</div>
        <div class="desc">
          重大疾病不分组赔付3次，保费低；人生重要阶段，轻症/重疾翻倍赔；特定良性肿瘤保险金，可选责任质优价低；
        </div>
      </div>
      <ProDivider />
      <ProCard title="保障详情" link="查看详情">
        <div class="basic">
          <ProCell title="身故保险金" content="基本保基本保额基本保额说基" />
          <ProCell title="特定良性肿瘤手术保障" content="按已交保费200%" />
          <ProCell title="重大疾病、轻症和中症疾病豁免保险费" content="200万" />
          <ProCell title="身故保险金" content="按已交保费200%" />
          <ProCell title="身故保险金" content="基本保基本保额基本保额说基" />
        </div>
        <div class="field">
          <FieldInfo title="投保年龄" desc="满30天 ~ 60周岁" />
          <FieldInfo title="交费期间" desc="趸交/3年/5年/10年/15年/18年/19年/20年" />
          <FieldInfo title="交费方式" desc="年交" />
          <FieldInfo title="投保年龄" desc="满30天" />
          <FieldInfo title="领取年龄" desc="55/60/55周岁" />
          <FieldInfo title="投保年龄" desc="满30天" />
          <FieldInfo title="领取方式" desc="年领/月领" />
          <FieldInfo title="性别限制" desc="无性别限制" />
          <FieldInfo title="社保限制" desc="无社保限制" />
          <FieldInfo title="职业类别" desc="1-3类职业" />
        </div>
      </ProCard>
      <ProTab class="tabs" :list="tabList" sticky>
        <template #tab1>
          <div class="tab-1">
            <img :src="detailImage" class="detail-img" />
            <ProCard title="产品资料">
              <template #subTitle>
                <div class="sub-title">*产品资料文件详情可手动放大，以便您更清晰查阅内容。</div>
              </template>
              <div class="tab-1-content">
                请查看<span v-for="(item, index) in fileList" :key="index" class="file-name">《{{ item }}》</span>
              </div>
            </ProCard>
          </div>
        </template>
      </ProTab>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import ProDivider from '@/components/ProDivider/index.vue';
import ProCard from '@/components/ProCard/index.vue';
import ProTab from '@/components/ProTab/index.vue';
import ProCell from '@/components/ProCell/index.vue';
import FieldInfo from '../components/fieldInfo.vue';
import swipeImage from '@/assets/images/temp/swipe.png';
import detailImage from '@/assets/images/temp/detail.png';

const imageList = ref([swipeImage, swipeImage, swipeImage]);
const tabList = [
  { title: '产品特色', slotName: 'tab1' },
  { title: '理赔流程', slotName: 'tab2' },
  { title: '常见问题', slotName: 'tab3' },
];
const fileList = ['保险条款', '投保须知', '费率表', '责任免除条款说明书', '重要提示', '特别约定', '特殊职业类别表'];
</script>

<style lang="scss" scoped>
.page-product-detail {
  .swipe {
    width: 100%;
    height: 400px;
    position: relative;
    .swipe-img {
      width: 100%;
      height: 400px;
    }
    .custom-indicator {
      position: absolute;
      width: 66px;
      height: 44px;
      line-height: 44px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 22px;
      right: 30px;
      bottom: 20px;
      font-size: 24px;
      color: #fff;
      text-align: center;
    }
  }
  .title {
    padding: 30px;
    .text {
      font-size: 36px;
      font-weight: 500;
      color: #393d46;
      line-height: 50px;
    }
    .desc {
      margin-top: 15px;
      font-size: 26px;
      color: #99a9c0;
      line-height: 37px;
    }
  }
  .tabs {
    .tab-1 {
      .detail-img {
        width: 100%;
      }
      .sub-title {
        font-size: 26px;
        color: #ff5840;
        line-height: 38px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
