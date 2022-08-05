<template>
  <div id="container"></div>
</template>
<!-- 加到index.html <script src="https://api.map.baidu.com/api?type=webgl&v=1.0&ak=pChPbn1Xs5Maoc69zbgXcvsLeel4NxRS"></script> -->
<script lang="ts" setup>
const pointInfo = reactive({
  lng: 121.4836017, // 经度
  lat: 31.2449587, // 纬度
});

function theLocation(map: any) {
  map.clearOverlays();
  const newPoint = new window.BMapGL.Point(pointInfo.lng, pointInfo.lat);
  const marker = new window.BMapGL.Marker(newPoint); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中
  map.panTo(newPoint);
}

onMounted(() => {
  const map = new window.BMapGL.Map('container'); // 创建Map实例
  // map.centerAndZoom('上海市', 12); // 初始化地图,设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);
  const initPoint = new window.BMapGL.Point(pointInfo.lng, pointInfo.lat);
  map.centerAndZoom(initPoint, 17);
  // map.enableScrollWheelZoom(true);
  const marker = new window.BMapGL.Marker(initPoint, {
    enableDragging: true,
  });
  map.addOverlay(marker);
  // 用经纬度设置地图中心点
  // theLocation(map);
});
</script>

<style lang="scss" scoped>
#container {
  overflow: hidden;
  width: 750px;
  height: 500px;
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
</style>
