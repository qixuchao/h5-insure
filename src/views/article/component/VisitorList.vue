<template>
  <div v-for="(item, index) in visitorslist" :key="index" class="visitor-list-item">
    <div class="item-top" :class="{ active: !checkList.includes(index) }">
      <div class="item-right-content">
        <div class="content-top" @click="onVisitClick(item)">
          <div class="top-left">
            <img :src="item.wechatImageUrl" alt="" class="head-image" />
            <div class="name-area">
              <div class="top-name">{{ item.relatedCustomerId ? item.relatedCustomerName : item.wechatNickname }}</div>
              <div class="top-check-times">
                累计访问<span>{{ item.visitContentCount || 0 }}</span
                >次
              </div>
            </div>
          </div>
          <div class="time">
            <div class="time-text">{{ item.visitDateTimeStr }}</div>
            <img :src="getIconUrl('article.rightImg')" alt="" class="time-right-img" />
          </div>
        </div>
        <div class="content-mid">
          <div class="triangle"></div>
        </div>
        <div class="content-bottom">
          <div class="content-bottom-top">
            <div class="title-name">{{ `阅读爆文  《 ${item.lastVisitContentTitle} 》` }}</div>
            <div class="spread">
              <div class="spread-inner" @click.stop="onDownClick(index)">
                <span class="spread-text">
                  经过了<span>{{ item.visitorVOList.length - 1 || 0 }}</span
                  >次传播
                </span>
                <img
                  v-show="!checkList.includes(index)"
                  :src="getIconUrl('article.downImg')"
                  alt=""
                  class="down-image"
                  :class="{ active: checkList.includes(index) }"
                />
              </div>
            </div>
            <img v-show="!checkList.includes(index)" :src="getIconUrl('article.lineImg')" alt="" class="right-line" />
          </div>
          <div v-show="checkList.includes(index)" class="item-bottom">
            <div class="road-list">
              <div
                v-for="(roadItem, roadIndex) in item.visitorVOList"
                :key="`${index}-${roadIndex}`"
                class="road-list-item"
              >
                <div class="road-item-left">
                  <img
                    v-if="roadIndex == 0 || item.visitorVOList.length - 1 === roadIndex"
                    :src="
                      roadIndex == 0
                        ? getIconUrl('article.firstImg')
                        : item.visitorVOList.length - 1 === roadIndex
                        ? getIconUrl('article.endImg')
                        : null
                    "
                    alt=""
                    class="road-left-image"
                  />
                  <div v-else class="road-left-div"><div class="point"></div></div>
                  <div v-show="item.visitorVOList.length - 1 !== roadIndex" class="line"></div>
                </div>
                <div class="road-item-right">
                  <img :src="roadItem.wechatImageUrl" alt="" class="road-image" />
                  <div class="road-name">{{ roadItem.wechatNickname }}</div>
                </div>
              </div>
            </div>
            <div class="pick-up" @click="onDownClick(index)">
              <div class="text">收起传播</div>
              <img :src="getIconUrl('article.downImg')" alt="" class="pick-img" />
            </div>
            <img v-show="checkList.includes(index)" :src="getIconUrl('article.lineImg')" alt="" class="right-line" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const history = useRouter();

const props = defineProps({
  visitorslist: {
    type: Array,
    default: () => [],
  },
});

const cloneList = reactive(props.visitorslist);
const checkList = reactive([]);

// const ImgChoose = computed(() => {
//     return count.value * 2
//   })

const onDownClick = (i: number) => {
  if (checkList.includes(i)) {
    checkList.splice(checkList.indexOf(i), 1);
  } else {
    checkList.push(i);
  }
};
const onVisitClick = (item: any) => {
  // console.log(item);
  if (item.relatedCustomerId) {
    console.log('我已经关联了');
    history.push({
      name: 'customerDetail',
      query: {
        agentCustomerId: item.relatedCustomerId,
        customerType: item.relatedCustomerType,
        // isVisit: 'Y',
      },
      hash: '#1',
    });
  } else {
    console.log('我没有关联了');
    history.push({
      path: '/visitorDetail',
      query: { shareId: item.shareId, tenantId: item.tenantId, visitId: item.id },
    });
  }
};
</script>

<style lang="scss" scoped>
.visitor-list-item {
  margin-bottom: 30px;
  .item-top {
    background: linear-gradient(360deg, #fdf9f2 0%, #f2e9db 100%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 30px 30px 30px 30px;
    border-radius: 20px;

    .item-right-content {
      width: 100%;
      .content-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        margin-right: -2px;
        .top-left {
          display: flex;
          align-items: center;
          .head-image {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-right: 25px;
          }
          .name-area {
            .top-check-times {
              height: 37px;
              font-size: $zaui-font-size-md;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #b39366;
              line-height: 37px;
              letter-spacing: 1px;
              span {
                color: $primary-color;
              }
            }
            .top-name {
              height: 36px;
              font-size: $zaui-font-size-md;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #343434;
              line-height: 36px;
              margin-bottom: 3px;
            }
          }
        }

        .time {
          display: flex;
          align-items: center;
          .time-text {
            height: 33px;
            font-size: $zaui-font-size-sm;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #909090;
            line-height: 33px;
            margin-right: 14px;
          }
          .time-right-img {
            height: 25px;
            width: 16px;
          }
        }
      }
      .content-mid {
        margin-left: 30px;
        .triangle {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 8px solid #fbfbfb;
        }
      }
      .content-bottom {
        // height: 153px;
        background: #fbfbfb;
        border-radius: 8px;
        padding: 16px 20px;
        padding-bottom: 0px;
        .content-bottom-top {
          position: relative;
          .title-name {
            max-height: 74px;
            font-size: $zaui-font-size-md;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #616161;
            line-height: 37px;
            margin-bottom: 21px;
            display: -webkit-box;
            text-overflow: ellipsis;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .spread {
            display: flex;
            align-items: center;
            padding-bottom: 18px;
            .spread-inner {
              .spread-text {
                height: 37px;
                font-size: $zaui-font-size-md;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #b39366;
                line-height: 37px;
                letter-spacing: 1px;
                margin-right: 5px;
                span {
                  color: $primary-color;
                }
              }
              .down-image {
                width: 20px;
                height: 20px;
                transition: display 0.5s;
                // transition: display 10s;
                &.active {
                  transform: rotate(180deg);
                  // display: none;
                }
              }
            }
          }
          .right-line {
            width: 116px;
            height: 74px;
            position: absolute;
            bottom: -16px;
            right: -13px;
          }
        }
        .item-bottom {
          padding: 30px 5px;
          padding-top: 12px;
          position: relative;
          .road-list {
            .road-list-item {
              display: flex;
              align-items: center;
              margin-bottom: 40px;
              height: 50px;
              .road-item-left {
                margin-right: 40px;
                position: relative;
                .road-left-image {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  z-index: 3;
                  margin-top: 5px;
                  position: relative;
                }
                .road-left-div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 40px;
                  height: 40px;
                  margin-left: 0.5px;
                  .point {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: #dcdcdc;
                  }
                }
                .line {
                  position: absolute;
                  height: 90px;
                  border-right: 5px dotted #dcdcdc;
                  top: 20px;
                  left: 18px;
                  width: 0;
                  // z-index: 1;
                }
              }
              .road-item-right {
                display: flex;
                align-items: center;
                .road-image {
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  margin-right: 18px;
                }
                .road-name {
                  white-space: nowrap;
                  height: 30px;
                  font-size: $zaui-font-size-sm;
                  font-family: PingFangSC-Medium, PingFang SC;
                  font-weight: 500;
                  color: #343434;
                  line-height: 30px;
                }
              }
            }
            .road-list-item:last-child {
              margin-bottom: 30px;
            }
          }
          .pick-up {
            display: flex;
            align-items: center;
            justify-content: center;
            .text {
              height: 37px;
              font-size: $zaui-font-size-md;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #b39366;
              line-height: 37px;
              letter-spacing: 1px;
            }
            .pick-img {
              transform: rotate(180deg);
              width: 20px;
              height: 20px;
              margin-left: 10px;
            }
          }
          .right-line {
            width: 116px;
            height: 74px;
            position: absolute;
            bottom: -16px;
            right: -13px;
          }
        }
      }
    }
  }
}
</style>
