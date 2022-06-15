<template>
  <ZaPageWrap main-class="page-setTarget">
    <div class="top">
      <Title :title="targetName">
        <template #head>
          <div class="head-div"></div>
        </template>
      </Title>
    </div>
    <div class="form-area">
      <div v-for="(item, index) in list" :key="index" class="form-item-out">
        <div class="form-item-title">{{ item.goalItem }}</div>
        <div v-if="coloumList.includes('year')" class="form-item">
          <van-field
            v-model="item.year"
            label="年目标"
            type="digit"
            class="van-cell"
            input-align="right"
            placeholder="请输入"
            @update:model-value="
              (value) => {
                const newValue = value.replace(/\D/g, '').replace(/^0{1,}/g, '');
                onInput(newValue, item.goalItem, 'year');
              }
            "
          />
          <div class="unit">
            {{ unitFun(item.goalItem) }}
          </div>
        </div>
        <div v-if="coloumList.includes('halfyear')" class="form-item">
          <van-field
            v-model="item.halfyear"
            label="半年目标"
            type="digit"
            class="van-cell"
            input-align="right"
            placeholder="请输入"
            @update:model-value="
              (value) => {
                const newValue = value.replace(/\D/g, '').replace(/^0{1,}/g, '');
                onInput(newValue, item.goalItem, 'halfyear');
              }
            "
          />
          <div class="unit">
            {{ unitFun(item.goalItem) }}
          </div>
        </div>
        <div v-if="coloumList.includes('quarter')" class="form-item">
          <van-field
            v-model="item.quarter"
            label="季目标"
            type="digit"
            class="van-cell"
            input-align="right"
            placeholder="请输入"
            @update:model-value="
              (value) => {
                const newValue = value.replace(/\D/g, '').replace(/^0{1,}/g, '');
                onInput(newValue, item.goalItem, 'quarter');
              }
            "
          />
          <div class="unit">
            {{ unitFun(item.goalItem) }}
          </div>
        </div>
        <div v-if="coloumList.includes('month')" class="form-item">
          <van-field
            v-model="item.month"
            label="月目标"
            class="van-cell"
            type="digit"
            input-align="right"
            placeholder="请输入"
            @update:model-value="
              (value) => {
                const newValue = value.replace(/\D/g, '').replace(/^0{1,}/g, '');
                onInput(newValue, item.goalItem, 'month');
              }
            "
          />
          <div class="unit">
            {{ unitFun(item.goalItem) }}
          </div>
        </div>
        <div v-if="coloumList.includes('week')" class="form-item">
          <van-field
            v-model="item.week"
            label="周目标"
            type="digit"
            class="van-cell"
            input-align="right"
            placeholder="请输入"
            @update:model-value="
              (value) => {
                const newValue = value.replace(/\D/g, '').replace(/^0{1,}/g, '');
                onInput(newValue, item.goalItem, 'week');
              }
            "
          />
          <div class="unit">
            {{ unitFun(item.goalItem) }}
          </div>
        </div>
        <div v-if="coloumList.includes('day')" class="form-item">
          <van-field
            v-model="item.day"
            label="日目标"
            class="van-cell"
            type="digit"
            input-align="right"
            placeholder="请输入"
            @update:model-value="
              (value) => {
                const newValue = value.replace(/\D/g, '').replace(/^0{1,}/g, '');
                onInput(newValue, item.goalItem, 'day');
              }
            "
          />
          <div class="unit">
            {{ unitFun(item.goalItem) }}
          </div>
        </div>
        <Divided v-show="list.length !== index + 1" />
      </div>
    </div>
    <!-- <template #footer>
      <div class="btn-out">
        <van-button round type="primary" class="btn" @click="onSaveTarget">保存目标设置</van-button>
      </div>
    </template> -->
  </ZaPageWrap>
  <div class="setTarget-footer">
    <div class="btn-out">
      <van-button round type="primary" class="btn" @click="onSaveTarget">保存目标设置</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Field, CellGroup, Toast } from 'vant';
import { saveTarget } from '@/api/modules/target';
import { resetListToBack, isHaveEmptyValue, isMoreTwentyValue } from '../components/detailList';
import Title from '../components/Title.vue';
import Storage from '@/utils/storage';
import Divided from '../components/Divided.vue';
import useCheckBack from '@/hooks/useCheckBack';

const route = useRoute();
const router = useRouter();
const storage = new Storage({ source: 'localStorage' });

const list: any = reactive([]);
const nameList: any = reactive([]);
const coloumList: any = reactive([]);
const targetName = ref<any>('');

const onSaveTarget = () => {
  console.log(list, coloumList);
  // 清楚list内多余数据
  list.forEach((e) => {
    Object.keys(e).forEach((ke) => {
      if (!coloumList.includes(ke)) {
        delete e[ke];
      }
    });
  });
  if (isHaveEmptyValue(list)) {
    Toast('目标值需要为正整数');
    return;
  }
  if (isMoreTwentyValue(list)) {
    Toast('目标值最多8位');
    return;
  }

  storage.set('targetInfoData', list);
  useCheckBack();
  router.back();
};
onMounted(() => {
  list.push(...JSON.parse(route.params.info));
  coloumList.push(...Object.keys(list[0]));
  targetName.value = route.params.name;
  list.forEach((e: any) => {
    nameList.push(e.goalItem);
  });
  console.log(list);
  useCheckBack(list);
});
const defaultFYCvalue = ref(300000);
const defaultJJBFvalue = ref(20000);

const ALL_TABLE_DATA = () => {
  return {
    FYC: {
      goalItem: 'FYC',
      year: defaultFYCvalue.value,
      halfyear: (defaultFYCvalue.value / 2).toFixed(0),
      quarter: (defaultFYCvalue.value / 4).toFixed(0),
      month: (defaultFYCvalue.value / 12).toFixed(0),
      week: (defaultFYCvalue.value / 48).toFixed(0),
      code: 'FYC',
    },
    SFYP: {
      goalItem: 'SFYP',
      year: (defaultFYCvalue.value / 0.3).toFixed(0),
      halfyear: (defaultFYCvalue.value / 0.6).toFixed(0),
      quarter: (defaultFYCvalue.value / 1.2).toFixed(0),
      month: (defaultFYCvalue.value / 3.6).toFixed(0),
      week: (defaultFYCvalue.value / 14.4).toFixed(0),
      code: 'SFYP',
    },
    件均保费: {
      goalItem: '件均保费',
      year: defaultJJBFvalue.value,
      halfyear: defaultJJBFvalue.value,
      quarter: defaultJJBFvalue.value,
      month: defaultJJBFvalue.value,
      week: defaultJJBFvalue.value,
      code: '件均保费',
    },
    呈现促成: {
      goalItem: '呈现促成',
      year: (defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value).toFixed(0),
      halfyear: (defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value / 2).toFixed(0),
      quarter: (defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value / 4).toFixed(0),
      month: (defaultFYCvalue.value / 3.6 / defaultJJBFvalue.value).toFixed(0),
      week: (defaultFYCvalue.value / 14.4 / defaultJJBFvalue.value).toFixed(0),
      code: '呈现促成',
    },
    需求分析: {
      goalItem: '需求分析',
      year: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value) * 3).toFixed(0),
      halfyear: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value / 2) * 3).toFixed(0),
      quarter: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value / 4) * 3).toFixed(0),
      month: ((defaultFYCvalue.value / 3.6 / defaultJJBFvalue.value) * 3).toFixed(0),
      week: ((defaultFYCvalue.value / 14.4 / defaultJJBFvalue.value) * 3).toFixed(0),
      code: '需求分析',
    },
    接触面谈: {
      goalItem: '接触面谈',
      year: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value) * 5).toFixed(0),
      halfyear: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value / 2) * 5).toFixed(0),
      quarter: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value / 4) * 5).toFixed(0),
      month: ((defaultFYCvalue.value / 3.6 / defaultJJBFvalue.value) * 5).toFixed(0),
      week: ((defaultFYCvalue.value / 14.4 / defaultJJBFvalue.value) * 5).toFixed(0),
      code: '接触面谈',
    },
    电话邀约: {
      goalItem: '电话邀约',
      year: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value) * 7).toFixed(0),
      halfyear: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value / 2) * 7).toFixed(0),
      quarter: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value / 4) * 7).toFixed(0),
      month: ((defaultFYCvalue.value / 3.6 / defaultJJBFvalue.value) * 7).toFixed(0),
      week: ((defaultFYCvalue.value / 14.4 / defaultJJBFvalue.value) * 7).toFixed(0),
      code: '电话邀约',
    },
    客户获取: {
      goalItem: '客户获取',
      year: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value) * 10).toFixed(0),
      halfyear: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value / 2) * 10).toFixed(0),
      quarter: ((defaultFYCvalue.value / 0.3 / defaultJJBFvalue.value / 4) * 10).toFixed(0),
      month: ((defaultFYCvalue.value / 3.6 / defaultJJBFvalue.value) * 10).toFixed(0),
      week: ((defaultFYCvalue.value / 14.4 / defaultJJBFvalue.value) * 10).toFixed(0),
      code: '客户获取',
    },
  };
};

const onInput = (value: number, row: string, coloum: string) => {
  if (row === 'FYC' && coloum === 'year') {
    defaultFYCvalue.value = value;
    // 找出表中已经存在的目标项，然后将新的数据更新进去
    nameList.forEach((el, index) => {
      list[index] = ALL_TABLE_DATA()[el];
    });
  } else if (row === '件均保费') {
    defaultJJBFvalue.value = value;
    nameList.forEach((el, index) => {
      list[index] = ALL_TABLE_DATA()[el];
    });
  } else if (coloum === 'month') {
    const indexNum = nameList.indexOf(row);
    list[indexNum].month = value;
    list[indexNum].week = (value / 4).toFixed(0);
  } else if (coloum === 'year') {
    const indexNum = nameList.indexOf(row);
    list[indexNum].year = value;
    list[indexNum].halfyear = (value / 2).toFixed(0);
    list[indexNum].quarter = (value / 4).toFixed(0);
    list[indexNum].month = (value / 12).toFixed(0);
    list[indexNum].week = (value / 48).toFixed(0);
  } else if (coloum === 'halfyear') {
    const indexNum = nameList.indexOf(row);
    list[indexNum].halfyear = value;
    list[indexNum].quarter = (value / 2).toFixed(0);
    list[indexNum].month = (value / 6).toFixed(0);
    list[indexNum].week = (value / 24).toFixed(0);
  } else if (coloum === 'quarter') {
    const indexNum = nameList.indexOf(row);
    list[indexNum].quarter = value;
    list[indexNum].month = (value / 3).toFixed(0);
    list[indexNum].week = (value / 12).toFixed(0);
  } else if (coloum === 'week') {
    const indexNum = nameList.indexOf(row);
    list[indexNum].week = value;
  }
};

const unitFun = (name: string) => {
  if (['FYC', 'SFYP', '件均保费'].includes(name)) {
    return '元';
  }
  if (['呈现促成', '客户获取'].includes(name)) {
    return '个';
  }
  return '次';
};
</script>

<style lang="scss" scoped>
.page-setTarget {
  .head-div {
    width: 6px;
    height: 28px;
    background: $primary-color;
    border-radius: 4px;
    margin-right: 16px;
  }
  .top {
    padding: 0 30px;
  }
  .form-area {
    .form-item-out {
      .form-item-title {
        width: 100%;
        height: 80px;
        // background: linear-gradient(180deg, #fff7f8 0%, #ffffff 100%);
        padding-left: 52px;
        display: flex;
        align-items: center;
        font-size: $zaui-font-size-md2;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #4d4d4d;
        line-height: 42px;
        border-bottom: 1px solid #f4f5f7;
      }
      .form-item {
        display: flex;
        align-items: center;
        ::v-deep .van-cell {
          --van-field-input-text-color: #000000;
          --van-field-label-color: #343434;
          padding-right: 13px;
          padding-left: 52px;
          .van-field__label {
            font-size: $zaui-font-size-md2 !important;
          }
          .van-field__value {
            font-size: $zaui-font-size-card-title !important;
          }
        }
        ::after {
          display: none;
        }

        .unit {
          font-size: $zaui-font-size-md2;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #b8b8b8;
          line-height: 42px;
          margin-right: 30px;
          margin-bottom: 4px;
        }
      }
    }
  }
}
.setTarget-footer {
  position: sticky;
  bottom: 0;
  .btn-out {
    width: 100%;
    height: 150px;
    background: #ffffff;
    box-shadow: 0px -2px 10px 0px #f6f6f6;
    border-radius: 2px;
    padding: 30px;
  }
  .btn {
    width: 100%;
  }
}
</style>
