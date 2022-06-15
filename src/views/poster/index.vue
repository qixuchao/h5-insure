<template>
  <div class="poster-list">
    <ZaFilterTab :tag-list="tagList" :filter="true" @current-index="onClickTag"> </ZaFilterTab>
    <div class="imgs-wrap">
      <div v-if="dataList.length">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-row gutter="15">
            <van-col v-for="(item, i) in dataList" :key="i" span="8" @click="handleDetail(i)">
              <div class="post-item" :style="{ backgroundImage: `url(${item.posterUrlShort})` }"></div>
            </van-col>
          </van-row>
        </van-list>
      </div>
      <div v-else class="empth">
        <img src="@/assets/images/customer/empth.png" alt="" />
        <p>暂时没有海报哦</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { searchPoster, querySingleList } from '../../api/modules/poster';
import ZaFilterTab from '../../components/ZaFilterTab/index.vue';

const loading = ref(false);
const finished = ref(false);
const checkedCode = ref('0');
const pageN = ref(1);
const info = reactive({
  dataList: [] as any,
  tagList: [
    {
      labelCategoryName: '热门推荐',
      id: '0',
    },
  ],
});
const { dataList, tagList } = toRefs(info);

const history = useRouter();

const getData = async (params?: any, pageNum = 1, pageSize = 12) => {
  finished.value = false;
  const { data } = await searchPoster({
    pageNum,
    pageSize,
    queryBean: {
      ...params,
    },
  });
  pageN.value = pageNum;
  const { total } = data.data;
  loading.value = false;

  dataList.value = [...dataList.value, ...data.data.list];
  sessionStorage.setItem('p_list', JSON.stringify(dataList.value));
  if (checkedCode.value === '0') {
    finished.value = true;
  } else {
    if (total <= dataList.value.length) {
      finished.value = true;
    }
  }
};
const getTag = async () => {
  const { data } = await querySingleList({ dictCode: 'POSTER_CATEGORY' });
  let arr = [];
  arr = data.data.map((item: { itemName: any; itemCode: any }) => {
    return { labelCategoryName: item.itemName, id: item.itemCode };
  });
  tagList.value = tagList.value.concat(arr);
};
onMounted(async () => {
  getData({ isRecommend: 'Y' });
  getTag();
});

const onLoad = () => {
  getData({ posterCategory: checkedCode.value === '0' ? undefined : checkedCode.value }, pageN.value + 1);
};

const handleDetail = (index: any) => {
  sessionStorage.setItem('p_index', index);
  history.push({ name: 'posterDetail' });
};

const onClickTag = (code: string, index: number) => {
  checkedCode.value = code;
  dataList.value = [];
  pageN.value = 1;
  getData({ posterCategory: code === '0' ? undefined : code });
};
</script>

<style lang="scss">
.poster-list {
  padding-top: 75px;

  .imgs-wrap {
    padding: 45px 30px;
  }
  .empth {
    margin-top: 200px;
    color: #333;
    text-align: center;
    img {
      width: 200px;
      margin-bottom: 68px;
    }
  }
  .van-col {
    margin-bottom: 30px;
  }
  .post-item {
    width: 210px;
    height: 373px;
    line-height: 373px;
    text-align: center;
    border-radius: 12px;
    background-color: rgba(164, 164, 164, 0.29);
    box-shadow: 0 2px 10px 0 #dedede;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .v-pop {
    width: 600px;
    height: 100%;
    padding: 104px 26px 0 34px;
    .flex {
      display: flex;
      flex-wrap: wrap;
      margin-top: 24px;
    }
    .box {
      width: 160px;
      height: 60px;
      border-radius: 8px;
      border: 2px solid #e0e0e0;
      font-size: $zaui-font-size-md;
      color: #616161;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      margin-bottom: 20px;
    }
    .checked {
      border: 2px solid $primary-color;
      color: $primary-color;
      font-weight: 500;
    }
  }

  .article-mid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 30px 0 10px 30px;
    display: flex;
    align-items: center;
    .article-tag::-webkit-scrollbar {
      height: 0;
    }
    .article-tag {
      overflow: auto;
      display: flex;
      width: 100%;
      height: 70px;
      padding-bottom: 24px;
      white-space: nowrap;

      .tag-item {
        // position: relative;
        // text-align: center;
        .trianele-out {
          display: flex;
          justify-content: center;
          padding-right: 20px;
          .triangle {
            width: 0;
            height: 0;
            border-left: 17px solid transparent;
            border-right: 17px solid transparent;
            border-top: 15px solid $primary-color;
          }
        }

        .tag-out:last-child {
          margin-right: 0;
        }
        .tag-out {
          height: 50px;
          background: #f4f5f7;
          border-radius: 25px;
          padding: 12px 34px;
          margin-right: 20px;
          &.checked {
            background: $btn-background;
          }
          .tag-item-text {
            height: 26px;
            font-size: $zaui-font-size-md;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #959595;
            line-height: 26px;
            &.checked {
              color: #ffffff;
            }
          }
        }
      }
    }
    .divider {
      width: 16px;
      height: 40px;
      background: linear-gradient(90deg, rgba(226, 226, 226, 0) 0%, rgba(168, 168, 168, 0.52) 100%);
      margin-right: 9px;
      margin-bottom: 20px;
    }
    .screen-area {
      display: flex;
      align-items: center;
      margin-right: 30px;
      padding-bottom: 20px;
      .screen-text {
        width: 50px;
        height: 33px;
        font-size: $zaui-font-size-sm;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: $primary-color;
        line-height: 33px;
        margin-right: 10px;
      }
      .screen-img {
        width: 22px;
        height: 24px;
      }
    }
  }
}
</style>
