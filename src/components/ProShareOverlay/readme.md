使用

<ProShareOverlay :show="show" @on-close="onCloseOverlay" />

show 控制遮罩层展示

text 为文字展示

on-close 方法，返回一个false ，关闭遮罩层

const onCloseOverlay = (val: boolean) => {
  showOverLay.value = val;
};