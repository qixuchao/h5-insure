import wx from 'weixin-js-sdk';
import { Toast } from 'vant';
import { isApp, isWechat } from './index';
import { imagePicker } from './jsbridge';
import { upload, getPathByKey, uploadBase64File } from '@/api/modules/oss';

const IS_APP = isApp();
const IS_WECHAT = isWechat();
const IS_H5 = !IS_APP && !IS_WECHAT;

const imageSelect = (maxImages = 1): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    if (IS_APP) {
      imagePicker(maxImages)
        .then((base64Array) => {
          return Promise.all(base64Array.map((base64) => uploadBase64File(base64, 'jpg')));
        })
        .then((results) => {
          return Promise.all(results.map((x) => getPathByKey(x.data.data)));
        })
        .then((results) => {
          resolve(results.map((x) => x.data.data.fileOriginalUrl));
        })
        .catch(() => {
          Toast.fail('选择图片失败');
        });
    } else if (IS_WECHAT) {
      wx.chooseImage({
        count: maxImages,
        success: (res: { localIds: string }) => {
          console.log(res.localIds);
        },
      });
    } else if (IS_H5) {
      const input = document.createElement('input');
      input.style.display = 'none';
      input.setAttribute('type', 'file');
      input.addEventListener('change', (e: any) => {
        if (e && e.target && e.target.files && e.target.files[0]) {
          upload(e.target.files[0])
            .then((res) => {
              if (res.status === 200) {
                getPathByKey(res.data.data).then((res1) => {
                  resolve([res1.data.data.fileOriginalUrl]);
                });
              }
            })
            .catch(() => {
              Toast.fail('选择图片失败');
            })
            .finally(() => {
              document.body.removeChild(input);
            });
        }
      });
      document.body.appendChild(input);
      input.click();
    }
  });
};

export default imageSelect;
