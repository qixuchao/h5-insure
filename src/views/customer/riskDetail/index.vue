<template>
  <div class="risk-detail">
    <div class="header">
      <img :src="getIconUrl('customer.QA')" alt="" />
      <div class="right">
        客户风险累积（值仅限参考，最终以实际承保为准）如客户已成年，请忽略UJUV，JUV“两项风险累积。
      </div>
    </div>

    <div>
      <van-cell-group>
        <van-cell
          v-for="(item, i) in list"
          :key="i"
          :title="item.riskTitle"
          :value="item.amount"
          title-class="label"
          value-class="value"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { searchCustomerDetail } from '@/api/modules/customer';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const info = reactive({
  list: [] as any,
});
const router = useRouter();
const route = useRoute();
const { list } = toRefs(info);
const getData = async () => {
  console.log('>route', route.query);
  const res = await searchCustomerDetail({
    ...route.query,
    // customerId: '1',
    // customerType: '准客户',
    // userId: 'userid02071600',
    // tenantId: '0',
  });
  const { data } = res.data;
  list.value = data.riskList;
};
onMounted(() => {
  getData();
});
</script>

<style lang="scss">
.risk-detail {
  background: #f6f6fa;
  font-size: $zaui-font-size-lg;
  .header {
    background-color: #fff;
    display: flex;
    padding: 20px 30px;
    margin-bottom: 20px;
    img {
      width: 38px;
      height: 36px;
      margin-right: 20px;
    }
    .right {
      flex: 1;
      width: 633px;
      // height: 92px;
      background: #faf6f0;
      border-radius: 6px 100px 100px 100px;
      font-size: $zaui-font-size-sm;
      color: #b38e57;
      padding: 16px 53px 16px 50px;
    }
  }

  .van-cell {
    font-size: $zaui-font-size-lg;
    padding: 29px 30px;
  }
  .label {
    color: #616161;
    flex: 2;
  }
  .value {
    color: #343434;
  }
}
</style>
