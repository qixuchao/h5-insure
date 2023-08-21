<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="page-order-detail">
      <div class="card card-head" @click="handleClick">
        <div class="card-item-name">订单进度</div>
        <div class="card-item-icon">
          人工核保
          <ProSvg name="arrow-right"></ProSvg>
        </div>
      </div>
      <div class="card card-list">
        <p class="card-list-title">健利保倍享版</p>
        <InfoItem label="订单号" :content="detail?.policyHolder" line is-copy min-width="other" />
        <InfoItem label="投保单号" content="P412312321312323" line is-copy min-width="other" />
        <InfoItem
          label="创建时间"
          :content="dayjs(detail?.orderStartDate).format('YYYY-MM-DD HH:mm:ss')"
          line
          min-width="other"
        />
        <InfoItem
          label="投保时间"
          :content="dayjs(detail?.orderStartDate).format('YYYY-MM-DD HH:mm:ss')"
          line
          min-width="other"
        />
        <InfoItem label="投保保费" content="¥2,000.00" line min-width="other" />
        <InfoItem label="承保保费" content="¥2,000.00" line min-width="other" />
      </div>
      <div class="card card-list">
        <div class="card-list-head">
          <div class="card-list-title">险种信息</div>
          <div class="card-list-premium">首年保费：<span>¥1,289.00</span></div>
        </div>
        <ProTable v-if="dataSource.length > 0" :columns="columns" class="table" :data-source="dataSource" />
      </div>
      <van-collapse v-model="activeList">
        <van-collapse-item title="标题1" name="1"> 代码是写出来给人看的，附带能在机器上运行。 </van-collapse-item>
        <van-collapse-item title="标题2" name="2"> 技术无非就是那些开发它的人的共同灵魂。 </van-collapse-item>
        <van-collapse-item title="标题3" name="3">
          在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
        </van-collapse-item>
      </van-collapse>
      <!-- <InsureInfo
        :product-data="detail?.insuredList?.[0]?.productList?.[0]"
        :total-premium="detail?.orderAmount"
        class="insure-info"
      /> -->
      <div v-loading="loading">
        <div v-if="detail?.orderTopStatus === ORDER_TOP_STATUS_ENUM.PENDING" class="footer-button">
          <van-button type="primary" @click.stop="handleDelete">删除</van-button>
          <van-button
            v-if="ORDER_STATUS_ENUM.UNDERWRITING_FAILED !== detail.orderStatus"
            type="primary"
            @click.stop="handleProcess"
            >去处理</van-button
          >
        </div>
        <div v-if="detail?.orderTopStatus === ORDER_TOP_STATUS_ENUM.PAYING" class="footer-button">
          <van-button type="primary" @click.stop="handleDelete">删除</van-button>
          <van-button type="primary" @click.stop="handlePay">去支付</van-button>
        </div>
        <div v-if="detail?.orderTopStatus === ORDER_TOP_STATUS_ENUM.TIMEOUT" class="footer-button">
          <van-button type="primary" @click.stop="handleDelete">删除</van-button>
        </div>
      </div>
    </div>
  </van-config-provider>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import qs from 'qs';
import { deleteOrder } from '@/api/modules/order';
import { getOrderDetail } from '@/api';
import { NextStepRequestData } from '@/api/index.data';
import { ORDER_TOP_STATUS_ENUM, ORDER_STATUS_MAP, ORDER_STATUS_ENUM } from '@/common/constants/order';
import { insureProductDetail, queryStandardInsurerLink } from '@/api/modules/trial';
import { InsureLinkReq } from '@/api/modules/trial.data';
import { PRODUCT_LIST_ENUM, PAGE_ROUTE_ENUMS, ORDER_STATUS_MAPPING_PAGE } from '@/common/constants';
import { TEMPLATE_NAME_ENUM, getTemplateNameById } from '@/common/constants/infoCollection';
import FieldInfo from '../components/fieldInfo.vue';
import InsureInfo from '../components/InsuredPart.vue';
import pageJump from '@/utils/pageJump';
import useTheme from '@/hooks/useTheme';
import { getPayUrl } from '@/api/modules/cashier';
import { sendPay } from '@/views/cashier/core';
import InfoItem from '../components/infoItem.vue';

const themeVars = useTheme();
const route = useRoute();
const router = useRouter();
const detail = ref<NextStepRequestData>();
const activeList = ref<string[]>([]);
const columns = [
  {
    title: '险种名称',
    dataIndex: 'key1',
    width: 200,
  },
  {
    title: '保险金额/份数',
    dataIndex: 'key2',
    width: 180,
  },
  {
    title: '保障期间',
    dataIndex: 'key3',
    width: 180,
  },
  {
    title: '交费期间',
    dataIndex: 'key4',
    width: 180,
  },
  {
    title: '首期保费',
    dataIndex: 'key5',
    width: 180,
    render(row: any, index: number) {
      return row.key1 + index;
    },
  },
];

const dataSource = [
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
];
const {
  query: { orderNo, agentCode, tenantId, abbreviation, productCategory, applicationNo },
} = route;
const handleClick = () => {
  console.log(orderNo, 'orderNo================');

  pageJump('orderTrajectory', { orderNo, agentCode, tenantId, abbreviation, productCategory, applicationNo });
};
const handleDelete = () => {
  Dialog.confirm({
    title: '确认',
    message: '确认删除订单？',
  }).then(() => {
    if (detail.value) {
      deleteOrder(detail.value.id, detail.value.orderStatus).then((res) => {
        const { code, data } = res;
        if (code === '10000') {
          Toast.success('删除成功');
        }
      });
    }
  });
};

const loading = ref(false);
const handleProcess = () => {
  if (detail.value) {
    const {
      id: orderId,
      extInfo: { templateId, pageCode, extraInfo },
      agencyId: agencyCode,
      insurerCode: currentInsurerCode,
      orderStatus,
    } = detail.value;
    const productCode = detail.value.insuredList?.[0]?.productList[0]?.productCode;
    const params: InsureLinkReq = {
      insurerCode: currentInsurerCode,
      productCode,
      tenantId: detail.value.tenantId,
      agencyCode: detail.value.agencyId,
      agentCode: detail.value.saleUserId,
      saleChannelId: extraInfo?.saleChannelId,
      extraMap: { ...detail.value?.extInfo?.extraInfo, orderNo: detail.value.orderNo },
    };
    loading.value = true;
    // TODO,跳转到对应的投保流程（订单转投保）
    queryStandardInsurerLink(params).then((res) => {
      console.log('投保链接==', res.data);
      // 获取投保链接
      if (res.code === '10000') {
        // 长期险或年金跳转对应pageCode的页面
        if ([TEMPLATE_NAME_ENUM.LONG, TEMPLATE_NAME_ENUM.NIANJIN].includes(getTemplateNameById(`${templateId}`))) {
          const queryStr = res.data.split('?')[1];
          const queryObj = qs.parse(queryStr);
          router.push({
            path: ORDER_STATUS_MAPPING_PAGE[orderStatus],
            query: {
              ...queryObj,
              extraInfo: queryObj.extraInfo,
              orderNo,
              templateId,
            },
          });
        } else {
          // 否则就是其他险种，走投保流程链接
          window.location.href = res.data;
        }
      }
    });
    // pageJump(pageCode, {
    //   productCode,
    //   orderNo,
    //   orderId,
    //   agentCode,
    //   templateId,
    //   tenantId,
    //   productCategory,
    //   insurerCode,
    //   agencyCode,
    //   // 是否从订单列表来的，用来判断是否展示导航栏
    //   isFromOrderList: '1',
    // });
  }
};
const handlePay = () => {
  if (detail.value) {
    const {
      extInfo: { templateId },
    } = detail.value;
    if ([TEMPLATE_NAME_ENUM.LONG, TEMPLATE_NAME_ENUM.NIANJIN].includes(getTemplateNameById(`${templateId}`))) {
      handleProcess();
    } else {
      getPayUrl(detail.value).then(({ code, data }) => {
        if (code === '10000') {
          sendPay(data as string);
        }
      });
    }
  }
};

onMounted(() => {
  getOrderDetail({ orderNo, agentCode, tenantId }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      detail.value = data;
    }
  });
});
</script>

<style lang="scss" scoped>
.page-order-detail {
  height: 100%;
  background: $zaui-global-bg;
  padding: 30px;
  padding-bottom: 180px;
  overflow-y: auto;
  .insure-info {
    border-radius: 20px;
    margin-top: 30px;
  }
  .card-head {
    display: flex;
    justify-content: space-between;
    padding: 37px 30px;
    margin-top: 30px;
    .card-item-name {
      font-size: 30px;
      font-weight: 500;
      color: #393d46;
      line-height: 42px;
    }
    .card-item-icon {
      font-size: 30px;
      font-weight: 400;
      color: #333333;
      line-height: 42px;
    }
  }
  .card {
    background: #fff;
    border-radius: 20px;
    margin-top: 20px;
    &:first-child {
      margin-top: 0;
    }
    .header {
      display: flex;
      flex: 1;
      align-items: center;
      .product-name {
        font-size: 30px;
        font-weight: 600;
        color: #333333;
        flex: 1;
        width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .company-name {
        flex: 0 0 150px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        padding: 0 10px;
        background: rgba(13, 110, 254, 0.1);
        border-radius: 8px;
        font-size: 22px;
        color: $zaui-brand;
      }
    }
    .status {
      margin-left: 30px;
      font-size: 26px;
      color: #99a9c0;
      line-height: 106px;
    }
    .detail {
      font-size: 30px;
      font-weight: 600;
      color: #333333;
      flex: 1;
      display: flex;
      align-items: center;
      &:before {
        content: ' ';
        width: 8px;
        height: 28px;
        border-radius: 4px;
        background: $zaui-brand;
        margin-right: 16px;
      }
    }
  }
  .card-list {
    padding: 30px;
    .card-list-head {
      display: flex;
      justify-content: space-between;
    }
    .card-list-title {
      font-size: 30px;
      font-weight: 500;
      color: #393d46;
      line-height: 42px;
    }
    .card-list-premium {
      font-size: 26px;
      font-weight: 400;
      color: #333333;
      line-height: 37px;
      span {
        color: #c41e21;
      }
    }
  }
  .table {
    margin-top: 30px;
  }
}
</style>
