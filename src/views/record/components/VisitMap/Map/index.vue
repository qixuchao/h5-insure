<template>
  <van-search
    v-model="searchValue"
    placeholder="搜索"
    :show-action="!showMap"
    @cancel="handleCancel"
    @focus="showMap = false"
    @search="onSearch"
  />

  <div v-show="showMap" class="cmp-maps">
    <div class="pos-icon">
      <div class="obj">
        <img :src="curIcon" />
      </div>
    </div>
    <div id="za-ls-map-container"></div>
  </div>
  <div class="r-result">
    <van-list>
      <div
        v-for="(item, key) in pointResults"
        :key="key"
        class="map-cell"
        :title="item.title"
        @click="handleUpdatePoint(item)"
      >
        <template v-if="item.title">
          <div :class="{ active: item.uid === selectPoint.uid }">
            <h3>{{ item.title }}</h3>
            <p>{{ item.address }}</p>
          </div>
          <div v-if="item.uid === selectPoint.uid"><img :src="okIcon" /></div>
        </template>
      </div>
    </van-list>
  </div>
</template>
<script lang="ts" setup>
import { Dialog } from 'vant';
import okIcon from '@/assets/images/record/ok.png';
import curIcon from '@/assets/images/record/cur.png';
import { getLocation } from '@/utils/jsbridge';
import { isApp } from '@/utils';

const IS_APP = isApp();

const emit = defineEmits(['onFail', 'onSuccess']);

const props = defineProps({
  pointInfo: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const showMap = ref<boolean>(true);
const searchValue = ref('');
const selectPoint = ref<any>(props.pointInfo);
const pointResults = ref<any[]>([]);
const maps = ref();
const geoLocation = ref();

const handleCancel = () => {
  showMap.value = true;
};
const onSearch = () => {
  const local = new window.BMapGL.LocalSearch(maps.value, {
    pageCapacity: 20,
    onSearchComplete: (results: any) => {
      // eslint-disable-next-line dot-notation
      if (results?.['_pois']) {
        // eslint-disable-next-line dot-notation
        pointResults.value = results['_pois'];
      }
    },
  });
  local.search(searchValue.value);
};
const showPoi = () => {
  const center = maps.value.getCenter();
  const initPoint = new window.BMapGL.Point(center.lng, center.lat);
  const mOption = {
    poiRadius: 2000, // 半径为1000米内的POI,默认100米
    numPois: 50, // 列举出50个POI,默认10个
  };
  maps.value.centerAndZoom(initPoint, 16);

  const geoc = new window.BMapGL.Geocoder();
  geoc.getLocation(
    initPoint,
    (rs: any) => {
      if (rs) {
        pointResults.value = [{ ...rs, title: rs.address }, ...rs.surroundingPois];
      }
    },
    mOption,
  );
};
const handleFailResponse = (message: string) => {
  Dialog.confirm({
    title: '定位服务未开启',
    // confirmButtonText:'去开启',
    message: '请在系统设置中开启定位服务',
  })
    .then(() => {
      console.log('sure');
      emit('onFail');
    })
    .catch((err) => {
      console.log(err);
    });
};

const getPos = () => {
  console.log(22);
  if (IS_APP) {
    getLocation().then((r) => {
      if (r?.latitude) {
        const { longitude, latitude } = r;
        maps.value.centerAndZoom(new window.BMapGL.Point(longitude, latitude), 16);
        showPoi();
      }
    });
  } else {
    const geoL = geoLocation.value;
    geoL.getCurrentPosition((r: any) => {
      if (r) {
        const { lat, lng } = r.point;
        maps.value.centerAndZoom(new window.BMapGL.Point(lng, lat), 16);
        showPoi();
      }
    });
  }
};

const updatePoint = () => {
  // console.log('updatePoint', selectPoint.value, props.pointInfo);
  if (maps.value) {
    const initPoint = new window.BMapGL.Point(props.pointInfo.point.lng, props.pointInfo.point.lat);

    const mOption = {
      poiRadius: 2000, // 半径为1000米内的POI,默认100米
      numPois: 50, // 列举出50个POI,默认10个
    };
    maps.value.centerAndZoom(initPoint, 16);

    const geoc = new window.BMapGL.Geocoder();
    geoc.getLocation(
      initPoint,
      (rs: any) => {
        if (rs) {
          console.log(rs);
          pointResults.value = [{ ...rs, title: rs.address }, ...rs.surroundingPois];
        }
      },
      mOption,
    );
  }
};
const initMap = () => {
  maps.value = new window.BMapGL.Map('za-ls-map-container'); // 创建Map实例
  maps.value.addEventListener('dragend', () => {
    showPoi();
  });
  console.log(props.pointInfo?.point);
  if (props.pointInfo?.point?.lat) {
    updatePoint();
  } else {
    geoLocation.value = new window.BMapGL.Geolocation();
    getPos();
  }
};

const handleUpdatePoint = (item: any) => {
  selectPoint.value = item;
  maps.value.centerAndZoom(new window.BMapGL.Point(item.point.lng, item.point.lat), 16);

  emit('onSuccess', item);
};

const onClickLeft = () => {
  emit('onFail');
};
const onClickRight = () => {
  emit('onSuccess', selectPoint.value);
};

watch(
  () => props.pointInfo,
  () => {
    if (props.pointInfo) {
      selectPoint.value = {
        ...selectPoint.value,
        ...props.pointInfo,
      };
    }
  },
  { deep: true },
);
onMounted(() => {
  if (!maps.value) {
    initMap();
  }
});
</script>

<style lang="scss">
#za-ls-map-container {
  overflow: hidden;
  width: 750px;
  height: 800px;
  margin: 0;
  font-family: '微软雅黑';
}
.info {
  z-index: 999;
  width: auto;
  min-width: 22rem;
  padding: 0.75rem 1.25rem;
  margin-left: 1.25rem;
  position: fixed;
  top: 1rem;
  background-color: #fff;
  border-radius: 0.25rem;
  font-size: 14px;
  color: #666;
  box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
}
.comp-map-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.za-map-nav {
  .van-nav-bar__left.van-haptics-feedback {
    .van-nav-bar__text {
      color: #666;
    }
  }
}
.r-result {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
  background: #fff;
  .map-cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 15px 0px;
    border-bottom: 1px solid #ddd;
    h3 {
      font-size: 30px;
      font-weight: 500;
      color: #343434;
    }
    p {
      font-size: 28px;
      font-weight: 400;
      color: #666;
    }
  }
  .active {
    h3 {
      color: $primary-color;
    }
    p {
      color: $primary-color;
    }
  }
}

.cmp-maps {
  position: relative;
  .pos-icon {
    z-index: 999;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    width: 40px;
    height: 40px;
    display: block;
    .obj {
      position: absolute;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
