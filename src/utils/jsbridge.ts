import { Dialog } from 'vant';

let startTime = new Date().getTime();

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    window.callHandler('flutterGetLocation', { type: 'GPS' }, (res: any) => {
      const { code, data, message } = JSON.parse(res || '{}');
      if (code === 0) {
        resolve(data);
      } else {
        reject(message);
      }
    });
  });
};

export const startRecord = () => {
  startTime = new Date().getTime();
  window.callHandler('flutterStartRecord');
};

export const stopRecord = (): Promise<{ base64: string; duration: string }> => {
  return new Promise((resolve, reject) => {
    window.callHandler('flutterStopRecord', {}, (res: any) => {
      const { code, data, message } = JSON.parse(res || '{}');
      if (code === 0) {
        resolve({ base64: data.base64, duration: ((new Date().getTime() - startTime) / 1000).toFixed(0) });
      } else {
        reject(message);
      }
    });
  });
};

/**
 * 微信分享
 * @param params 微信分享参数
 */
export const wechatShare = (params: {
  /**
   * 场景，timeline-朋友圈，session-朋友
   */
  scene: 'timeline' | 'session';
  /**
   * 分享的类型， image-分享图片，web-分享网页，text-分享文本，file-分享文件，video-分享视频
   */
  type?: 'image' | 'web' | 'text' | 'file' | 'video';
  /**
   * 图片的url,必须以png或者jpg等图片格式结尾
   */
  imageUrl?: string;
  /**
   * 缩略图的url，网页分享时为网站的缩略图，视频分享时为网站的缩略图
   */
  thumbUrl?: string;
  /**
   * 文本
   */
  text?: string;
  /**
   * 网页或者视频分享时候的标题
   */
  title?: string;
  /**
   * 网页分享时网站的的介绍
   */
  content?: string;
  /**
   * 网页地址
   */
  webUrl?: string;
  /**
   * 分享视频时候的链接
   */
  videoUrl?: string;
}) => {
  console.log('imgurl====>');
  console.log(params.thumbUrl, params.thumbUrl?.replace(/http:/g, 'https:'));
  window.callHandler('flutterWechat', { ...params, thumbUrl: params.thumbUrl?.replace(/http:/g, 'https:') });
};

export const imagePicker = (maxImages = 1): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    window.callHandler('flutterImagePicker', { quality: 100, maxImages, enableCamera: true }, (res: any) => {
      const data: Array<{ base64: string }> = JSON.parse(res || '[]');
      resolve(data.map((x) => x.base64));
    });
  });
};

export const closeWebview = () => {
  window.callHandler('flutterCloseWebview');
};
export const openWebview = (params = {}) => {
  console.log(params, 11);
  window.callHandler('flutterOpenWebview', params);
};

export const downloadImage = (images: string[]) => {
  console.log('images', images);
  return new Promise((resolve, reject) => {
    window.callHandler('flutterDownloadImages', images, (res: any) => {
      const data = JSON.parse(res || '{}');
      const { code, message } = data;
      if (code === 0) {
        resolve('下载成功');
      } else {
        reject(message);
      }
    });
  });
};

export const downloadVideo = (videoPath: string) => {
  return new Promise((resolve, reject) => {
    window.callHandler('flutterDownloadVideo', { videoPath }, (res: any) => {
      const data = JSON.parse(res || '{}');
      const { code, message } = data;
      if (code === 0) {
        resolve('下载成功');
      } else {
        reject(message);
      }
    });
  });
};
