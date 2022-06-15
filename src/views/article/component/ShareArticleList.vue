<template>
  <div v-for="(item, index) in sharelist" :key="index" class="share-list-item" @click="goHandle(item)">
    <div class="share-list-item-left">
      <div class="share-left-title">{{ item.title }}</div>
      <div class="share-left-bottom">
        <div v-if="isShare" class="share-visitor">
          {{ stringFun(item.visitorVO?.wechatNickname) || '' }}
          {{ stringFun(item.visitorVO?.wechatNickname) ? `等` : '' }}<span>{{ item.visitorTotal || 0 }}</span
          >人来访
        </div>
        <div v-else class="read-number-area">
          <ZaSvg name="eyes" class="eyes" />
          {{ `${item.totalHeat}阅读` }}
        </div>
        <div class="share-tag-out">
          <div
            v-for="(tagItem, tagIndex) in item.labelCategory?.infoLabelDTOList.slice(0, 2) || []"
            :key="`${index}-${tagIndex}`"
            class="share-tag-item"
          >
            <div class="share-tag-text">
              {{
                tagItem.labelName && tagItem.labelName.length > 4
                  ? `${tagItem.labelName.slice(0, 4)}..`
                  : tagItem.labelName || ''
              }}
            </div>
          </div>
          <div v-show="item.labelCategory?.infoLabelDTOList.length > 2" class="shenglvhao">
            <div class="shenglvhao-item"></div>
            <div class="shenglvhao-item"></div>
            <div class="shenglvhao-item"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="share-article-image"><img :src="item.coverImage" alt="" /></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  sharelist: {
    type: Array,
    default: () => [],
  },
  isShare: {
    type: Boolean,
    default: false,
  },
});

const shareArticleListEmits = defineEmits(['on-goclick']);

const stringFun = (str: string) => {
  return str && (str.length > 3 ? `${str.slice(0, 4)}..` : str);
};

const goHandle = (item: any) => {
  shareArticleListEmits('on-goclick', item);
};
</script>

<style lang="scss" scoped>
.share-list-item {
  width: 100%;
  // height: 188px;
  // background: #fbfbfb;
  border-bottom: 1px solid #f4f5f7;
  border-radius: 8px;
  display: flex;
  padding: 30px 0;
  // margin-bottom: 20px;
  .share-list-item-left {
    margin-right: 22px;
    width: 100%;
    .share-left-title {
      height: 84px;
      font-size: $zaui-font-size-md;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #343434;
      line-height: 42px;

      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 14px;
    }
    .share-left-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .share-visitor {
        height: 24px;
        font-size: $zaui-font-size-sm;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #b38e57;
        line-height: 24px;
      }
      .read-number-area {
        align-items: center;
        display: flex;
        .eyes {
          width: 30px;
          height: 30px;
          margin-right: 7px;
        }
        // height: 24px;
        font-size: $zaui-font-size-sm;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #b38e57;
        line-height: 24px;
      }
      .share-tag-out {
        display: flex;
        .share-tag-item {
          margin-left: 14px;
          height: 40px;
          background: #ffeee7;
          border-radius: 8px;
          padding: 5px 12px;
          .share-tag-text {
            height: 30px;
            font-size: $zaui-font-size-sm3;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #ff6600;
            line-height: 30px;
            white-space: nowrap;
          }
        }
        .share-tag-item:first-child {
          background: rgba(255, 43, 31, 0.06);
          .share-tag-text {
            color: $primary-color;
          }
        }
        .shenglvhao {
          margin-left: 6px;
          display: flex;
          .shenglvhao-item {
            margin-top: 37px;
            width: 3px;
            height: 3px;
            background: #b38e57;
            border-radius: 50%;
            margin-right: 3px;
          }
          .shenglvhao-item:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  .share-article-image {
    width: 196px;
    height: 150px;
    img {
      width: 196px;
      height: 150px;
      border-radius: 12px;
    }
  }
}
</style>
