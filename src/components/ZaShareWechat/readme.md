使用
<ZaShareWechat :show-share-popup="showSharePopup" @on-cancle="onCloseWechatShare" @share-click="onShareIconClick" />

showSharePopup 控制是否显示
on-cancle popup中的取消，就是关闭popup 返回一个false
share-click 点击了朋友圈还是好友，返回一个type