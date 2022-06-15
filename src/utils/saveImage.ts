import { h, render } from 'vue';
import { Toast } from 'vant';
import ZaSaveImage from '../components/ZaSaveImage/index.vue';
import ZaPreviewImage from '@/components/ZaPreviewImage/index.vue';
import { isApp } from './index';
import { downloadImage } from './jsbridge';
import { uploadBase64File, getPathByKey } from '@/api/modules/oss';

const IS_APP = isApp();

export const renderPreviewImage = (url: string) => {
  const div = document.createElement('div');
  const vNode = h(ZaPreviewImage, {
    url,
    // pre,
    // next,
    onClose: () => {
      document.body.removeChild(div);
    },
  });
  render(vNode, div);
  document.body.appendChild(div);
};

const renderDiv = (url: string) => {
  const div = document.createElement('div');
  const vNode = h(ZaSaveImage, {
    url,
    onClose: () => {
      document.body.removeChild(div);
    },
  });
  render(vNode, div);
  document.body.appendChild(div);
};

const saveImage = (url: string) => {
  console.log(8888);
  const reg = /data:image\/.*;base64,/;
  if (IS_APP) {
    if (reg.test(url)) {
      uploadBase64File(url, 'png').then((res) => {
        if (res.data.status === 200) {
          getPathByKey(res.data.data).then((res1) => {
            if (res1.data.status === 200) {
              console.log('bg', 11);
              downloadImage([res1.data.data.fileOriginalUrl])
                .then(() => {
                  Toast.success('保存成功');
                })
                .catch(() => {
                  Toast.fail('保存失败');
                });
            } else {
              Toast.fail('保存失败');
            }
          });
        } else {
          Toast.fail('保存失败');
        }
      });
    } else {
      downloadImage([url])
        .then(() => {
          console.log('bg', 22);
          Toast.success('保存成功');
        })
        .catch(() => {
          Toast.fail('保存失败');
        });
    }
  } else {
    renderDiv(url);
  }
};

export default saveImage;
