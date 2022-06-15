<template>
  <ZaPageWrap id="outer" main-class="page-businessOpportunity">
    <div class="top">
      <div class="top-left" @click="onChooseDateClick">
        <div class="text">{{ dropdownValue === 0 ? '今天' : '近7天' }}</div>
        <img :src="getIconUrl('businessOpportunity.chooseImg')" alt="" :class="{ active: isShowDate }" />
      </div>
      <div class="top-right">
        <van-search
          v-model="searchValue"
          placeholder="请输入姓名、手机号查询"
          shape="round"
          :left-icon="getIconUrl('target.searchImg')"
          @search="onSearch"
          @clear="clear"
        />
      </div>
    </div>
    <div v-show="isShowDate" class="choose-date">
      <div
        v-for="(dateItem, dateIndex) in dropdownOption"
        :key="dateIndex"
        class="date-item"
        :class="{ activited: dropdownValue === dateIndex }"
        @click="onDateItemClick(dateItem)"
      >
        {{ dateItem.text }}
        <img v-show="dropdownValue === dateIndex" :src="getIconUrl('businessOpportunity.chosedImg')" alt="" />
      </div>
    </div>
    <div class="mid">
      <van-tabs v-model:active="activeValue" @click-tab="onTabClick">
        <van-tab title="未使用">
          <div v-show="list.length !== 0 && !firstLoading" class="card-list">
            <van-pull-refresh v-model="refreshingNouse" @refresh="onRefresh('nouse')">
              <van-list
                v-model:loading="loadingNouse"
                :finished="finishedNouse"
                finished-text="- 已经到底了哦 -"
                @load="onLoad('nouse')"
              >
                <div
                  v-for="(listItem, listIndex) in list"
                  :key="listIndex"
                  class="list-item"
                  :style="{ backgroundImage: `url(${getIconUrl('businessOpportunity.itembj')})` }"
                >
                  <div class="item-top">
                    <div id="textTitle" class="text" :class="{ active: !checkList.includes(listIndex) }">
                      {{ listItem.message }}
                    </div>
                    <div v-show="listItem.message?.length > 40" class="show-more-out" @click="onOpneClick(listIndex)">
                      <div class="show-more">
                        {{ !checkList.includes(listIndex) ? '展开' : '收起'
                        }}<img
                          :src="getIconUrl('businessOpportunity.showImg')"
                          alt=""
                          :class="{ active: checkList.includes(listIndex) }"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="item-bottom">
                    <div class="bottom-left">
                      <div class="userful-area" @click="onUseFulClick(listItem, listIndex)">
                        <img
                          :src="
                            listItem.useFlag === 'Y'
                              ? getIconUrl('businessOpportunity.usefulImg')
                              : getIconUrl('businessOpportunity.usefuldarkImg')
                          "
                          alt=""
                        />
                        有用
                      </div>
                      <div class="userful-area" @click="onUseLessClick(listItem)">
                        <img :src="getIconUrl('businessOpportunity.uselessImg')" alt="" />
                        无用
                      </div>
                    </div>
                    <div class="bottom-right">
                      <div class="call" @click="onPhoneClick(listItem)">
                        电话<img :src="getIconUrl('businessOpportunity.callImg')" alt="" />
                      </div>
                      <div class="visit" @click="onVisitClick(listItem)">拜访</div>
                      <div class="customerInfo" @click="onCoutomerInfoClick(listItem)">客户信息</div>
                    </div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
          <ZaLoading v-show="firstLoading" :vertical="true" />
          <ZaEmpty v-show="list.length === 0 && !firstLoading" title="暂无商机" class="empty-class" />
        </van-tab>
        <van-tab title="已使用">
          <div v-show="list2.length !== 0 && !firstLoading" class="card-list">
            <van-pull-refresh v-model="refreshingUsed" @refresh="onRefresh('used')">
              <van-list
                v-model:loading="loadingUsed"
                :finished="finishedUsed"
                finished-text="- 已经到底了哦 -"
                @load="onLoad('used')"
              >
                <div
                  v-for="(listItem, listIndex) in list2"
                  :key="listIndex"
                  class="list-item"
                  :style="{ backgroundImage: `url(${getIconUrl('businessOpportunity.itembj')})` }"
                >
                  <div class="item-top">
                    <div id="textTitle" class="text" :class="{ active: !checkList.includes(listIndex) }">
                      {{ listItem.message }}
                    </div>
                    <div v-show="listItem.message?.length > 40" class="show-more-out" @click="onOpneClick(listIndex)">
                      <div class="show-more">
                        {{ !checkList.includes(listIndex) ? '展开' : '收起'
                        }}<img
                          :src="getIconUrl('businessOpportunity.showImg')"
                          alt=""
                          :class="{ active: checkList.includes(listIndex) }"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="item-bottom">
                    <div class="bottom-left">
                      <div class="userful-area" @click="onUseFulClick(listItem, listIndex)">
                        <img
                          :src="
                            listItem.useFlag === 'Y'
                              ? getIconUrl('businessOpportunity.usefulImg')
                              : getIconUrl('businessOpportunity.usefuldarkImg')
                          "
                          alt=""
                        />
                        有用
                      </div>
                      <div class="userful-area" @click="onUseLessClick(listItem)">
                        <img :src="getIconUrl('businessOpportunity.uselessImg')" alt="" />
                        无用
                      </div>
                    </div>
                    <div class="bottom-right">
                      <div class="call" @click="onPhoneClick(listItem)">
                        电话<img :src="getIconUrl('businessOpportunity.callImg')" alt="" />
                      </div>
                      <div class="visit" @click="onVisitClick(listItem)">拜访</div>
                      <div class="customerInfo" @click="onCoutomerInfoClick(listItem)">客户信息</div>
                    </div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
          <ZaLoading v-show="firstLoading" :vertical="true" />
          <ZaEmpty v-show="list2.length === 0 && !firstLoading" title="暂无商机" class="empty-class" />
        </van-tab>
      </van-tabs>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import dayjs from 'dayjs';
import { getBussinessList, updateFeedback, updateUseType, queryCustomerPhone } from '@/api/modules/businessOpportunity';

import ZaEmpty from '@/components/ZaEmpty/index.vue';
import ZaLoading from '@/components/ZaLoading/index.vue';

import { useThemesStore } from '@/store/themes';
import './index.scss';

const { getIconUrl } = useThemesStore();

const router = useRouter();

const firstLoading = ref(false);
const searchValue = ref('');

const dropdownValue = ref(0);
const isShowDate = ref(false);
const dropdownOption = [
  { text: '今天', value: 0 },
  { text: '近一周', value: 1 },
];

const activeValue = ref(0);

const list = reactive([]);
const list2 = reactive([]);

const checkList = reactive([]);
// 选择日期
const onChooseDateClick = () => {
  isShowDate.value = !isShowDate.value;
};

const onOpneClick = (code: number) => {
  if (!checkList.includes(code)) {
    checkList.push(code);
  } else {
    checkList.splice(checkList.indexOf(code), 1);
  }
};

// 电话点击
const onPhoneClick = (item: any) => {
  queryCustomerPhone({
    agentCustomerId: item.agentCustomerId,
    customerType: item.customerType,
    businessType: '22',
    nicheIds: item.nicheIds,
    useType: 'TEL', // TEL:电话；SMS:短信
    startDate:
      dropdownValue.value === 0 ? dayjs().format('YYYY-MM-DD') : dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
    endDate: dayjs().format('YYYY-MM-DD'),
  })
    .then((res) => {
      window.location.href = `tel:${res.data.data}`;
    })
    .catch((phoneE) => {
      console.log(phoneE);
      Toast('获取电话失败');
    });
};
// 拜访点击
const onVisitClick = (item: any) => {
  updateUseType({
    nicheIds: item.nicheIds,
    nicheUseType: 'VST', // （电话-TEL，短信-SMS，拜访-VST，客户信息-CLI）
    startDate:
      dropdownValue.value === 0 ? dayjs().format('YYYY-MM-DD') : dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
    endDate: dayjs().format('YYYY-MM-DD'),
  }).then((res) => {
    router.push({
      name: 'customerDetail',
      query: {
        agentCustomerId: item.agentCustomerId, // 暂时用clntnum 实际需要preId
        customerType: item.customerType,
        // userId: item.agtnum,
        // isVisit: 'Y',
      },
      hash: '#2',
    });
  });
};
// 客户信息点击
const onCoutomerInfoClick = (item: any) => {
  updateUseType({
    nicheIds: item.nicheIds,
    nicheUseType: 'CLI', // （电话-TEL，短信-SMS，拜访-VST，客户信息-CLI）
    startDate:
      dropdownValue.value === 0 ? dayjs().format('YYYY-MM-DD') : dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
    endDate: dayjs().format('YYYY-MM-DD'),
  }).then((res) => {
    router.push({
      name: 'customerDetail',
      query: {
        agentCustomerId: item.agentCustomerId, // 暂时用clntnum 实际需要preId
        customerType: item.customerType,
        // userId: item.agtnum,
      },
    });
  });
};

const loadingNouse = ref(false);
const finishedNouse = ref(false);
const refreshingNouse = ref(false);
const pageNumNouse = ref(0);

const loadingUsed = ref(false);
const finishedUsed = ref(false);
const refreshingUsed = ref(false);
const pageNumUsed = ref(0);

const onLoad = (type: string) => {
  if (type === 'nouse') {
    if (refreshingNouse.value) {
      list.splice(0, list.length);
      refreshingNouse.value = false;
    }
    pageNumNouse.value += 1;
    if (pageNumNouse.value === 1) {
      firstLoading.value = true;
    }
    getBussinessList({
      pageNum: pageNumNouse.value,
      pageSize: 10,
      queryBean: {
        endDate: dayjs().format('YYYY-MM-DD'),
        startDate:
          dropdownValue.value === 0 ? dayjs().format('YYYY-MM-DD') : dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
        usageStatus: 'N',
        keyWords: searchValue.value || '',
      },
    })
      .then((res: any) => {
        if (res.data.data === null || res.data.data.length === 0) {
          loadingNouse.value = false;
          finishedNouse.value = true;
        }
        if (res.data.data !== null) {
          list.push(...res.data.data);
        }
        loadingNouse.value = false;
        firstLoading.value = false;
      })
      .catch((e) => {
        console.log(e);
        firstLoading.value = false;
      });
  }
  if (type === 'used') {
    if (refreshingUsed.value) {
      list2.splice(0, list2.length);
      refreshingUsed.value = false;
    }
    pageNumUsed.value += 1;
    if (pageNumUsed.value === 1) {
      firstLoading.value = true;
    }
    getBussinessList({
      pageNum: pageNumUsed.value,
      pageSize: 10,
      queryBean: {
        endDate: dayjs().format('YYYY-MM-DD'),
        startDate:
          dropdownValue.value === 0 ? dayjs().format('YYYY-MM-DD') : dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
        usageStatus: 'Y',
        keyWords: searchValue.value || '',
      },
    })
      .then((res) => {
        console.log(res.data, '!!!!!!!!!!!!!!!!');
        if (res.data.data === null || res.data.data.length === 0) {
          loadingUsed.value = false;
          finishedUsed.value = true;
        }
        if (res.data.data !== null) {
          list2.push(...res.data.data);
        }
        loadingUsed.value = false;
        firstLoading.value = false;
      })
      .catch((e) => {
        console.log(e);
        firstLoading.value = false;
      });
  }
};

const onRefresh = (type: string) => {
  if (type === 'nouse') {
    finishedNouse.value = false;
    loadingNouse.value = true;
    pageNumNouse.value = 0;
    onLoad('nouse');
  }
  if (type === 'used') {
    finishedUsed.value = false;
    loadingUsed.value = true;
    pageNumUsed.value = 0;
    onLoad('used');
  }
};
// 无用点击
const onUseLessClick = (item: any) => {
  Dialog.confirm({
    message: '确认删除此条商机吗？',
    theme: 'round-button',
  })
    .then(() => {
      // on confirm
      updateFeedback({
        nicheIds: item.nicheIds,
        feedBack: 'N', // （有用-Y/无用-N）
        startDate:
          dropdownValue.value === 0 ? dayjs().format('YYYY-MM-DD') : dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
        endDate: dayjs().format('YYYY-MM-DD'),
      }).then((res) => {
        if (activeValue.value === 0) {
          list.splice(0);
          onRefresh('nouse');
        } else {
          list2.splice(0);
          onRefresh('used');
        }
      });
    })
    .catch(() => {
      // on cancel
    });
};

// 有用点击
const onUseFulClick = (item: any, index: number) => {
  if (item.useFlag === 'Y') {
    return;
  }
  updateFeedback({
    nicheIds: item.nicheIds,
    feedBack: 'Y', // （有用-Y/无用-N）
    startDate:
      dropdownValue.value === 0 ? dayjs().format('YYYY-MM-DD') : dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
    endDate: dayjs().format('YYYY-MM-DD'),
  }).then((res) => {
    if (activeValue.value === 0) {
      list.forEach((e, i) => {
        if (i === index) {
          e.useFlag = 'Y';
        }
      });
    } else {
      list2.forEach((e, i) => {
        if (i === index) {
          e.useFlag = 'Y';
        }
      });
    }
  });
};

// 点击tab
const onTabClick = ({ name }) => {
  console.log(name);
  // 清楚已经展开的card数据
  checkList.splice(0);
  // 请求列表....
  if (name === 0) {
    list.splice(0);
    onRefresh('nouse');
  } else {
    list2.splice(0);
    onRefresh('used');
  }
};

const onDateItemClick = (item: any) => {
  dropdownValue.value = item.value;
  isShowDate.value = !isShowDate.value;
  if (activeValue.value === 0) {
    list.splice(0);
    onRefresh('nouse');
  } else {
    list2.splice(0);
    onRefresh('used');
  }
};
const onSearch = () => {
  if (activeValue.value === 0) {
    list.splice(0);
    onRefresh('nouse');
  } else {
    list2.splice(0);
    onRefresh('used');
  }
};
const clear = () => {
  if (activeValue.value === 0) {
    list.splice(0);
    onRefresh('nouse');
  } else {
    list2.splice(0);
    onRefresh('used');
  }
};

onMounted(() => {
  onRefresh('nouse');
  console.log(dayjs().subtract(1, 'day').format('YYYY-MM-DD'));
});
</script>
