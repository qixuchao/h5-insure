let IS_READY = false;

const callWebViewByObject = (fnName: string, params: any) => {
  if (window.AppJSInterface) {
    window.AppJSInterface[fnName](JSON.stringify(params));
  } else if (window.webkit.messageHandlers) {
    window.webkit.messageHandlers[fnName].postMessage(JSON.stringify(params));
  }
};

const appReady = () => {
  return new Promise((resolve, reject) => {
    if (IS_READY) {
      resolve('success');
    } else {
      const timer = setTimeout(() => {
        if (window.AppJSInterface || (window.webkit && window.webkit.messageHandlers)) {
          clearTimeout(timer);
          resolve('success');
          IS_READY = true;
        } else {
          clearTimeout(timer);
          reject(new Error('JsBridge初始化失败：找不到window.AppJSInterface或者window.webkit.messageHandlers'));
        }
      }, 100);
    }
  });
};

function callJsBridge<T = any>(options: { fn: string; cbName?: string; params?: any }): Promise<T> {
  const { fn, cbName = 'cbname', params = {} } = options;
  return new Promise((resolve, reject) => {
    appReady()
      .then(() => {
        window[cbName] = (data: T) => {
          console.log('data>>>>>>>', data);
          if (data) {
            if (typeof data === 'string') {
              try {
                resolve(JSON.parse(data));
              } catch (e) {
                // console.log('JSON.PARSE失败');
                resolve(data);
              }
            } else {
              resolve(data);
            }
          } else {
            resolve(data);
          }
        };
        params.cbname = cbName;
        callWebViewByObject(fn, params);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const getNativeCookies = (): Promise<{ [key: string]: string }> => {
  return new Promise((resolve, reject) => {
    callJsBridge<string>({ fn: 'getCookies', cbName: 'getCookies' })
      .then((res) => {
        const arr = res.split(';');
        const json = {};
        arr.forEach((item) => {
          const temp = item.split('=');
          const [key, value] = temp;
          json[key] = value;
        });
        resolve(json);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const imagePicker = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    callJsBridge<{ success: boolean | string; data: string }>({ fn: 'choosePhoto', params: { limit: '3M' } }).then(
      (res) => {
        if (res.success) {
          // 为兼容之前的jsbridge，返回数组
          resolve([res.data]);
        } else {
          reject(new Error('选择图片失败'));
        }
      },
    );
  });
};

export const getLocation = (): Promise<{ latitude: string; longitude: string }> => {
  return callJsBridge<{ latitude: string; longitude: string }>({
    fn: 'na_startLocation',
    cbName: 'js_startLocation',
  });
};

export const getContacts = (): Promise<
  Array<{ index: string; value: Array<{ mobile: string; name: string; isSelect: boolean }> }>
> => {
  return callJsBridge<Array<{ index: string; value: Array<{ mobile: string; name: string; isSelect: boolean }> }>>({
    fn: 'na_getContacts',
    cbName: 'js_getContacts',
  });
};

export const startRecord = () => {
  return callJsBridge({ fn: 'na_startRecord', cbName: 'js_startRecord' });
};

export const stopRecord = (): Promise<{ base64: string; duration: string; type: string }> => {
  return new Promise((resolve, reject) => {
    callJsBridge<{ base64: string; duration: string; type: string }>({
      fn: 'na_stopRecord',
      cbName: 'js_stopRecord',
    })
      .then((res) => {
        const { base64, duration, type = 'mp3' } = res;
        console.log('duration', duration);
        console.log('type', type);
        resolve({ base64, duration: Number(duration).toFixed(0), type });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const downloadImage = (images: string[]) => {
  return callJsBridge({
    fn: 'downloadImgs',
    cbName: 'js_downloadImgs',
    params: { urls: images },
  });
};

export const wechatShare = (
  params: { type: 'image'; link: string } | { img: string; title: string; desc: string; link: string },
) => {
  return callJsBridge({
    fn: 'configWXShare',
    cbName: 'js_configWXShare',
    params,
  });
};

export const copyToClipboard = (str: string) => {
  return callJsBridge({
    fn: 'copyToClipboard',
    cbName: 'js_copyToClipboard',
    params: { copy: str },
  });
};

export const downloadVideo = (url: string) => {
  return callJsBridge({ fn: 'downloadVideo', cbName: 'js_downloadVideo', params: { url } });
};

export const shareWXForMoments = (
  params: { type: 'image'; link: string } | { img: string; title: string; desc: string; link: string },
) => {
  return callJsBridge({
    fn: 'shareWXForMoments',
    cbName: 'js_shareWXForMoments',
    params,
  });
};

export const openWeiXin = () => {
  return callJsBridge({
    fn: 'openWeiXin',
    cbName: 'js_openWeiXin',
  });
};

export const openWebView = (title: string, link: string) => {
  return callJsBridge({
    fn: 'openWebView',
    cbName: 'js_openWebView',
    params: {
      title,
      link,
      showProgress: true,
    },
  });
};

export const openPDFWithUrl = (title: string, link: string) => {
  return callJsBridge({
    fn: 'openPDFDoc',
    cbName: 'js_openPDFDoc',
    params: {
      title,
      link,
      showProgress: true,
    },
  });
};

/**
 * 跳转浏览器进行预览、下载
 * @param url
 * @returns
 */
export const downloadPDFWithUrl = (url: string) => {
  return callJsBridge({
    fn: 'na_openBrowser',
    cbName: 'js_openBrowser',
    params: { url },
  });
};
