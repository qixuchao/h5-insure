<template>
  <ProPopup
    v-model:visible="props.modelValue"
    position="bottom"
    round
    :="$attrs"
    pop-class="pro-file-drawer"
    safe-area-inset-bottom
  >
    <van-tabs
      v-model="state.mainIndex"
      title-scroll
      :swipeable="isView"
      title-gutter="10"
      background="#fff"
      name="tabName"
      class="tabs-wrap"
    >
      <template #titles>
        <div
          v-for="(item, i) in state.tabList"
          :key="i"
          class="nut-tabs__titles-item"
          :class="{ active: i === state.mainIndex }"
          @click="() => handleTabChange(i)"
        >
          <span
            :class="{
              'nut-tabs__titles-item__text': true,
              'is-read': !isView && ((item.mustReadTab && item.mustReadFileLen === 0) || item.isRead),
            }"
            >{{ item.tabName }}</span
          >
          <span class="nut-tabs__titles-item__line"></span>
        </div>
      </template>
    </van-tabs>
    <div ref="previewRef" :class="{ contain: true, 'is-expand': !currentTabExpandActive }">
      <div v-if="currentTabExpandActive" class="file-preview-wrap">
        <ProFilePreview v-model="currentTabFileList[0].file" :type="currentTabFileList[0].type" @load="load" />
      </div>
      <div v-else class="attachment-list">
        <div v-for="(file, index) in currentTabFileList" :key="index" class="attachment-list-item">
          <div class="attachment-list-item-name"><span v-if="file.mustRead">*</span> {{ file.name }}</div>
          <van-button
            :class="['read-btn', { 'has-read': file.isRead }]"
            type="primary"
            icon-position="right"
            round
            :is-gradient="false"
            :shadow="false"
            @click="handleReadClick(file, index)"
          >
            {{ file.isRead ? '已阅读' : '请阅读' }}<IconFont v-show="!file.isRead" name="ArrowRight2" color="red" />
          </van-button>
        </div>
      </div>
    </div>
    <div class="footer">
      <div v-if="!isView && isAgreeBtnDisabled" class="footer-tip">
        {{ currentTabExpandActive ? '请逐页阅读至底部' : '请逐个阅读页面文件' }}
      </div>
      <van-button :disabled="isAgreeBtnDisabled" block type="primary" @click="agreeMent">{{ okText }}</van-button>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="proFileDrawer">
import { debounce } from 'lodash-es';
import { withDefaults } from 'vue';

interface FILE {
  name: string;
  file: string;
  type: string;
  mustRead: number;
  isRead?: boolean;
}

interface FileType {
  tabName: string;
  isExpand: boolean;
  mustReadFileLen?: number;
  isRead?: boolean; // 是否读完
  mustReadTab?: boolean; // 是否是必读tab
  files: FILE[];
}
interface ProSelectProp {
  /**
   * 展示和隐藏 输入框的原生 name 属性
   */
  modelValue: boolean;
  /**
   * dataSource Tabs的数据结构
   * tabName tab页签名称
   * isExpand true: 展开(此时只能再files数组长度为一时生效) false 折叠
   * files :
   *  name 文件名称在折叠显示名称
   *  file pdf、图片、外链地址，富文本内容
   *  type 文件类型 pdf:pdf 图片:img 富文本: richText 外链 link
   *  mustRead 是否必读
   */
  dataSource: FileType[];
  /**
   * mustRead  文件阅读是否开启必读 默认不必读
   */
  mustRead: boolean;
  /**
   * isView  只读状态 默认 false
   */
  isView: boolean;
  /**
   * activeIndex  打开第N个Tab的索引
   */
  activeIndex: number;
  /**
   * okText  底部按钮文案
   */
  okText: string;
  /**
   * readType
   */
}

const props = withDefaults(defineProps<ProSelectProp>(), {
  modelValue: false,
  dataSource: () => [],
  mustRead: true,
  activeIndex: 1,
  okText: '确定',
  isView: false,
});

const previewRef = ref();
const emits = defineEmits(['update:modelValue', 'submit', 'clickBtn']);

const state = reactive<{
  subTabIndex: number; // 在每个tab下的第几个文件
  mainIndex: number;
  mainTabIndex: number;
  subIndex: number;
  timer: any;
  formatedContentList: any[];
  tabList: FileType[];
}>({
  mainTabIndex: 0,
  subTabIndex: 0,
  mainIndex: 0,
  subIndex: 0,
  timer: '',
  formatedContentList: [],
  tabList: [],
});

let calculating = true;
let timer = null;
/** *  数据定义 end  */

/** *  computed start  */

// 判断所有tab的必读文件数是否大于0
const isAgreeBtnDisabled = computed(() => {
  return state.tabList?.some((item) => item?.mustReadFileLen > 0);
});

// 当前 tab 下的所有文件列表
const currentTabFileList = computed(() => {
  return state.tabList?.[state.mainIndex]?.files;
});
// 当前 tab 是否是折叠态
const currentTabExpandActive = computed(() => {
  return state.tabList?.[state.mainIndex]?.isExpand;
});

/** *  computed end  */

/** *  业务处理 start  */

/**
 * 点击第几个tab页面的下标
 * @param i
 */
const handleTabChange = (i) => {
  clearTimeout(timer);
  timer = null;
  const tabInfo = state.tabList[state.mainTabIndex];
  // 当离开非必读tab的时候设置成已经阅读
  if (!tabInfo.mustReadTab) {
    tabInfo.isRead = true;
  }
  calculating = true;
  state.mainIndex = i;
  state.subIndex = 0;
  state.mainTabIndex = i;
  state.subTabIndex = 0;
};

/**
 * 给当前文件设置 已读属性，假如都读完毕整个tab设置 已读
 * @param flag 强制设置已读
 * @param i 当前tab下的第几个文件
 * @param isScorll 是否滚动事件触发
 */
const setReadFileByIndex = (flag = false, i = state.subTabIndex, isScorll = false) => {
  console.log('state.mainTabIndex', state.mainTabIndex, 'i=', i);
  // 查询出当前文件信息
  const file = state.tabList[state.mainTabIndex].files[i];
  // 没有读过、且必读文件(在确保必读文件数量是否大于0，其实可以不判断)
  if (!file.isRead && file.mustRead && state.tabList[state.mainTabIndex].mustReadFileLen > 0) {
    state.tabList[state.mainTabIndex].mustReadFileLen -= 1;
    file.isRead = true;
  }
  // 当滚动的文件不是必读文件是也打上已读标记
  if (isScorll && !file.mustRead) {
    state.tabList[state.mainTabIndex].isRead = true;
    file.isRead = true;
  }
  if (flag) {
    file.isRead = true;
  }
  const tabComplate = state.tabList[state.mainTabIndex].files.every((item) => item?.isRead);
  console.log(tabComplate, 'tabComplate');
  if (state.tabList?.[state.mainTabIndex]?.files?.length === 1 || tabComplate) {
    state.tabList[state.mainTabIndex].isRead = true;
  }
};

/**
 * 读到最后一个文件，还没读完，设置前面第一个未读到的文件
 */
const findFirstMustReadFile = () => {
  let mainIndex = 0;
  let subIndex = 0;
  state.tabList.some((item, i) => {
    if (item.mustReadFileLen > 0) {
      mainIndex = i;
      subIndex = item.files.findIndex((field) => field.mustRead && !field.isRead);
      return true;
    }
    return false;
  });
  state.mainTabIndex = mainIndex;
  state.subTabIndex = subIndex;
};

/**
 * 计算下一个强校验的文件
 */
const nextFile = () => {
  state.subTabIndex += 1;
  // 当前tab的最后一个文件是，自定切道下一个tab
  if (state.tabList[state.mainTabIndex].files?.length <= state.subTabIndex) {
    state.mainTabIndex += 1;
    state.subTabIndex = 0;
  }
  // 已经走到最后一个tab之后
  if (state.tabList.length <= state.mainTabIndex) {
    // 当还存在没有读的文件时,说明必读文件在前面得去遍历
    if (isAgreeBtnDisabled.value) {
      findFirstMustReadFile();
    } else {
      // 都读完了，最后切道最后一个tab的，最后一个文件
      state.mainTabIndex = state.tabList.length - 1;
      state.subTabIndex = state.tabList[state.mainTabIndex].files.length - 1;
    }
    // 设置下标
    state.mainIndex = state.mainTabIndex;
    state.subIndex = state.subTabIndex;
    nextTick(() => {
      calculating = true;
    });
    return;
  }
  const file = state.tabList?.[state.mainTabIndex]?.files?.[state.subTabIndex];
  // 当下一个文件是已读或者非必读文件跳过
  if (file?.isRead || !file?.mustRead) {
    // 这个可以决定要不要给非必读跳过的文件设置必读属性
    setReadFileByIndex();
    isAgreeBtnDisabled.value && nextFile();
  } else {
    // 没读过的文件，或者文件
    state.mainIndex = state.mainTabIndex;
    state.subIndex = state.subTabIndex;
    nextTick(() => {
      calculating = true;
    });
  }
};

/**
 * 点击tab页面折叠态按钮的抛“clickBtn”事件给外部
 * @param file 文件信息
 * @param file 下标
 */
const handleReadClick = (file: FILE, i: number) => {
  clearTimeout(state.timer);
  state.timer = null;
  if (!props.isView) {
    state.subTabIndex = i;
    state.subIndex = i;
    emits('clickBtn', file, () => {
      setReadFileByIndex(true, i);
      nextTick(() => {
        nextFile();
      });
    });
  }
};

/**
 * 滚动事件触底监听
 */
const handleScroll = debounce((el: any) => {
  if (el) {
    const scrollHeight = el.target?.scrollHeight || el.scrollHeight;
    const scrollTop = el.target?.scrollTop || el.scrollTop;
    const clientHeight = el.target?.clientHeight || el.clientHeight;
    console.log(
      'mainIndex=',
      state.mainIndex,
      'subIndex=',
      state.subIndex,
      'mainTabIndex=',
      state.mainTabIndex,
      'subTabIndex=',
      state.subTabIndex,
      Math.floor(scrollHeight - scrollTop - 15) < clientHeight && calculating,
    );
    if (Math.floor(scrollHeight - scrollTop - 15) < clientHeight && calculating) {
      // 没有读完的文件才可以跳转
      calculating = false;
      state.mainTabIndex = parseInt(state.mainIndex.toString(), 10);
      state.subTabIndex = state.subIndex;
      // 标记已读
      setReadFileByIndex(false, state.subTabIndex, true);
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        nextFile();
        // console.log('滑倒底部了readCount.value', state.mainIndex, 'state.subIndex', state.subIndex);
        el.target.scrollTop = 0;
      }, 600);
    }
  }
}, 600);

/**
 * 文件资源加载完毕后的回调
 */
const load = (type: string) => {
  if (!props.isView) {
    // 加入是外链展示，直接设置已读
    if (type === 'isLink') {
      state.mainTabIndex = state.mainIndex;
      state.subTabIndex = state.subIndex;
      // console.log('我跳出页面了');
    } else if (currentTabExpandActive.value && isAgreeBtnDisabled) {
      // 折叠不进行监听 或者必读已经读完
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        if (previewRef.value) {
          previewRef.value.scrollTop = 0;
          previewRef.value.removeEventListener('scroll', handleScroll);
          handleScroll(previewRef.value);
          previewRef.value.addEventListener('scroll', handleScroll);
        }
      }, 200);
    }
  }
};
const handleClose = () => {
  emits('update:modelValue', false);
};

const agreeMent = () => {
  handleClose();
  if (props.isView) return;
  emits('submit');
};

const init = () => {
  props.dataSource.forEach((item: FileType) => {
    // 设置强制阅读个数 当设置不强制阅读是 为 0
    const len = props.mustRead ? item?.files?.filter((node: FILE) => node.mustRead)?.length || 0 : 0;
    // 当文件数量大于1的时候，强制将展开属性改为折叠；
    let { isExpand } = item;
    if (isExpand && item?.files?.length > 1) {
      isExpand = false;
    }
    state.tabList.push({
      ...item,
      isExpand,
      isRead: false,
      mustReadTab: len > 0,
      mustReadFileLen: len || 0,
      files: item?.files?.map((file: FILE) => {
        // 设置是否阅读标识
        return { ...file, isRead: false };
      }),
    }) || [];
  });
};

/** *  业务处理 end  */

watch(
  props.dataSource,
  debounce((val) => {
    if (val && val.length > 0) {
      init();
    }
  }, 500),
  { deep: true, immediate: true },
);

watch(
  [() => props.modelValue, () => props.activeIndex, () => props.isView],
  debounce((val) => {
    if (val) {
      state.mainIndex = props.isView ? props.activeIndex : 0;
      state.mainTabIndex = 0;
    }
  }, 500),
  { immediate: true },
);
</script>

<style lang="scss">
.pro-file-drawer {
  height: 1126px;

  .nut-tabs {
    .nut-tabs__titles {
      height: 106px;
      padding-left: var(--zaui-space-lg);
      .nut-tabs__titles-item {
        margin-right: 40px;

        .nut-tabs__titles-item__text {
          height: 42px;
          font-size: var(--zaui-text-lmd);
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          color: #393d46;
          position: relative;
          line-height: 42px;
          &::before {
            position: absolute;
            right: -25px;
            top: 0;
            display: block;
            content: '';
            width: 0;
            height: 0;
            background: url('@/assets/images/isRead.png') no-repeat;
            background-size: contain;
            transition: all 0.6s;
          }

          &.is-read::before {
            width: 22px;
            height: 22px;
          }
        }

        &.active .nut-tabs__titles-item__text {
          font-weight: 500;
          color: var(--zaui-brand);
        }
        .nut-tabs__titles-item__line {
          bottom: 0px;
          width: 60px;
        }
      }
    }

    .nut-tabs__content {
      .nut-tab-pane {
        background: #fbfbfb;
        padding: 0;
      }
    }
  }

  .contain {
    padding: 32px 36px 0;
    &.is-expand {
      padding-top: 0;
    }
    height: 900px;
    overflow-y: auto;
    .file-preview-wrap {
      height: 901px;
    }

    .attachment-list {
      .attachment-list-item {
        border-bottom: 1px solid #eee;
        line-height: 45px;
        padding: 30px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .attachment-list-item-name {
          font-size: 32px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          span {
            color: red;
          }
        }

        .read-btn {
          width: 146px;
          height: 62px;
          box-sizing: content-box;
          flex-grow: 0;
          flex-shrink: 0;
          padding: 0;

          &.has-read {
            background-color: #bcbcbc;
            border-color: #bcbcbc;
          }

          .van-icon-arrow:before {
            color: #fff;
            font-weight: 600;
          }

          .van-button__text {
            height: 40px;
            font-size: 28px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ffffff;
            line-height: 40px;
          }
        }
      }
    }

    .item {
      height: 100%;

      .com-file-preview {
        .pic-wrap {
          padding: 30px 0;
          img {
            max-width: 100%;
            height: initial;
          }
        }
        .pdf-wapper {
          height: 100%;

          .viewerContainer {
            height: 100%;
            // .pinch-zoom-container {
            //   height: 50% !important;
            // }
          }
        }

        .content {
          min-height: 940px;
        }
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 var(--zaui-brand);
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #ffffff;
    z-index: 1;
    padding: 16px 20px;
    position: relative;

    &-tip {
      &::after {
        display: block;
        position: absolute;
        content: '';
        width: 18px;
        height: 18px;
        left: calc(50% - 10px);
        background: #ed785a;
        transform: rotate(-45deg);
        border-radius: 2px;
      }
      position: absolute;
      left: 50%;
      top: -68px;
      padding: 10px 40px;
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      border-radius: 27px;
      color: #ffffff;
      height: 54px;
      transform: translateX(-50%);
      background: #ed785a;
    }

    .pro-shadow-button {
      width: 100%;
      height: 88px;
    }
    .van-button {
      font-size: 34px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 48px;
    }
  }
}
</style>
