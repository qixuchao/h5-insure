/* eslint-disable @typescript-eslint/ban-ts-comment */
const debug = false;

const jsapis = [
  'getZAToken',
  'getSystemInfo',
  'setNavigationBarTitle',
  'setNavigationBarColor',
  'setNavigationBarRightButton',
  'showShareView',
  'share',
  'setNavigationBarMenu',
  'login',
  'register',
  'startFaceDetectService',
  'startIDCardDetect',
  'startTelecomCheat',
  'navigateToZAService',
  'closeWebView',
  'appEncryptionAndDecryption',
  'getLocationInfo',
  'storeReviewWithinApp',
  'queryAppInstalledById',
  'goNavigationServiceById',
  'webviewControlSpring',
  'resetNavigationBar',
];

debug && console.log(jsapis);

const getCookie = function (name: string) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);

  if (arr) {
    return unescape(arr[2]);
  }
  return null;
};

const SDK = function (event: string, params: any, cb: (p: any) => void) {
  if (!(navigator.userAgent.indexOf('FlutterWebView') > -1 || navigator.userAgent.indexOf('ZhongAnWebView') > -1)) {
    // console.log('SDK', event, params, cb);
    console.warn('non-app environment');
    return;
  }
  const prefix = 'ZAJSSDK_';
  const cbName = `${prefix + event.toUpperCase()}_CALLBACK`;

  const paramsObj = {
    functionName: event,
    params,
    complete: cbName,
  };
  // console.log('paramsObj', paramsObj);
  window[cbName] = function (data: any) {
    cb && cb(data);
    debug && console.info('Callback callback info huo: ', JSON.parse(data));
    delete window[cbName];
  };
  if (navigator.userAgent.indexOf('FlutterWebView') > -1) {
    window.FlutterWebBridge.postMessage(JSON.stringify(paramsObj));
  } else {
    window.prompt(JSON.stringify(paramsObj));
  }
};

SDK.app_version = getCookie('app_version'); // APP版本号
SDK.app_key = getCookie('app_key'); //
SDK.channelId = getCookie('channelId'); // APP分发渠道号
SDK.channelOrigin = getCookie('channelOrigin'); // App对应渠道名
SDK.zaLoginCookieKey = getCookie('zaLoginCookieKey'); // SSO登录验证token
SDK.zaMemberLCK = getCookie('zaMemberLCK'); // 对应放置user token，用于同步账户信息[旧版登录方式，后续可能被废弃]
SDK.zaapp_uuid = getCookie('zaapp_uuid'); // 设备唯一标示
SDK.zaapp_uuid_en = getCookie('zaapp_uuid_en'); // 设备唯一标示en
SDK.zadevinfo = getCookie('zadevinfo'); //

// 比较版本大小
SDK.versionCompare = (now: string, latest = SDK.app_version) => {
  if (now === latest) {
    return 0;
  }
  const arrNow = now.split('.');
  const arrLatest = latest?.split('.') || [];
  const res = 0;
  let idx = 0;
  while (idx <= 2) {
    if (parseInt(arrNow[idx], 10) === parseInt(arrLatest[idx], 10)) {
      idx += 1;
    } else if (parseInt(arrNow[idx], 10) > parseInt(arrLatest[idx], 10)) {
      return 1;
    } else {
      return -1;
    }
  }
  return -1;
};

export default SDK;

export const closeWebView = () => {
  SDK('closeWebView', {}, () => {});
};

// 检查app是否安装
export const checkAppIsInstalled = (url) => {
  return new Promise((resolve, reject) => {
    SDK('checkIsInstallApp', { scheme: url }, (info) => {
      window.alert(JSON.stringify(info));
      console.log('checkIsInstallApp', info);
      resolve(info);
    });
  });
};

// 通过schemaLink唤起app
export const pullUpApp = (url) => {
  return new Promise((resolve, reject) => {
    SDK('pullUpApp', { scheme: url }, (info) => {
      console.log('pullUpApp', JSON.stringify(info));
      resolve(info);
    });
  });
};

// 识别身份证
export const detectIdCard = () => {
  return new Promise((resolve, reject) => {
    SDK('startIDCardDetectInfo', { side: '0' }, (info: any) => {
      resolve(info.data);
    });
  });
};

// 识别银行卡
export const detectBankCard = () => {
  return new Promise((resolve, reject) => {
    SDK('startBankCardDetectInfo', { channelId: 'lianapp' }, (info: any) => {
      resolve(info.data);
    });
  });
};

// 识别人脸
export const startFaceDetectService = () => {
  return new Promise((resolve, reject) => {
    SDK('startFaceDetectService', { channel: 'lianapp', token: '' }, (info: any) => {
      resolve(info);
    });
  });
};

// 身份证拍照
export const takeIdCardPhoto = (isFront = true) => {
  return new Promise((resolve, reject) => {
    SDK('takeIdCardPhoto', { isFront: isFront ? 'Y' : 'N' }, (info: any) => {
      resolve(info?.data?.base64);
    });
  });
};

// 银行卡拍照
export const takeBankCardPhoto = () => {
  return new Promise((resolve, reject) => {
    SDK('takeBankCardPhoto', {}, (info: any) => {
      resolve(info?.data?.base64);
    });
  });
};

// 选择相册
export const selectAlbum = () => {
  return new Promise((resolve, reject) => {
    SDK('selectAlbumPicture', {}, (info: any) => {
      resolve(info?.data?.base64);
    });
  });
};

// 跳转app原生页面
export const goAppPage = (params: any) => {
  return new Promise((resolve, reject) => {
    console.log('goAppPage==>', params);
    SDK('navigateToZAService', params, (info: any) => {
      // console.log('=======info', info);
      resolve(info);
    });
  });
};

// 加解密
export const encrypt = (inputString: string, keyType: 2 | 3, operationType: '0' | '1') => {
  return new Promise((resolve, reject) => {
    SDK('appEncryptionAndDecryption', { inputString, keyType, operationType }, (info: any) => {
      // console.log('encrypt==>', info);
      if (info?.data?.outputString) {
        resolve(info?.data?.outputString as string);
      }
      reject();
    });
  });
};

// 获取设备信息
export const getDeviceInfo = () => {
  return new Promise((resolve, reject) => {
    SDK('getSystemInfo', {}, (info: any) => {
      // console.log('getDeviceInfo==>', info);
      localStorage.setItem('deviceId', info?.data?.deviceId);
      resolve(info?.data);
    });
  });
};

const genUrl = (params: any) => {
  return `laapp://la.gotowebview?params=${JSON.stringify(params)}`;
};

// 打开新的webview
export const openNewWebview = (url: string, laShowNavigationBar = true) => {
  goAppPage({
    url: genUrl({ laShowNavigationBar: laShowNavigationBar ? '1' : '0', url }),
  });
};

// 打开新的webview   tab页面 打开新的webview  tab客户用
export const openNewWebviewEnCode = (url: string) => {
  console.log(genUrl({ encodeUrl: encodeURIComponent(url) }));
  goAppPage({
    url: genUrl({ encodeUrl: encodeURIComponent(url) }),
  });
};

// app视图生命周期
export const getAppWebStatus = () => {
  return new Promise((resolve, reject) => {
    SDK('pageCycleService', {}, (info: any) => {
      console.log('getAppWebStatus==>', info);
      // didLoad 页面创建完成，仅走一次
      // willAppear 页面即将进入
      // didAppear 页面已经进入
      // willDisappear 页面即将退出
      // didDisappear 页面已经退出
      // dealloc 页面销毁
      resolve(info);
    });
  });
};

// 微信朋友圈分享
export const shareWeiXin = (params: any) => {
  return new Promise((resolve, reject) => {
    console.log('share==>', params);
    SDK('share', params, (info: any) => {
      // shareType 分享渠道: 0: 微信聊天界面 1: 微信朋友圈 2: QQ聊天界面 3:QQ空间4:分享微信小程序
      // title 分享出去的标题
      // desc 分享出去的描述
      // url 分享出去的网页地址
      // imageUrl 分享出去的图片地址(确保图片质量小于32K)(必传字段，android不传分享不出去)
      // miniProgramld 小程序原始id(众安保险官网小程序原始id:gh 976417cbb900)
      // miniProgramPath 小程序页面的路径 /pages/main/index/index
      // isSharePicture 是否只分享imageUri单张图片，1为是，0为否
      // miniProgramType 分享小程序的版本(“0”:正式版，“1”: 开发版，“2”: 体验版)注: 该字段3.0.3版本后有效
      console.log('=======info', info);
      resolve(info);
    });
  });
};

// 唤起数字人民币支付
export const laPay = (params: any) => {
  return new Promise((resolve, reject) => {
    SDK('laPay', params, (info: any) => {
      console.log('=======info', params, info);
      resolve(info);
    });
  });
};
