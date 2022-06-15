<template>
  <div class="comp comp-za-map">
    <div class="za-map-host" @click="openMap">
      <template v-if="isFail">
        <img :src="hostErr" class="host-left-err" alt="" />
        <div class="host-content fail">定位获取失败，请手动定位</div>
        <div class="host-right fail"><ZaSvg name="right_arrow" class="arrow-icon" /></div>
      </template>
      <template v-else>
        <img :src="hostIcon" class="host-left" alt="" />
        <div class="host-content">{{ points?.title || '暂无定位信息，请手动定位' }}</div>
        <div class="host-right"><ZaSvg name="right_arrow" class="arrow-icon" /></div>
      </template>
    </div>
    <div v-if="show" class="za-map-sheet">
      <div class="za-map-sheet-container">
        <Map :point-info="point" @on-fail="handleFail" @on-success="handleSuccess" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';

import hostIcon from '@/assets/images/record/host.png';
import hostErr from '@/assets/images/record/hostErr.png';
import Map from './Map/index.vue';

interface PointType {
  address: string;
  title?: string;
  point?: any;
}
const props = defineProps({
  address: {
    type: String,
    default: '暂无定位信息，请手动定位',
  },
  point: {
    type: Object as PropType<PointType>,
    default: () => {},
  },
});
const emit = defineEmits(['update:address', 'update:point']);
const route = useRoute();
const router = useRouter();

const show = ref(false);
const isFail = ref(false);

const points = ref<PointType>(props.point);

const openMap = () => {
  show.value = true;
  window.location.hash = '#validForm';
  // window.location.replace(`${window.location.href.toString().replace(window.location.hash, '')}#validForm`);
};
const handleFail = () => {
  isFail.value = true;
  show.value = false;
};

const handleSuccess = (data: PointType) => {
  points.value = data;
  emit('update:address', data.title);
  emit('update:point', data);
  show.value = false;
  router.back();
  // window.location.replace(`${window.location.href.toString().replace(window.location.hash, '')}`);
  isFail.value = false;
};

watch(
  () => route.hash,
  () => {
    if (!route.hash) {
      show.value = false;
    } else {
      show.value = true;
    }
  },
);
watch(
  () => props.point,
  () => {
    points.value = props.point;
  },
  {
    deep: true,
  },
);
</script>
<style lang="scss">
.comp-za-map {
  margin-top: 34px;
  // margin-bottom: 40px;
  .za-map-host {
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: 35px;
    border: 2px solid #e0e0e0;
    height: 70px;
    padding: 15px 38px;
    .host-left-err {
      width: 30px;
      height: 30px;
    }
    .host-left {
      width: 29px;
      height: 33px;
    }
    .host-content {
      font-size: 28px;
      font-weight: 400;
      color: #343434;
      margin-left: 12px;
      margin-right: 14px;
    }
    .host-right {
      color: #909090;
      font-size: 26px;
      font-weight: 400;
      display: flex;
      align-items: center;
    }
    .fail {
      color: #f91801;
    }
  }
}
.za-map-sheet {
  height: 100vh;
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #fff;
  .za-map-sheet-container {
    overflow: hidden;
    display: flex;
    height: 100vh;
    flex-direction: column;
    background: #fff;
  }
}
</style>
