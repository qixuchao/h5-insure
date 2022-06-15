<!--
 * @Description: 组件演示页面
 * @Autor: kevin.liang
 * @Date: 2022-03-03 16:06:41
 * @LastEditors: Lct
 * @LastEditTime: 2022-03-11 15:42:38
-->
<template>
  <div>
    <ZaDateChange :default-active="defaultActive" :datamap="DATE_MAP" @on-choose-date="chooseDate" />
    <ZaDatePicker :date-type="state.type" @on-change-date-picker="changeDatePicker" />
    <ZaPageWrap main-class="page-demo">
      <VanCollapse v-model="activeNames" @change="changeCollapse">
        <VanCollapseItem title="ZaSvg" name="1">
          <ZaSvg name="filter" />
          <h2>svg 使用</h2>
          原本颜色：<ZaSvg name="add-grey" /> <ZaSvg name="filter" />
          <div>修改后的颜色<ZaSvg name="filter" color="red" /></div>
          <div>
            注意svg文件如果需要修改颜色,记得把svg文件中 fill属性去掉，如果是两色的svg就不要去掉fill，
            去掉fill后，icon默认颜色会随着当前color来定
          </div>
        </VanCollapseItem>
        <VanCollapseItem title="半圆进度条 ZaCircleProgress" name="2">
          <ZaCircleProgress v-model="process" :radius="130" />
          <ZaCircleProgress v-model="processHarf" :radius="90" />
        </VanCollapseItem>
        <VanCollapseItem title="过滤tab ZaFilterTab" name="3">
          <ZaFilterTab v-model:tagList="fliterTabList" v-model:filter="filter" @current-index="currentIndex">
            <template #filter>
              <h1>筛选内容1</h1>
              <h1>筛选内容2</h1>
            </template>
          </ZaFilterTab>
          <ZaFilterTab v-model:tagList="fliterTabList" />
        </VanCollapseItem>
        <VanCollapseItem title="图片预览 ZaImagesPreview" name="4">
          <ZaImagesPreview :images="images" />
        </VanCollapseItem>
        <!-- <VanCollapseItem title="ZaMap 地图 未完" name="5"> <ZaMap />地图未完 </VanCollapseItem> -->
        <!-- 后面的按照6789等顺序加 -->
        <VanCollapseItem title="粘贴板指令" name="6">
          <div><input v-model="message" /></div>
          <VanButton v-clipboard:copy="message" v-clipboard:success="copy" v-clipboard:error="onError" type="primary">
            拷贝
          </VanButton>
        </VanCollapseItem>
        <VanCollapseItem title="空" name="7">
          <ZaEmpty />
          <ZaEmpty>
            <template #emptyBtn>
              <van-button>你好按钮</van-button>
            </template>
          </ZaEmpty>
        </VanCollapseItem>
        <VanCollapseItem title="tab" name="8">
          <ZaTab :tablist="tabTitleList" :activestyle="'aaa'" sticky>
            <template #1>
              <van-button>你好按钮</van-button>
            </template>
            <template #2>
              <van-button>你好22按钮</van-button>
            </template>
          </ZaTab>
        </VanCollapseItem>
        <VanCollapseItem title="测试登录接口" name="9">
          <ZaTab :tablist="tabTitleList" :activestyle="'aaa'" sticky>
            <template #1>
              <van-button @click="loginClcik">测试登录的按钮</van-button>
            </template>
            <template #2>
              <van-button>你好22按钮</van-button>
            </template>
          </ZaTab>
        </VanCollapseItem>
        <VanCollapseItem title="ZaVoice" name="10">
          <ZaVoice v-model:visible="state.voiceVisible" @record="handleRecord" />
          <div>
            <p>使用注意事项：</p>
            <p>1. record事件会返回url和录音时长</p>
            <p>2. 为兼容微信环境的播放，请使用@/utils/record里的play方法</p>
          </div>
          <van-button @click="handleVoiceClick">打开录音</van-button>
          <br />
          <van-button v-show="state.voiceData.duration" @click="handlePlay">{{ state.voiceData.duration }}s</van-button>
        </VanCollapseItem>
      </VanCollapse>
      <!-- 卡片进度 -->
      <ZaProgressCard :title="title" :unit="unit" :quantification="quantification" :color="progressColor" />
      <!-- 日期选择组件 -->
    </ZaPageWrap>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import ZaMap from '@/components/ZaMap/index.vue';
import { login } from '@/api/modules/article';
import ZaCircleProgress from '@/components/ZaCircleProgress/index.vue';
import ZaSvg from '@/components/ZaSvg/index.vue';
import ZaFilterTab from '@/components/ZaFilterTab/index.vue';
import ZaImagesPreview from '@/components/ZaImagesPreview/index.vue'; // 照片预览
import ZaProgressCard from '@/components/ZaProgressCard/index.vue'; // 照片预览
import ZaEmpty from '@/components/ZaEmpty/index.vue';
import ZaTab from '@/components/ZaTab/index.vue';
import ZaDateChange from '@/components/ZaDateChange/index.vue';
import ZaDatePicker from '@/components/ZaDatePicker/index.vue';
import ZaVoice from '@/components/ZaVoice/index.vue';
import { play } from '@/utils/record';

const activeNames = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
const changeCollapse = (e: string[]) => {
  console.log('changeCollapse:');
  activeNames.value = e;
};

// 半圆进度条 ZaCircleProgress
const process = ref(30);
const processHarf = computed(() => process.value * 0.5);
setTimeout(() => {
  process.value = 90;
}, 2000);

// tab列表
const tabTitleList = ref([
  {
    slotName: '1',
    title: 'index1',
  },
  {
    slotName: '2',
    title: 'index2',
  },
]);

// tagList: [
//   {
//     labelCategoryName: '全部',
//     id: '0',
//   },
// ],
// 过滤tab fliterTabList
const fliterTabList = ref([
  {
    labelCategoryName: '全部',
    id: '1',
  },
  {
    labelCategoryName: '基线回归',
    id: '2',
  },
  {
    labelCategoryName: '众安测试',
    id: '3',
  },
  {
    labelCategoryName: '啦啦',
    id: '4',
  },
  {
    labelCategoryName: '全部是的',
    id: '5',
  },
  {
    labelCategoryName: '哈哈',
    id: '6',
  },
  {
    labelCategoryName: '今日头条',
    id: '7',
  },
  {
    labelCategoryName: '天海测试',
    id: '8',
  },
  {
    labelCategoryName: '测试二',
    id: '9',
  },
]);
const filter = ref(true);

// 图片预览 ZaImagesPreview
const images = ref([
  {
    pictureUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    pictureUrl: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
  },
  {
    pictureUrl: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
  },
  {
    pictureUrl: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
  },
  {
    pictureUrl: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
  },
  {
    pictureUrl: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
  },
]);

// 粘贴板指令
const message = ref('这里是要拷贝的文字');
const copy = (value: { text: string }) => {
  console.log('copy:', value);
  alert('拷贝成功');
};
const onError = () => {
  alert('您的手机不支持粘贴板，请买新手机');
};

// 测试登录
const loginClcik = () => {
  login({
    clientId: 'weixin',
    oauthCode: 'ceshi',
    redirectUri:
      'https%3A%2F%2Frainbow-web-test.zhongan.io%2FarticleDetail%3FatricleId%3DAC20220315173900000000000000000000265001',
  })
    .then((res) => {
      console.log('登录测试结果成功', res);
      alert(res);
    })
    .catch((e) => {
      console.log('接口失败的结果', e);
      alert(e);
    });
};

const title = ref('需求分析');
const unit = ref('次');
const quantification = ref('85/82%');
const progressColor = ref('0, 175, 255');
// 日期选择组件
// defaultActive  day/week/month/year
const defaultActive = ref('week');
const DATE_MAP = ref([
  {
    label: '日',
    value: 'day',
  },
  {
    label: '周',
    value: 'week',
  },
  {
    label: '月',
    value: 'month',
  },
  {
    label: '年',
    value: 'year',
  },
]);

// type可选值：date/year-month/week/year
const state = reactive({
  type: 'date',
  voiceVisible: false,
  voiceData: { duration: '', file: '' },
});

const chooseDate = (value: string) => {
  console.log('click current item is:', value);
  state.type = value;
};
const changeDatePicker = (value: string) => {
  console.log('value:', value);
};

const handleRecord = ({ file, duration }: { file: string; duration: string }) => {
  console.log('file', file);
  console.log('duration', duration);
  state.voiceData.duration = duration;
  state.voiceData.file = file;
};

const handleVoiceClick = () => {
  state.voiceVisible = true;
};

const handlePlay = () => {
  play(state.voiceData.file);
};
</script>

<style lang="scss">
.page-demo {
  padding: 20px 80px;
  .aaa {
    color: blue;
  }
}
</style>
