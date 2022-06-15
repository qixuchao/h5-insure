<template>
  <ZaPageWrap main-class="page-relatedCustomers">
    <div>
      <div class="list-head">
        <van-search
          v-model="searchValue"
          class="search-area"
          shape="round"
          placeholder="请输入姓名、手机号查询"
          :show-action="showCancel"
          @search="onSearch"
          @cancel="onCancel"
          @focus="onSearchFocus"
        />
      </div>
      <van-tabs v-model:active="active" class="visitor-tabs" @click-tab="onTabClcik">
        <van-tab title="准客户">
          <div>
            <div v-if="!firstLoading" class="list">
              <div class="total-people">{{ `共${count}人` }}</div>
              <van-index-bar>
                <div v-for="(value, key, index) in customerList" v-show="value.length" :key="`${value}-${index}`">
                  <van-index-anchor :index="key" class="index-bar-title" />
                  <van-cell
                    v-for="(smallItem, smallIndex) in value"
                    :key="`${smallItem}-${smallIndex}`"
                    class="cell-visit-customer"
                  >
                    <div class="cell-item">
                      <div class="cell-item-left">
                        <img
                          :src="
                            smallItem.gender === '男' ? getIconUrl('visitor.manImg') : getIconUrl('visitor.womenImg')
                          "
                          alt=""
                          class="sexImg"
                        />
                        <div class="left-text">
                          <div class="text-top">
                            <div class="name-div">{{ smallItem.customerName }}</div>
                            <div
                              v-show="smallItem.visitTag"
                              class="tag-out"
                              :style="`background:${colorFun(smallItem.visitTag, 'background')}`"
                            >
                              <div class="tag-text" :style="`color:${colorFun(smallItem.visitTag, 'text')}`">
                                {{ smallItem.visitTag }}
                              </div>
                            </div>
                          </div>
                          <div v-show="smallItem.isRelative === 'Y'" class="text-bottom">
                            <div class="weixinImg-out">
                              <img :src="getIconUrl('visitor.weixinImg')" alt="" class="weixinImg" />
                            </div>
                            <div class="weixin-text">微信用户</div>
                          </div>
                        </div>
                      </div>
                      <div class="cell-item-right" @click="handleChang(smallItem)">
                        <img
                          :src="
                            smallItem.isRelative === 'Y'
                              ? getIconUrl('visitor.changeImg')
                              : getIconUrl('visitor.connectImg')
                          "
                          alt=""
                        />
                        {{ smallItem.isRelative === 'Y' ? '变更' : '关联' }}
                      </div>
                    </div>
                  </van-cell>
                </div>
              </van-index-bar>
              <ZaEmpty
                v-show="count === 0"
                class="relatedCustomers-empty"
                title="暂无准客户"
                :empyt-img="getIconUrl('customer.empty2')"
              />
            </div>
            <ZaLoading v-if="firstLoading" :vertical="true" />
          </div>
        </van-tab>
        <van-tab title="承保客户"
          ><div>
            <div v-if="!firstLoading" class="list">
              <div class="total-people">{{ `共${CBcount}人` }}</div>
              <van-index-bar>
                <div v-for="(value, key, index) in CBcustomerList" v-show="value.length" :key="`${value}-${index}`">
                  <van-index-anchor :index="key" class="index-bar-title" />
                  <van-cell
                    v-for="(smallItem, smallIndex) in value"
                    :key="`${smallItem}-${smallIndex}`"
                    class="cell-visit-customer"
                  >
                    <div class="cell-item">
                      <div class="cell-item-left">
                        <img
                          :src="
                            smallItem.gender === '男' ? getIconUrl('visitor.manImg') : getIconUrl('visitor.womenImg')
                          "
                          alt=""
                          class="sexImg"
                        />
                        <div class="left-text">
                          <div class="text-top">
                            <div class="name-div">{{ smallItem.customerName }}</div>
                            <div
                              v-show="smallItem.visitTag"
                              class="tag-out"
                              :style="`background:${colorFun(smallItem.visitTag, 'background')}`"
                            >
                              <div class="tag-text" :style="`color:${colorFun(smallItem.visitTag, 'text')}`">
                                {{ smallItem.visitTag }}
                              </div>
                            </div>
                          </div>
                          <div v-show="smallItem.isRelative === 'Y'" class="text-bottom">
                            <div class="weixinImg-out">
                              <img :src="getIconUrl('visitor.weixinImg')" alt="" class="weixinImg" />
                            </div>
                            <div class="weixin-text">微信用户</div>
                          </div>
                        </div>
                      </div>
                      <div class="cell-item-right" @click="handleChang(smallItem)">
                        <img
                          :src="
                            smallItem.isRelative === 'Y'
                              ? getIconUrl('visitor.changeImg')
                              : getIconUrl('visitor.connectImg')
                          "
                          alt=""
                        />
                        {{ smallItem.isRelative === 'Y' ? '变更' : '关联' }}
                      </div>
                    </div>
                  </van-cell>
                </div>
              </van-index-bar>
              <ZaEmpty
                v-show="CBcount === 0"
                class="relatedCustomers-empty"
                title="暂无承保客户"
                :empyt-img="getIconUrl('customer.empty2')"
              />
            </div>
            <ZaLoading v-if="firstLoading" :vertical="true" /></div
        ></van-tab>
      </van-tabs>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import { queryCustomerList, updateRelatedCustomer, addRelatedCustomer } from '@/api/modules/visit';

import ZaLoading from '@/components/ZaLoading/index.vue';
import ZaEmpty from '@/components/ZaEmpty/index.vue';

import { useThemesStore } from '@/store/themes';
import './index.scss';

const { getIconUrl } = useThemesStore();
const route = useRoute();
const router = useRouter();

const firstLoading = ref(false);

const active = ref(0);
const isman = ref(true);
const showCancel = ref(false);
const searchValue = ref('');
const isSearching = ref(false);

const count = ref(0); // 准客户人员总数
const customerList = ref({}); // 准客户列表

const CBcount = ref(0); // 承保客户人员总数
const CBcustomerList = ref({}); // 承保客户列表

const currentTabCode = ref('02'); // 当前tab页 02准客户 03 承保

// 标签颜色
const colorFun = (name: string, type: string) => {
  if (name === '接触面谈') {
    return type === 'background' ? '#FFEEE7' : '#FF6600';
  }
  if (name === '需求分析') {
    return type === 'background' ? 'rgba(0, 175, 255, 0.08)' : '#00AFFF';
  }
  if (name === '呈现促成') {
    return type === 'background' ? 'rgba(0, 175, 255, 0.08)' : '#00AFFF';
  }
  if (name === '客户获取') {
    return type === 'background' ? 'rgba(115, 76, 255, 0.1)' : '#947FE1';
  }
  if (name === '电话邀约') {
    return type === 'background' ? 'rgba(255, 141, 30, 0.1)' : '#FF8D1E';
  }
  if (name === '保单服务') {
    return type === 'background' ? 'rgba(27, 205, 145, 0.1)' : '#1BCD91';
  }
  if (name === '转介绍') {
    return type === 'background' ? 'rgba(255, 43, 31, 0.06)' : '$primary-color';
  }
  return null;
};

// 请求列表
const getAllList = () => {
  firstLoading.value = true;
  queryCustomerList({
    pageNum: '1',
    pageSize: '999',
    queryBean: {
      orderBy: 'firstLetter', // firstCode 按拼音字母排列  creatTime 返回list数组，按时间排列
      customerListType: currentTabCode.value, // 02准客户 03 承保
      // keyword:""//搜索关键词
    },
  })
    .then((res) => {
      firstLoading.value = false;
      console.log(res.data.data, 'lissssssss');
      if (currentTabCode.value === '02') {
        count.value = res.data.data.count || 0;
        customerList.value = res.data.data.customerMaps || {};
      }
      if (currentTabCode.value === '03') {
        CBcount.value = res.data.data.count || 0;
        CBcustomerList.value = res.data.data.customerMaps || {};
      }
    })
    .catch((e) => {
      firstLoading.value = false;
      console.log(e);
    });
};

// 列表按钮
const handleChang = (item: any) => {
  // 已经关联
  if (item.isRelative === 'Y') {
    Dialog.confirm({
      message: '该客户已关联过其他微信客户，变更关联后原微信访客关联关系将被解除，您确认要变更关联信息吗？',
      confirmButtonText: '变更',
      theme: 'round-button',
    })
      .then(() => {
        // on confirm
        updateRelatedCustomer({
          agentCustomerId: item.agentCustomerId,
          relId: item.id,
          tenantId: item.tenantId,
          userId: item.userId,
          visitorId: route.query.visitId,
          customerId: item.customerId,
          customerType: currentTabCode.value,
        }).then((res) => {
          if (res.data.data === '关联成功') {
            Toast.success('变更成功');
            router.go(-1);
          }
        });
      })
      .catch(() => {
        // on cancel
      });
  } else {
    Dialog.confirm({
      theme: 'round-button',
      message: `确定要关联客户“${item.customerName}”吗？`,
      confirmButtonText: '关联',
    })
      .then(() => {
        // on confirm
        addRelatedCustomer({
          visitorId: route.query.visitId,
          agentCustomerId: item.agentCustomerId,
          customerType: currentTabCode.value,
        })
          .then((res) => {
            console.log(res.data.data, '新增访客接口');
            if (res.data.data === '关联成功') {
              Toast.success('关联成功');
              router.go(-1);
            }
          })
          .catch((e) => {
            console.log(e);
            Toast.fail('关联失败');
          });
      })
      .catch(() => {
        // on cancel
      });
  }
};
const onTabClcik = (props: any) => {
  if (props.title === '准客户') {
    currentTabCode.value = '02';
  } else if (props.title === '承保客户') {
    currentTabCode.value = '03';
  }
  getAllList();
};
const onSearchFocus = () => {
  showCancel.value = true;
};
// 搜索获取数据
const getData = (params: any) => {
  queryCustomerList(params)
    .then((res) => {
      if (currentTabCode.value === '02') {
        count.value = res.data.data.count || 0;
        customerList.value = res.data.data.customerMaps || {};
      }
      if (currentTabCode.value === '03') {
        CBcount.value = res.data.data.count || 0;
        CBcustomerList.value = res.data.data.customerMaps || {};
      }
    })
    .catch((E) => {
      console.log(E);
      Toast.fail('查询列表失败');
    });
};

const onSearch = (v: string) => {
  isSearching.value = true;
  const params = {
    pageNum: '1',
    pageSize: '999',
    queryBean: {
      orderBy: 'firstLetter', // firstCode 按拼音字母排列  creatTime 返回list数组，按时间排列
      customerListType: currentTabCode.value, // 02准客户 03 承保
      keyword: v, // 搜索关键词
    },
  };
  getData(params);
};
const onCancel = () => {
  showCancel.value = false;
  isSearching.value = false;
  getData({
    pageNum: '1',
    pageSize: '999',
    queryBean: {
      orderBy: 'firstLetter', // firstCode 按拼音字母排列  creatTime 返回list数组，按时间排列
      customerListType: currentTabCode.value, // 02准客户 03 承保
    },
  });
};

// onActivated(() => {
//   queryCustomerList({
//     pageNum: '1',
//     pageSize: '999',
//     queryBean: {
//       userId: 'userid02071600',
//       tenantId: '0',
//       orderBy: 'firstCode', // firstCode 按拼音字母排列  creatTime 返回list数组，按时间排列
//       customerListType: currentTabCode.value, // 02准客户 03 承保
//       // keyword:""//搜索关键词
//     },
//   }).then((res) => {
//     console.log(res.data.data, 'lissssssss');
//     count.value = res.data.data.count || 0;
//     customerList.value = res.data.data.customers || {};
//   });
// });
onMounted(() => {
  getAllList();
});
</script>
