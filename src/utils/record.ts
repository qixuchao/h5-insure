import { Toast } from 'vant';
import { AMRPlayer, Player } from 'web-amr';
import axios from 'axios';
import wx from 'weixin-js-sdk';
import RecorderCore from 'recorder-core';
import useStore from '@/store/app';
import 'recorder-core/src/engine/mp3';
import 'recorder-core/src/engine/mp3-engine';

import { startRecord, stopRecord } from '@/utils/jsbridge';
import { getMediaFile, uploadNetworkFile, uploadFile, getPathByKey, uploadBase64File } from '@/api/modules/voice';
import { isWechat, isApp } from './index';

const IS_WECHAT = isWechat();
const IS_APP = isApp();
const IS_H5 = !IS_WECHAT && !IS_APP;

let recorder: RecorderCore;
let startTime = new Date().getTime();
let stopTimer: ReturnType<typeof setTimeout>;
const store = useStore();

const MAX_DURATION = 60 * 1000;

if (IS_H5) {
  recorder = new RecorderCore({ type: 'mp3', sampleRate: 16000, bitRate: 16 });
  recorder.open(
    () => {
      console.log('授权成功');
    },
    (msg) => {
      console.log('授权失败', msg);
    },
  );
}

let currentAmrPlayer: Player | null = null;
let currentAudio: HTMLAudioElement | null = null;

export const stop = (): Promise<{ file: string; duration: string }> => {
  clearTimeout(stopTimer);
  return new Promise((resolve, reject) => {
    if (IS_WECHAT) {
      wx.stopRecord({
        success: (res) => {
          const duration = ((new Date().getTime() - startTime) / 1000).toFixed(0);
          if (Number(duration) < 1) {
            reject(new Error('录音时间太短'));
          } else {
            Toast.loading({ message: '语音上传中...' });
            wx.uploadVoice({
              localId: res.localId,
              isShowProgressTips: 0,
              success: ({ serverId }) => {
                getMediaFile(serverId)
                  .then((res1) => {
                    return uploadNetworkFile(res1.data.data);
                  })
                  .then((res2) => {
                    resolve({ file: res2.data.data, duration });
                  })
                  .catch(() => {
                    Toast.fail({
                      message: '上传失败',
                    });
                  })
                  .finally(() => {
                    Toast.clear();
                  });
              },
            });
          }
        },
      });
    } else if (IS_H5) {
      recorder.stop((blob, duration) => {
        if (duration / 1000 < 1) {
          reject(new Error('录音时间太短'));
        } else {
          Toast.loading({ message: '语音上传中...' });
          const file = new window.File([blob], 'mp3');
          uploadFile(file)
            .then((res1) => {
              return getPathByKey(res1.data.data);
            })
            .then((res2) => {
              resolve({ file: res2.data.data.fileOriginalUrl, duration: (duration / 1000).toFixed(0) });
            })
            .catch(() => {
              Toast.fail({
                message: '上传失败',
              });
            })
            .finally(() => {
              Toast.clear();
              recorder.close();
            });
        }
      });
    } else if (IS_APP) {
      let durationTemp = '';
      stopRecord()
        .then(({ base64, duration }) => {
          durationTemp = duration;
          if (Number(duration) < 1) {
            reject(new Error('录音时间太短'));
          } else {
            Toast.loading({ message: '语音上传中...' });
            uploadBase64File(base64, 'mp3')
              .then((res1) => {
                return getPathByKey(res1.data.data);
              })
              .then((res2) => {
                resolve({ file: res2.data.data.fileOriginalUrl, duration: durationTemp });
              })
              .catch((err) => {
                reject(err);
                Toast.fail({
                  message: '上传失败',
                });
              })
              .finally(() => {
                Toast.clear();
              });
          }
        })
        .catch((err) => {
          console.log('err', err);
        });
    }
  });
};

export const voiceResume = () => {
  store.setPlayStatus('playing');
  if (currentAmrPlayer) {
    currentAmrPlayer.play();
  } else if (currentAudio) {
    currentAudio.play();
  }
};

export const start = (onStop: (params: { file: string; duration: string }) => void) => {
  if (IS_WECHAT) {
    startTime = new Date().getTime();
    wx.startRecord();
  } else if (IS_H5) {
    recorder.open(() => {
      recorder.start();
    });
  } else if (IS_APP) {
    startRecord();
  }
  // 超过最大时长自动停止
  stopTimer = setTimeout(() => {
    clearTimeout(stopTimer);
    stop().then(({ file, duration }) => {
      onStop && onStop({ file, duration });
    });
  }, MAX_DURATION);
};

export const cancel = () => {
  clearTimeout(stopTimer);
  if (IS_WECHAT) {
    wx.stopRecord();
  } else if (IS_H5) {
    recorder.stop();
    recorder.close();
  } else {
    stopRecord();
  }
};

let voiceStopCallback: () => void;

export const voiceStop = () => {
  store.setPlayStatus('stop');
  store.setPlayUrl('');
  voiceStopCallback && voiceStopCallback();
  if (currentAmrPlayer) {
    currentAmrPlayer.pause();
    currentAmrPlayer = null;
  } else if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
};

export const play = (src: string, endFn?: () => void) => {
  if (store.playingUrl && src === store.playingUrl && (currentAmrPlayer || currentAudio)) {
    voiceResume();
  } else {
    voiceStop();
    store.setPlayStatus('playing');
    if (endFn) {
      voiceStopCallback = endFn;
    }
    store.setPlayUrl(src);
    if (src.includes('.amr')) {
      axios
        .get(src, {
          responseType: 'arraybuffer',
        })
        .then((res) => {
          const player: Player = AMRPlayer(res.data);
          currentAmrPlayer = player;
          player
            .play()
            .then(() => {
              player.addEventListener('playerended', () => {
                voiceStop();
              });
            })
            .catch((err) => {
              console.log('err', err);
            });
        })
        .catch((err) => {
          console.log('err', err);
        });
    } else {
      const audio = document.createElement('audio');
      audio.src = src;
      currentAudio = audio;
      audio.onended = () => {
        voiceStop();
      };
      audio.play();
    }
  }
};

export const voicePause = () => {
  store.setPlayStatus('pause');
  if (currentAmrPlayer) {
    currentAmrPlayer.pause();
  } else if (currentAudio) {
    currentAudio.pause();
  }
};

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    voicePause();
  }
});
