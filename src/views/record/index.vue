<template>
  <div class="page page-visit-record">
    <div class="visit-record-container">
      <template v-for="(item, index) in visitList" :key="index">
        <VisitItem :info="userInfo" :visit-data="item" @on-delete-success="getData" />
      </template>
      <ZaEmpty v-if="visitList.length === 0 && !loading" empty-class="empty" />
    </div>
    <div class="visit-record-bottom">
      <van-button class="btn-sub" type="primary" @click="handleSubmit">录入活动记录</van-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VisitItem from './components/VisitItem/index.vue';
import { searchVisitWithPage } from '@/api/modules/record';
import ZaEmpty from '@/components/ZaEmpty/index.vue';

interface UserType {
  agentCustomerId: string;
  customerType: string;
  customerName: string;
}
const props = defineProps({
  userInfo: {
    type: Object as () => UserType,
    default: () => ({
      agentCustomerId: '',
      customerType: '',
      customerName: '',
    }),
  },
});
const visitList = ref([]);
const history = useRouter();
const route = useRoute();
const loading = ref<boolean>(false);
const { agentCustomerId, customerType, customerName } = route.query;
const handleSubmit = () => {
  history.push(
    `/record/add?agentCustomerId=${agentCustomerId}&customerType=${customerType}&customerName=${customerName}`,
  );
};

const getData = async () => {
  loading.value = true;
  const data = await searchVisitWithPage({
    pageNum: 1,
    pageSize: 9999,
    queryBean: {
      agentCustomerId,
    },
  });
  loading.value = false;
  visitList.value = data?.data?.data?.list || [];
};

// 对外暴露
defineExpose({
  getData,
});

onMounted(() => {
  getData();
});
</script>
<style lang="scss">
.page-visit-record {
  .visit-record-container {
    padding: 30px;
    margin-bottom: 150px;
    .empty {
      margin-top: 200px;
      .empty-img {
        margin-bottom: 38px;
      }
    }
  }
  .visit-record-bottom {
    height: 150px;
    background: #ffffff;
    box-shadow: 0px -2px 10px 0px #f6f6f6;
    position: fixed;
    bottom: 0px;
    z-index: 99;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    .btn-sub {
      background: $btn-background;
      border-radius: 45px;
      font-size: 32px;
      font-weight: bold;
      width: 100%;
      color: #ffffff;
      border: 0px;
    }
  }
}
</style>
