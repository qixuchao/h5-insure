<template>
  <div v-for="(item, index) in visitorList" :key="index" class="com-visitor-page-list">
    <div class="visitor-page-list-title">
      {{
        dayjs().diff(dayjs(item.lastVisitContentDate), 'day') === 0
          ? '今天'
          : dayjs().diff(dayjs(item.lastVisitContentDate), 'day') === 1
          ? '昨天'
          : item.lastVisitContentDate || ''
      }}
    </div>
    <div
      v-for="(listItem, listIndex) in item.list"
      :key="listIndex"
      class="visitor-page-list-item"
      @click="onClick(listItem)"
    >
      <div class="item-top">
        <div class="item-right-content">
          <div class="content-top">
            <div class="top-left">
              <img :src="listItem.wechatImageUrl" alt="" class="head-image" />
              <div class="name-area">
                <div class="top">
                  <div class="top-name">
                    {{ listItem.relatedCustomerId ? listItem.relatedCustomerName : listItem.wechatNickname }}
                  </div>
                  <!-- <div class="sex-out">
                    <img :src="item.gender" alt="" />
                  </div> -->
                </div>

                <div v-show="listItem.viewTimeStr" class="top-check-times">
                  本次访问<span>{{
                    listItem.viewTimeStr &&
                    (listItem.viewTimeStr.indexOf('分') === -1
                      ? listItem.viewTimeStr.split('秒')[0]
                      : listItem.viewTimeStr.split('分')[0])
                  }}</span>
                  <span
                    v-if="listItem.viewTimeStr && listItem.viewTimeStr.indexOf('分') !== -1"
                    :style="{ color: '#b39366' }"
                    >分</span
                  >
                  <span v-if="listItem.viewTimeStr && listItem.viewTimeStr.indexOf('分') !== -1">{{
                    listItem.viewTimeStr &&
                    listItem.viewTimeStr.indexOf('分') !== -1 &&
                    listItem.viewTimeStr.split('分')[1].split('秒')[0]
                  }}</span
                  ><span
                    v-if="listItem.viewTimeStr && listItem.viewTimeStr.indexOf('秒') !== -1"
                    :style="{ color: '#b39366' }"
                    >秒</span
                  >
                </div>
              </div>
            </div>
            <div class="time">
              <div class="time-text">{{ listItem.lastVisitContentTimeStr }}</div>
              <img :src="getIconUrl('article.rightImg')" alt="" class="time-right-img" />
            </div>
          </div>
          <div class="content-mid">
            <div class="triangle"></div>
          </div>
          <div class="content-bottom">
            <div class="content-bottom-top">
              <div class="title-name">
                {{ `查看了${TransformTypeName(listItem.lastVisitContentType)}   ${listItem.lastVisitContentTitle} ` }}
              </div>
              <img :src="getIconUrl('visitor.lineImg')" alt="" class="right-line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
defineProps({
  visitorList: {
    type: Array,
    default: () => [],
  },
});
const visitItemEmit = defineEmits(['onClick']);
const onClick = (item: any) => {
  visitItemEmit('onClick', item);
};
const TransformTypeName = (val: string) => {
  console.log(val, 'typeName');
  if (val === 'vcard') {
    return '名片';
  }
  if (val === 'poster') {
    return '海报';
  }
  if (val === 'activity') {
    return '活动';
  }
  if (val === 'article') {
    return '文章';
  }
  return '';
};
</script>

<style lang="scss" scoped>
.com-visitor-page-list {
  .visitor-page-list-title {
    height: 40px;
    font-size: $zaui-font-size-md;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #a2a2a2;
    line-height: 40px;
    margin-bottom: 12px;
    margin-top: 30px;
  }
  .visitor-page-list-item {
    margin-bottom: 20px;
    .item-top {
      background: linear-gradient(360deg, #fdf9f2 0%, #f2e9db 100%);
      border-radius: 20px;
      display: flex;
      align-items: center;
      padding: 30px 30px 20px 30px;
      border-radius: 20px;

      .item-right-content {
        width: 100%;
        .content-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
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
              .top {
                display: flex;
                align-items: center;
                margin-bottom: 3px;
                .top-name {
                  height: 36px;
                  font-size: $zaui-font-size-md;
                  font-family: PingFangSC-Medium, PingFang SC;
                  font-weight: 600;
                  color: #343434;
                  line-height: 36px;
                  margin-right: 16px;
                }
                .sex-out {
                  width: 31px;
                  height: 31px;
                  background: #f99381;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  &.man {
                    background: #00afff;
                  }
                  img {
                    width: 20px;
                    height: 20px;
                  }
                }
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
              margin-right: 5px;
            }
            .time-right-img {
              margin-top: 2px;
              height: 24px;
              width: 14px;
            }
          }
        }
        .content-mid {
          margin-left: 30px;
          .triangle {
            width: 0;
            height: 0;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom: 15px solid #fbfbfb;
          }
        }
        .content-bottom {
          // height: 153px;
          background: #fbfbfb;
          border-radius: 8px;
          padding: 16px 13px;
          padding-left: 20px;
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
            .right-line {
              width: 116px;
              height: 45px;
              position: absolute;
              bottom: -37px;
              right: -16px;
            }
          }
        }
      }
    }
  }
}
</style>
