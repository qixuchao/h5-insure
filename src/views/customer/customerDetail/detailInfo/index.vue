<template>
  <div class="detail-info">
    <van-cell title="出生日期">
      <template #value>
        <span v-if="data.age" class="cell-des">
          {{ data.birthday }} <span>{{ data.age }} 岁</span>
        </span>
      </template>
    </van-cell>
    <van-cell title="联系电话">
      <template #value>
        <span class="cell-des"
          >{{
            data.phone ? `${data.phone.substring(0, 3)} ${data.phone.substring(3, 7)} ${data.phone.substring(7)}` : ''
          }}
        </span>
      </template>
    </van-cell>
    <van-cell title="电子邮箱">
      <template #value>
        <span class="cell-des">{{ data.email }}</span>
      </template>
    </van-cell>
    <van-cell title="通讯地址">
      <template #value>
        <span class="cell-des">{{ `${(data.address || '').replace('/', '')}` }}</span>
      </template>
    </van-cell>

    <van-cell class="title">
      <template #title>
        <img :src="getIconUrl('customer.info')" alt="" class="line" />
        <span class="custom-title">客户标签</span>
      </template>
      <template #value>
        <span class="select" @click="handleTag(true)"
          >{{ data.customerTags?.length > 0 ? '编辑' : '选择' }} <img :src="getIconUrl('customer.arrowRed')" alt="" />
        </span>
      </template>
    </van-cell>
    <div v-if="data.customerTags?.length > 0" class="com-tag">
      <span v-for="el in data.customerTags" :key="el" class="item">{{ el }}</span>
    </div>

    <van-cell class="title">
      <template #title>
        <img :src="getIconUrl('customer.moreInfo')" alt="" class="line" />
        <span class="custom-title">更多信息</span>
      </template>
    </van-cell>

    <van-cell title="证件信息" is-link @click="handleJump('docList')">
      <template #value>
        <span v-if="data?.certificateList?.length > 0" class="cell-val">{{ data?.certificateList?.length }}张</span>
        <span v-else class="van-cell__value">去添加</span>
      </template>
    </van-cell>
    <van-cell title="家庭信息" is-link @click="handleJump('familyList')">
      <template #value>
        <span v-if="data?.memberList?.length > 0" class="cell-val">{{ data?.memberList?.length }}人</span>
        <span v-else class="van-cell__value">去添加</span>
      </template>
    </van-cell>
    <van-cell title="补充信息" center is-link value="详情" @click="handleJump('editSuppleInfo')" />
    <van-cell title="保单信息" center is-link value="详情" @click="handleJump('policyList')" />
    <van-cell title="客户风险累计" is-link value="详情" @click="handleJump('riskDetail')" />

    <van-popup :show="filer" position="right" @click-overlay="handleTag(false)">
      <Tag v-if="filer" :list="tag" :data="checkTags" @on-submit="handleSubmit" />
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable consistent-return */
import { useRoute } from 'vue-router';
import { Toast } from 'vant';
import Tag from '../../components/searchFiler/index.vue';
import { tag } from '../../components/constant';
import { saveCustomerTag } from '@/api/modules/customer';
import { useThemesStore } from '@/store/themes';

const emit = defineEmits(['on-success', 'on-open']);
const { getIconUrl } = useThemesStore();
const route = useRoute();
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => {},
  },
});
const { data } = toRefs(props);

const router = useRouter();
const filer = ref(false);
// const checkTags = ref({});
const handleJump = (val: string) => {
  const { agentCustomerId, customerType } = data.value;
  router.push({
    name: val,
    query: {
      agentCustomerId,
      customerType,
      // userId,
      // tenantId,
    },
  });
};

const checkTags = computed(() => {
  const obj: any = {};
  if (data.value.customerTags?.length > 0) {
    data.value.customerTags.forEach((t: string) => {
      const index = tag.findIndex((item: any) => {
        if (item.list?.findIndex((l: any) => l.title === t) > -1) {
          if (item.type === 'single') {
            obj[item.value] = t;
          } else {
            obj[item.value] = [...(obj[item.value] || []), t];
          }
          return true;
        }
        return false;
      });
      if (index === -1) {
        obj.customizeTag = [...(obj.customizeTag || []), t];
      }
    });
  }
  return obj;
});
const handleTag = (flag: boolean) => {
  filer.value = flag;
  emit('on-open', filer.value);
};
// eslint-disable-next-line consistent-return
const handleSubmit = async (val: any) => {
  const { agentCustomerId, customerType } = data.value;

  // console.log({ ...toRaw(val) });
  // let temp: any[] = [];
  // Object.keys(val).forEach((el) => {
  //   const tp = toRaw(val[el]);
  //   console.log('>>>tp', tp);

  //   if (Array.isArray(tp)) {
  //     temp = [...temp, ...tp];
  //   } else {
  //     temp.push(tp);
  //   }
  // });

  // if (temp.length > 9) {
  //   return Toast('最多可保存9个标签');
  // }
  filer.value = false;
  const params: any = {};
  Object.keys(val).forEach((key) => {
    if (Array.isArray(val[key])) {
      params[key] = val[key].map((item: string) => ({
        tagName: item,
        tagCode: item,
      }));
    } else {
      params[key] = {
        tagName: val[key],
        tagCode: val[key],
      };
    }
  });
  const res = await saveCustomerTag({
    agentCustomerId,
    customerType,
    ...params,
  });

  if (res.data.status === 200) {
    Toast('保存成功');
    emit('on-success');
  }

  // history.go(0);
};
</script>

<style lang="scss" scoped>
::v-deep {
  .van-cell {
    font-size: $zaui-font-size-lg;
    display: flex;
    align-items: center;
    .van-cell__title {
      color: #616161;
      img {
        margin-top: -4px;
      }
    }
    .van-cell__value {
      color: #343434;
    }
  }
  .van-cell:after {
    right: 0px;
  }
  .van-cell__right-icon {
    line-height: 50px;
    height: 50px;
    color: #dddddd;
  }

  .van-popup--right {
    display: flex;
    flex-direction: column;
  }
}
.detail-info {
  background-color: #f5f5f5;
  position: absolute;
  right: 0;
  width: 100%;
  padding-bottom: 150px;
  .cell-des {
    color: #343434;
  }

  .custom-title {
    font-weight: 600;
    color: #343434;
  }
  .select {
    font-size: $zaui-font-size-md2;
    color: $primary-color;
    img {
      width: 22px;
      height: 24px;
    }
  }
  .com-tag {
    background-color: #fff;
    padding: 22px 30px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    .item {
      width: calc((100% - 40px) / 3);
      height: 60px;
      background: linear-gradient(360deg, #ffe9e7 0%, #ffffff 100%);
      border: 1px solid;
      clip-path: inset(0 round 8px);
      border-image: linear-gradient(180deg, rgba(255, 246, 245, 1), rgba(255, 206, 204, 1)) 1 1;
      font-size: $zaui-font-size-md;
      color: $primary-color;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      margin-bottom: 20px;
    }
    .item:nth-child(3n + 3) {
      margin-right: 0px;
    }
  }

  .cell-val {
    color: #343434;
  }
  .title {
    margin-top: 20px;
    .van-cell__title {
      display: flex;
      align-items: center;
    }
  }
  .line {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    vertical-align: text-top;
  }
}
</style>
