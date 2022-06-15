<template>
  <ZaPageWrap id="outer" main-class="page-visitors">
    <div class="visitor-page-top">
      <div class="top-item">
        <img :src="getIconUrl('visitor.bookImg')" alt="" class="top-img" />
        <div class="top-rigth">
          <div class="text">累计访问</div>
          <div class="number">{{ totalVisitor }}</div>
          <div class="today-add">
            <span>{{ `+${dailyAdd}` }}</span>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="top-item">
        <img :src="getIconUrl('visitor.peopleImg')" alt="" class="top-img" />
        <div class="top-rigth">
          <div class="text">超越了用户</div>
          <div class="number">{{ visitorPercent }}</div>
        </div>
      </div>
    </div>
    <van-pull-refresh v-show="visitorList.length !== 0 && !firstLoading" v-model="refreshing" @refresh="onRefresh">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <Item :visitor-list="visitorList" @onClick="handleClick" />
      </van-list>
    </van-pull-refresh>
    <ZaLoading v-if="firstLoading" :vertical="true" />
    <ZaEmpty
      v-show="visitorList.length === 0 && !firstLoading"
      empty-class="empty-area"
      title="暂无访客"
      desc="您还没有访客，先来分享一个获客素材吧~"
      :empty-img="getIconUrl('visitor.emptyImg')"
    >
      <template #emptyBtn>
        <van-button round type="primary" class="empty-btn" @click="handleGoHuoKe">获客素材</van-button>
      </template>
    </ZaEmpty>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { Toast } from 'vant/es';
import { getVisitorList, analysisVisitor } from '@/api/modules/visit';
import Item from './componnent/Item.vue';
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import ZaLoading from '@/components/ZaLoading/index.vue';
import { useThemesStore } from '@/store/themes';
import './index.scss';

const { getIconUrl } = useThemesStore();

const router = useRouter();

const firstLoading = ref(false);

const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const pageNum = ref(0);
const totalVisitor = ref(0);
const visitorPercent = ref('0%');
const dailyAdd = ref(0);

const visitorList: Array<any> = reactive([]);

// 上划加载
const onLoad = () => {
  if (refreshing.value) {
    visitorList.splice(0, visitorList.length);
    refreshing.value = false;
  }
  pageNum.value += 1;
  if (pageNum.value === 1) {
    firstLoading.value = true;
  }
  getVisitorList({
    pageNum: pageNum.value,
    pageSize: 5,
    queryBean: {},
  })
    .then((res) => {
      console.log(res.data.data, 'list');
      // 处理下后返返回的数据
      const newArr: Array<any> = [];
      res.data.data.list.forEach((item, index) => {
        let defIndex = -1;
        const isExists = newArr.some((newItem, newIndex) => {
          if (item.lastVisitContentDate === newItem.lastVisitContentDate) {
            defIndex = newIndex;
            return true;
          }
          return false;
        });
        if (!isExists) {
          newArr.push({
            lastVisitContentDate: item.lastVisitContentDate,
            list: [item],
          });
        } else {
          // if (newArr[index]?.list) {
          //   newArr[index].list.push(item);
          // } else {
          //   newArr[index].list = [item];
          // }
          newArr[defIndex].list.push(item);
        }
      });
      if (res.data.data.list.length === 0 || res.data.data.list === null) {
        finished.value = true;
      }
      if (res.data.data.pageNum === 1) {
        visitorList.push(...newArr);
      } else {
        newArr.forEach((e, i) => {
          if (newArr[i].lastVisitContentDate === visitorList[visitorList.length - 1].lastVisitContentDate) {
            visitorList[visitorList.length - 1].list = visitorList[visitorList.length - 1].list.concat(newArr[i].list);
          } else {
            visitorList.push(newArr[i]);
          }
        });
      }
      loading.value = false;
      if (res.data.data.list.length < 5 || res.data.data === null) {
        loading.value = false;
        finished.value = true;
      }
      firstLoading.value = false;
      console.log('visitorList===>>', visitorList);
    })
    .catch((e) => {
      console.log(e);
      Toast.fail('访客数据查询失败');
      loading.value = false;
      firstLoading.value = false;
      finished.value = true;
    });
};
// 下拉刷新
const onRefresh = () => {
  finished.value = false;
  loading.value = true;
  pageNum.value = 0;
  onLoad();
};

const handleClick = (item: any) => {
  console.log('fuzujian', item);
  if (item.relatedCustomerId) {
    console.log('我已经关联了');
    router.push({
      name: 'customerDetail',
      query: {
        agentCustomerId: item.relatedCustomerId,
        customerType: item.relatedCustomerType,
        // isVisit: 'Y',
      },
      hash: '#1',
    });
  } else {
    console.log('我没有关联了');
    router.push({
      path: '/visitorDetail',
      query: { shareId: item.shareId, tenantId: item.tenantId, visitId: item.id },
    });
  }
};
const handleGoHuoKe = () => {
  router.push('/article');
};
onMounted(() => {
  // 获取头部参数
  analysisVisitor({})
    .then((res) => {
      console.log(res.data.data, '分析访客');
      totalVisitor.value = res.data.data.totalVisitor || 0;
      visitorPercent.value = res.data.data.visitorPercent || '0%';
      dailyAdd.value = res.data.data.dailyVisitor || 0;
    })
    .catch((e) => {
      console.log(e);
      Toast.fail('分析访客数据查询失败');
    });
  visitorList.splice(0, visitorList.length);
  onRefresh();
});
</script>
