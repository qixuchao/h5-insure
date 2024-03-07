<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:15:06
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-11-14 17:18:18
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/compositionProposal/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container head-cover">
    <div class="info-detail">
      <template v-if="!isTotal">
        <div class="name">
          <div>
            <span clase="p1">{{ props.info?.name }}</span>
            <span class="p2">{{ SEX_LIMIT_MAP[props.info?.gender] }} / {{ dayjs().diff(info?.birthday, 'y') }}岁</span>
          </div>
        </div>
        <div class="fe">
          首年保费： <span>{{ toLocal(props.info?.totalPremium) }}元</span>
        </div>
      </template>
      <template v-else>
        <div class="name">
          <div>
            <span clase="p1">{{ props.info?.name }}</span>
            <span class="p2"
              >{{ getRelationName() }} / {{ SEX_LIMIT_MAP[props.info?.gender] }} /
              {{ dayjs().diff(info?.birthday, 'y') }}岁 / 首年保费:
              <span>¥{{ toLocal(props.info?.totalPremium) }}</span></span
            >
          </div>
        </div>
      </template>
    </div>
    <div class="line"></div>

    <div class="tp">
      <ProTable v-if="dataSource.length > 0" :columns="columns" class="table" :data-source="dataSource" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs';
import { toLocal } from '@/utils';
import { ProposalProductRisk } from '../../type';
import ProTable from '@/components/ProTable/index.vue';
import { SEX_LIMIT_ENUM, SEX_LIMIT_MAP } from '@/common/constants';
import { RELATION_HOLDER_LIST } from '@/common/constants/product';

const props = defineProps({
  info: {
    type: Object,
    default: () => null,
  },
  isTotal: {
    type: Boolean,
    default: () => false,
  },
});

const columns = [
  {
    title: '险种名称',
    dataIndex: 'riskName',
    width: 180,
  },
  {
    title: '基本保险金额',
    dataIndex: 'initialAmount',
    render: (record) => {
      if (record.riskCode === '115044') {
        return '20元/天';
      }
      return `${toLocal(record.initialAmount)}元`;
    },
  },
  {
    title: '保障期间',
    dataIndex: 'coveragePeriod',
    width: 110,
    render: (record) => record.coveragePeriod.replace('保终身', '终身'),
  },
  {
    title: '交费期间',
    dataIndex: 'chargePeriod',
    width: 110,
  },
  {
    title: '首年保费',
    dataIndex: 'initialPremium',
    width: 120,
    render: (record) => `${toLocal(record.initialPremium)}元`,
  },
];

const dataSource = ref<Array<ProposalProductRisk>>([]);

const isMale = (gender: number) => {
  return gender === +SEX_LIMIT_ENUM.MALE;
};

// 保障期间
const getCover = (val: string) => {
  const arr = val.split('_');
  if (val === 'to_life') {
    return '保终身';
  }
  switch (arr[0]) {
    case 'year':
      return `${arr[1]}年`;
    case 'month':
      return `${arr[1]}月`;
    case 'day':
      return `${arr[1]}天`;
    case 'to':
      return `保至${arr[1]}岁`;

    default:
      return '';
  }
};

const getRelationName = () => {
  const tedxt = RELATION_HOLDER_LIST.find((e) => +e.value === props.info.relationToMainInsured);
  return (tedxt && tedxt.label) || '';
};

// 交费期间
const getChargePay = (val: string) => {
  const arr = val.split('_');
  switch (arr[0]) {
    case 'year':
      return `${arr[1]}年交`;
    case 'month':
      return `${arr[1]}月交`;
    case 'to':
      return `交至${arr[1]}岁`;
    case 'single':
      return `趸交`;

    default:
      return '';
  }
};

const setProposalProductRiskVOList = (dataList: Array<any>) => {
  const list: Array<any> = [];
  dataList?.forEach((item: any) => {
    const { riskName, initialAmount, coveragePeriod, chargePeriod, initialPremium } = item;
    list.push({
      riskName,
      initialAmount,
      coveragePeriod: getCover(coveragePeriod),
      chargePeriod: getChargePay(chargePeriod),
      initialPremium,
    });
  });

  dataSource.value = list;
};

watch(
  () => props.info,
  (val) => {
    setProposalProductRiskVOList(val?.proposalProductRiskVOList);
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.container {
  padding: 26px 20px 30px;
  .head-cover {
    margin-top: -30px;
  }
  .info-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name {
      display: flex;
    }
    .p1 {
      font-size: 32px;
      font-weight: 500;
      color: #333333;
    }
    .p2 {
      padding-left: 22px;
      font-size: 24px;
      font-weight: 400;
      color: #393d46;
    }
    .img {
      width: 80px;
      height: 80px;
      background: #eeeeee;
      margin-right: 16px;
      border-radius: 50%;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .fe {
      font-size: 26px;
      span {
        color: $zaui-price;
        font-weight: 400;
      }
    }
  }
  .line {
    margin: 0 -20px;
    padding-bottom: 30px;
    border-bottom: 1px solid $zaui-line;
    transform: scaleY(0.5);
  }
  .tp {
    margin-top: 22px;
  }
}
</style>
