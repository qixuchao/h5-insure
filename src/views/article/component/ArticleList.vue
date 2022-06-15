<template>
  <div class="com-article-list">
    <van-pull-refresh v-model="refreshing" @refresh="onrefresh">
      <van-list v-model:loading="loading" :finished="finished" finished-text="- 没有更多了 -" @load="onloadClick">
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <div v-for="(item, index) in articlelist" :key="index" class="article-list-item" @click="onArticleClick(item)">
          <div class="item-left">
            <div class="article-title">{{ item.title }}</div>
            <div class="article-small-tag">
              <div class="small-tag-left"><ZaSvg name="eyes" class="eyes" />{{ `${item.totalHeat} 阅读` }}</div>
              <div class="small-tag-out">
                <div
                  v-for="(tagItem, tagIndex) in item.labelCategory?.infoLabelDTOList.slice(0, 2) || []"
                  :key="`${index}-${tagIndex}`"
                  class="tag-div"
                >
                  <div class="tag-text">
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
          <div class="list-item-img"><img :src="item.coverImage" alt="" /></div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup>
const articleListEmits = defineEmits(['on-article-click', 'on-refresh', 'on-load', 'update:status']);

const prop = defineProps({
  articlelist: {
    type: Array,
    default: () => [],
  },
  status: {
    type: Object,
    default: () => {},
  },
});

const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

watch(
  () => prop.status,
  (newValue, oldValue) => {
    loading.value = newValue.loading;
    finished.value = newValue.finished;
    refreshing.value = newValue.refreshing;
  },
  {
    immediate: true,
    deep: true,
  },
);

watch([loading, finished, refreshing], (newValue, oldValue) => {
  articleListEmits('update:status', newValue);
});
const onArticleClick = (item: object) => {
  articleListEmits('on-article-click', item);
};
const onrefresh = () => {
  articleListEmits('on-refresh');
};
const onloadClick = () => {
  articleListEmits('on-load');
};
</script>

<style lang="scss" scoped>
.com-article-list {
  margin: 30px;
  margin-top: 0;
  .article-list-item {
    border-bottom: 1px solid #f4f5f7;
    width: 100%;
    padding: 30px 0;
    // margin-bottom: 20px;
    display: flex;
    align-items: center;
    .item-left {
      margin-right: 22px;
      width: 100%;
      .article-title {
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
      }
      .article-small-tag {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .small-tag-left {
          height: 24px;
          font-size: $zaui-font-size-sm;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #b38e57;
          line-height: 24px;
          align-items: center;
          display: flex;
          .eyes {
            width: 30px;
            height: 28px;
            margin-right: 5px;
          }
        }
        .small-tag-out {
          display: flex;
          .tag-div:first-child {
            background: rgba(255, 43, 31, 0.06);
            .tag-text {
              color: $primary-color;
            }
          }
          .tag-div {
            margin-left: 16px;
            height: 40px;
            background: #ffeee7;
            border-radius: 8px;
            padding: 5px 12px;
            .tag-text {
              height: 30px;
              font-size: $zaui-font-size-sm3;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #ff6600;
              line-height: 30px;
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
    .list-item-img {
      width: 196px;
      height: 150px;
      img {
        width: 196px;
        height: 150px;
        border-radius: 20px;
      }
    }
  }
  .article-list-item:first-child {
    padding-top: 18px;
  }
}
</style>
