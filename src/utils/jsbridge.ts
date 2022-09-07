// app jsbridge
import { isEmpty } from 'lodash';

const callWebViewByObject = (fnName: string, params: any) => {
  if (window.AppJSInterface) {
    window.AppJSInterface[fnName](JSON.stringify(params));
  } else if (window.webkit.messageHandlers) {
    window.webkit.messageHandlers[fnName].postMessage(JSON.stringify(params));
  }
};

// 修复审计问题，不允许在catch下面打印日志
function custlog(msg: string) {
  console.log(msg);
}
const jsbridge = {
  appReady() {
    return new Promise((resolve, reject) => {
      const tid = setInterval(() => {
        if (window.AppJSInterface || (window.webkit && window.webkit.messageHandlers)) {
          clearInterval(tid);
          resolve('success');
        } else {
          // eslint-disable-next-line
          reject('Jsbridge初始化失败：找不到window.AppJSInterface或者window.webkit.messageHandlers');
        }
      }, 100);
    });
  },
  showNavMask(visible: any) {
    return this.appReady()
      .then(() => {
        callWebViewByObject('showNavShadow', { visible });
      })
      .catch((error) => {
        // console.log('------jsbridge error', error); // eslint-disable-line
      });
  },
  getNativeCookies(cbname: any) {
    return this.appReady()
      .then(() => {
        callWebViewByObject('getCookies', { cbname });
      })
      .catch((error) => {
        return new Error('调用失败');
      });
  },
  // 分享配置
  shareConfig(param: { type?: string; link: any; cbname?: any; img: any; title: any; desc: any }) {
    this.appReady()
      .then(() => {
        let json;
        if (param.type === 'image') {
          json = {
            type: 'image',
            link: param.link,
            cbname: param.cbname,
          };
        } else {
          json = {
            img: param.img,
            title: param.title,
            desc: param.desc,
            link: param.link,
            cbname: param.cbname,
          };
        }
        callWebViewByObject('configWXShare', json);
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 登出
  callLogout(cbname: any) {
    return this.appReady()
      .then(() => {
        callWebViewByObject('logout', { cbname });
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 从通讯录获取选择的联系人列表信息
  importCustomersFromNative(cbname: any) {
    return this.appReady()
      .then(() => {
        callWebViewByObject('importCustomers', { cbname });
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 呼叫app 照相机和相册
  callImage(cbname: any) {
    // return new Promise((resolve, reject) => {
    this.appReady()
      .then(() => {
        callWebViewByObject('choosePhoto', {
          cbname,
          limit: '30M',
        });
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 打开pdf文档
  openPDFWithUrl(title: any, link: any) {
    this.appReady()
      .then(() => {
        callWebViewByObject('openPDFDoc', {
          title,
          link,
        });
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 新开webview
  openWebView(title: any, link: any, type = 'true') {
    this.appReady()
      .then(() => {
        callWebViewByObject('openWebView', {
          title,
          link,
          showProgress: type,
        });
      })
      .catch((error) => {
        custlog(error);
      });
  },
  openNewWebForShare({ link, title, desc, img }: any) {
    this.appReady()
      .then(() => {
        callWebViewByObject('openNewWebForShare', {
          link,
          title,
          desc,
          img,
        });
      })
      .catch((error) => {
        custlog(error);
      });
  },
  goback() {
    this.appReady()
      .then(() => {
        callWebViewByObject('goback', '');
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 关闭webview
  closeWebView(paramObj: { cbname: string }) {
    let params = { cbname: '' };
    if (!isEmpty(params)) {
      params = { ...params, ...paramObj };
    }
    this.appReady()
      .then(() => {
        callWebViewByObject('closeWebview', params);
      })
      .catch((error) => {
        custlog(error);
      });
  },

  // 下载图片
  downloadImg(
    params:
      | string
      | { type: string; link: any; cbname: any; img?: undefined; title?: undefined; desc?: undefined }
      | { img: any; title: any; desc: any; link: any; cbname: any; type?: undefined },
  ) {
    this.appReady()
      .then(() => {
        callWebViewByObject('downloadImg', params);
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 跳转app tab标签
  jumpProduct(
    params:
      | string
      | { type: string; link: any; cbname: any; img?: undefined; title?: undefined; desc?: undefined }
      | { img: any; title: any; desc: any; link: any; cbname: any; type?: undefined },
  ) {
    this.appReady()
      .then(() => {
        callWebViewByObject('jumpProduct', params);
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 跳转app 签约结果页
  jumpSignResult() {
    this.appReady()
      .then(() => {
        callWebViewByObject('jumpSignResult', '');
      })
      .catch((error) => {
        custlog(error);
      });
  },

  // 下载视频
  downloadVideo(params: any) {
    this.appReady()
      .then(() => {
        callWebViewByObject('downloadVideo', params);
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 下载多图
  downloadImgs(params: any) {
    this.appReady()
      .then(() => {
        callWebViewByObject('downloadImgs', params);
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 打开微信
  openWeiXin() {
    this.appReady()
      .then(() => {
        callWebViewByObject('openWeiXin', '');
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 预览图片
  previewImgs(params: any) {
    this.appReady()
      .then(() => {
        callWebViewByObject('previewImgs', params);
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 复制
  copyToClipboard(params: any) {
    this.appReady()
      .then(() => {
        callWebViewByObject('copyToClipboard', params);
      })
      .catch((error) => {
        custlog(error);
      });
  },
  //  分享单图
  shareWXForMoments(params: any) {
    this.appReady()
      .then(() => {
        callWebViewByObject('shareWXForMoments', params);
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 播放视频 previewVideo
  previewVideo(params: any) {
    this.appReady()
      .then(() => {
        callWebViewByObject('previewVideo', params);
      })
      .catch((error) => {
        custlog(error);
      });
  },
  // 获取通讯录
  getContacts(cbname: any) {
    return this.appReady()
      .then(() => {
        callWebViewByObject('na_getContacts', { cbname });
      })
      .catch((error) => {
        custlog(error);
      });
  },

  // 获取位置
  getLocation(param: any) {
    this.appReady()
      .then(() => callWebViewByObject('na_startLocation', { param }))
      .catch((error) => {
        custlog(error);
      });
  },
};

export default jsbridge;
