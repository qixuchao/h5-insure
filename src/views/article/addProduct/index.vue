<template>
  <ZaPageWrap main-class="page-addProduct" footer-class="footer-class">
    <div>
      <div class="add-product-top">
        <van-search
          v-model="SearchValue"
          shape="round"
          show-action
          :left-icon="getIconUrl('target.searchImg')"
          placeholder="请输入关键词"
          class="search"
          @cancel="onCancel"
          @update:model-value="updataSearchValue"
          @search="onSearch"
        />
      </div>
      <div class="add-product-mid">
        <div class="article-tag">
          <div
            v-for="(item, index) in tagList"
            :key="index"
            class="tag-item"
            :class="{ checked: indexCheck == index }"
            @click="onClickTag(item.categoryCode, index)"
          >
            <div class="tag-out" :class="{ checked: indexCheck == index }">
              <div class="tag-item-text" :class="{ checked: indexCheck == index }">{{ item.categoryName }}</div>
            </div>
            <div class="trianele-out"><div :class="{ triangle: indexCheck == index }"></div></div>
          </div>
        </div>
      </div>
      <div class="add-product-bottom">
        <div v-if="productList?.length > 0" class="product-list">
          <div
            v-for="(item, index) in productList"
            :key="index"
            class="product-item"
            @click="onClickProduct(item, index)"
          >
            <img
              v-show="checkedList.includes(item.productCode)"
              :src="getIconUrl('article.checked')"
              alt=""
              class="check-image"
            />
            <div class="item-left">
              <div class="image-tag">
                <div class="img-tag-text">
                  {{
                    item?.productImgText
                      ? item?.productImgText.length > 5
                        ? `${item.productImgText.slice(0, 5)}...`
                        : item.productImgText
                      : ''
                  }}
                </div>
              </div>
              <img :src="item.productImg" alt="" class="product-img" />
            </div>
            <div class="item-right">
              <div class="right-toptwo">
                <div class="right-top">{{ item.productName }}</div>
                <div class="right-mid">{{ item.productSummary }}</div>
              </div>

              <div class="right-bottom">
                <div class="product-tag">
                  <div
                    v-for="(tagItem, tagIndex) in item.productLabel ? item.productLabel.slice(0, 2) : []"
                    :key="tagIndex"
                    class="tag-item"
                  >
                    <div class="tag-text">{{ tagItem }}</div>
                  </div>
                  <div v-show="item.productLabel ? item.productLabel.length > 2 : false" class="shenglvhao">
                    <div class="shenglvhao-item"></div>
                    <div class="shenglvhao-item"></div>
                    <div class="shenglvhao-item"></div>
                  </div>
                </div>
                <div class="product-price">
                  <span class="price-num">{{ parseFloat(item.productPrice) }}</span>
                  <span class="price-text">元起</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ZaEmpty v-else class="empty" title="暂无产品" />
      </div>
    </div>
    <!-- <template #footer>
      <div class="footer-div">
        <van-button round class="btn" @click="handleSubmit">{{ `确定·已选${checkedList.length}个` }}</van-button>
      </div>
    </template> -->
  </ZaPageWrap>
  <div class="footer-out">
    <div class="footer-div">
      <van-button round class="btn" @click="handleSubmit">{{ `确定·已选${checkedList.length}个` }}</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import _ from 'lodash';
import Storage from '@/utils/storage';
import { getProductList, getProductCategory } from '@/api/modules/article';
import { useThemesStore } from '@/store/themes';
import ZaEmpty from '@/components/ZaEmpty/index.vue';

const { getIconUrl } = useThemesStore();
const history = useRouter();
const route = useRoute();
const storage = new Storage({ source: 'localStorage' });

const tagList: any = reactive([]);
const indexCheck = ref(0);
const productList = ref([]);
const checkedList = reactive([]); // 存放以选择的产品序号
const checkedProductList: Array<any> = reactive([]); // 存放已选择的产品数据
const productCategory = ref(''); // 搜索关键code
const SearchValue = ref(''); // 搜索关键词

const ischecked = ref(false);

const getData = () => {
  getProductList({
    productCategory: productCategory.value,
    keyword: SearchValue.value,
  })
    .then((res) => {
      console.log(res, 'ONSEARCH');
      productList.value = res.data.data;
    })
    .catch((e) => {
      Toast.fail('查询失败');
      console.log(e);
    });
};
const onClickTag = (code, index) => {
  indexCheck.value = index;
  console.log(code, index, 'tag>>>>');
  productCategory.value = code;
  getData();
};
const updataSearchValue = (val: string) => {
  console.log(SearchValue.value, 'input');
  SearchValue.value = val;
};
const onCancel = () => {
  getData();
};
const onSearch = (val: string) => {
  getData();
};
const handleSubmit = () => {
  console.log('submit>>>>>>', checkedProductList);
  storage.set('choosePorList', checkedProductList);
  storage.set('chooseCheckedList', checkedList);
  history.back();
};

const onClickProduct = (item: any, index: number) => {
  if (!checkedList.includes(item.productCode)) {
    if (checkedList.length > 2) {
      Toast('最多只能选择三个产品');
    } else {
      checkedList.push(item.productCode);
      checkedProductList.push(item);
    }
  } else {
    const num = checkedList.indexOf(item.productCode);
    checkedList.splice(num, 1);
    checkedProductList.splice(num, 1);
  }
  console.log('选择完成后', item.productCode, checkedList, checkedProductList);
};

// onActivated(() => {
//   if (storage.get('article-detail-proList')) {
//     checkedProductList.splice(0, checkedProductList.length);
//     checkedList.splice(0, checkedList.length);
//     checkedProductList.push(...storage.get('article-detail-proList'));
//     checkedProductList.forEach((e) => {
//       checkedList.push(e.productId);
//     });
//   }
//   storage.remove('article-detail-proList');
// });
onMounted(() => {
  if (storage.get('article-detail-proList')) {
    checkedProductList.splice(0, checkedProductList.length);
    checkedList.splice(0, checkedList.length);
    checkedProductList.push(...storage.get('article-detail-proList'));
    checkedProductList.forEach((e) => {
      checkedList.push(e.productCode);
    });
  }
  storage.remove('article-detail-proList');
  getProductCategory({})
    .then((res) => {
      tagList.push({ categoryCode: '', categoryName: '全部' }, ...res.data.data);
      console.log(tagList, 'tagList');
      if (tagList.length !== 0) {
        productCategory.value = tagList[0].categoryCode;
        getProductList({
          productCategory: tagList[0].categoryCode,
        })
          .then((productres) => {
            console.log('product>>', productres);
            productList.value = productres.data.data;
          })
          .catch((pe) => {
            console.log(pe);
            Toast.fail('查询产品失败');
          });
      }
    })
    .catch((e) => {
      Toast.fail('查询分类失败');
      console.log(e);
    });
});
</script>

<style lang="scss" scoped>
.page-addProduct {
  .add-product-top {
    .search {
      padding-bottom: 20px;
    }
  }
  .add-product-mid {
    padding: 0 30px;

    .article-tag::-webkit-scrollbar {
      height: 0;
    }
    .article-tag {
      display: flex;
      width: 100%;
      height: 70px;
      padding-bottom: 24px;
      overflow: auto;
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
            margin-top: -2px;
            border-left: 18px solid transparent;
            border-right: 18px solid transparent;
            border-top: 14px solid $primary-color;
          }
        }

        .tag-out:last-child {
          margin-right: 0;
        }
        .tag-out {
          height: 50px;
          margin-right: 20px;
          padding: 12px 34px;
          background: #f4f5f7;
          border-radius: 25px;
          &.checked {
            background: $btn-background;
          }
          .tag-item-text {
            height: 26px;
            color: #959595;
            font-weight: 500;
            font-size: $zaui-font-size-md;
            font-family: PingFangSC-Medium, PingFang SC;
            line-height: 26px;
            &.checked {
              color: #ffffff;
            }
          }
        }
      }
    }
  }
  .add-product-bottom {
    .empty {
      margin-top: 150px;
    }
    .product-list {
      padding: 10px 30px 30px 30px;
      .product-item {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 266px;
        margin-bottom: 20px;
        padding: 30px 30px 30px 20px;
        background: #fafafd;
        border-radius: 20px;
        .check-image {
          position: absolute;
          top: 0;
          right: 0;
          width: 39px;
          height: 40px;
        }
        .item-left {
          margin-right: 16px;
          .image-tag {
            width: 178px;
            height: 44px;
            padding-top: 6px;
            text-align: center;
            background: #ffa5a5;
            border-radius: 8px 8px 0 0;
            .img-tag-text {
              height: 33px;
              color: #ffffff;
              font-weight: 600;
              font-size: $zaui-font-size-sm;
              font-family: PingFangSC-Semibold, PingFang SC;
              line-height: 33px;
              text-shadow: 0px 1px 2px rgba(220, 0, 0, 0.5);
            }
          }
          .product-img {
            width: 178px;
            height: 161px;
            border-radius: 0 0 8px 8px;
          }
        }
        .item-right {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .right-toptwo {
            .right-top {
              display: -webkit-box;
              // height: 84px;
              margin-bottom: 11px;
              overflow: hidden;
              color: #343434;
              font-weight: 500;
              font-size: $zaui-font-size-md2;
              font-family: PingFangSC-Medium, PingFang SC;
              line-height: 42px;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .right-mid {
              display: -webkit-box;
              height: 33px;
              // margin-bottom: 34px;
              margin-top: 11px;
              overflow: hidden;
              color: #909090;
              font-weight: 400;
              font-size: $zaui-font-size-sm;
              font-family: PingFangSC-Regular, PingFang SC;
              line-height: 33px;
              text-overflow: ellipsis;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
          }

          .right-bottom {
            display: flex;
            justify-content: space-between;
            .product-tag {
              display: flex;
              .tag-item {
                height: 40px;
                margin-right: 16px;
                padding: 5px 12px;
                background: #ffeee7;
                border-radius: 8px;
                .tag-text {
                  height: 30px;
                  color: #ff6600;
                  font-weight: 400;
                  font-size: $zaui-font-size-md;
                  font-family: PingFangSC-Regular, PingFang SC;
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
            .product-price {
              .price-num {
                height: 40px;
                color: #ea4742;
                font-weight: normal;
                font-size: 40px;
                font-family: Arial-BoldMT, Arial;
                line-height: 40px;
              }
              .price-text {
                height: 24px;
                color: #ea4742;
                font-weight: 400;
                font-size: $zaui-font-size-sm;
                font-family: PingFangSC-Regular, PingFang SC;
                line-height: 24px;
              }
            }
          }
        }
      }
    }
  }
}
.footer-out {
  position: sticky;
  bottom: 0;
  .footer-div {
    width: 100%;
    height: 149px;
    padding: 30px;
    text-align: center;
    background: #ffffff;
    box-shadow: 0px -2px 10px 0px #f6f6f6;
    .btn {
      width: 100%;
      height: 90px;
      background: $btn-background;
      border-radius: 45px;
      --van-button-default-color: #ffffff;
      --van-button-default-font-size: $zaui-font-size-lg;
      // .van-button__content {
      ::v-deep .van-button__text {
        font-weight: bold;
      }
      // }
    }
  }
}
</style>
