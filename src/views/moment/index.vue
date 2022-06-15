<template>
  <ZaPageWrap main-class="page-moment">
    <div class="top">
      <ZaFilterTab :tag-list="tagList" :filter="true" @current-index="onClickTag"> </ZaFilterTab>
    </div>
    <div v-if="dataList.length" className="moment-content">
      <van-list v-model:loading="loading" :finished="finished" finished-text="- 没有更多了 -" @load="onLoad">
        <div v-for="(item, index) in dataList" :key="index">
          <Item :item="item" />
        </div>
      </van-list>
    </div>
    <div v-else class="empty">
      <img src="@/assets/images/customer/empth.png" alt="" />
      <p>暂时没有朋友圈内容哦～</p>
    </div>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { getRoleList, getWechatMomentsList, querySingleList } from '../../api/modules/moment';
import ZaFilterTab from '../../components/ZaFilterTab/index.vue';
import Item from './components/Item/index.vue';

const loading = ref(false);
const finished = ref(false);
const indexCheck = ref('0');
const pageN = ref(1);
const info = reactive({
  dataList: [] as any,
  tagList: [
    {
      labelCategoryName: '全部',
      id: '0',
    },
  ],
});
const { dataList, tagList } = toRefs(info);

const getData = async (params?: any, pageNum = 1, pageSize = 10) => {
  const { data } = await getWechatMomentsList({
    pageNum,
    pageSize,
    queryBean: {
      ...params,
    },
  });
  pageN.value = pageNum;
  const { total } = data.data;
  loading.value = false;
  sessionStorage.setItem('m_list', JSON.stringify(data.data.list));
  dataList.value = [...dataList.value, ...data.data.list];
  if (total <= dataList.value.length) {
    finished.value = true;
  } else {
    finished.value = false;
  }
  console.log('>>>>>>>', data.data.list);
};
const getTag = async () => {
  const { data } = await getRoleList({ pageNum: 1, pageSize: 999, queryBean: {} });
  let arr = [];
  arr = data.data.list.map((item: { name: any; id: any }) => {
    return { labelCategoryName: item.name, id: item.id };
  });
  tagList.value = tagList.value.concat(arr);
};
onMounted(async () => {
  getData({});
  getTag();
});

const onLoad = () => {
  getData({ roleId: indexCheck.value === '0' ? undefined : indexCheck.value }, pageN.value + 1);
};

const onClickTag = (code: string, index: number) => {
  indexCheck.value = code;
  dataList.value = [];
  pageN.value = 1;
  getData({ roleId: code === '0' ? undefined : code });
};
const currentIndex = (index: number) => {
  console.log('index:::::::', index);
};
</script>
<style lang="scss" scoped>
.page-moment {
  .top {
    position: sticky;
    top: 0;
    background: #ffffff;
    z-index: 999;
  }
  .moment-content {
    margin: 14px 0 91px 0;
  }
  .empty {
    font-size: 30px;
    margin-top: 240px;
    color: #616161;
    text-align: center;
    img {
      width: 200px;
      margin-bottom: 40px;
    }
  }
}
</style>
