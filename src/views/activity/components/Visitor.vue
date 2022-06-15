<template>
  <div class="com-activity-visitor">
    <div className="home-visitor-item">
      <div
        v-if="!showEmpty"
        className="item-info"
        :style="{ backgroundImage: `url(${getIconUrl('home.visitor')})` }"
        @click="goVisitor"
      >
        <div class="my-swipe">
          <van-swipe vertical class="swipe-container" :show-indicators="false">
            <van-swipe-item v-for="(item, index) in visitorList" :key="index">
              <VanImage class="image-photo" round="true" fit="cover" :src="item.wechatImageUrl" />
              <div className="item-info-content">
                <span className="info-name">
                  {{ item.relatedCustomerId ? sliceName(item.relatedCustomerName) : sliceName(item.wechatNickname) }}
                </span>
                <span class="title-name" :style="{ marginRight: '3px' }">
                  {{ `查看了${TransformTypeName(item.lastVisitContentType)}` }}
                </span>
                <span class="title-title"> {{ item.lastVisitContentTitle }} </span>
              </div>
              <div className="intro-time">{{ item.lastVisitContentTime }}</div>
              <ZaSvg class="right_arrow" name="right_arrow" color="#9F5218" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="num">
          <div class="content">{{ cumulativeVisits }}<span class="content-title"> 累计访问</span></div>
          <div class="content-tip">
            <div class="tag-out checked">
              <div class="tag-item-text checked">+{{ dayNewVisits }}</div>
            </div>
            <div class="trianele-out"><div class="triangle"></div></div>
          </div>
        </div>
      </div>
      <div v-if="showEmpty" className="item-empty-info" @click="goVisitor">
        <div className="content">暂时还没有访客，快去获客吧~</div>
        <div className="btn" @click.stop="goArticle">
          <p className="title">去获客</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isEmpty } from 'lodash';
import { searchIcon, queryVisitor } from '@/api/modules/activity';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();

const history = useRouter();
const showEmpty = ref(false);

const visitorList = ref<any>([]);

const cumulativeVisits = ref('');
const dayNewVisits = ref('');
const getVisitor = async () => {
  const res = await queryVisitor({});
  const { status, data } = res.data;
  if (data?.activityVisitorDTO === null || (data?.activityVisitorDTO && data?.activityVisitorDTO.length === 0)) {
    showEmpty.value = true;
    return;
  }
  // if (JSON.stringify(data) === '{}' || data === null) {
  // }

  cumulativeVisits.value = data.cumulativeVisits;
  dayNewVisits.value = data.dayNewVisits;

  visitorList.value = data.activityVisitorDTO || [];
};
const goVisitor = () => {
  history.push('./visitor');
};
const goArticle = () => {
  history.push('./article');
};
onMounted(async () => {
  getVisitor();
});
const sliceName = (name: string) => {
  if (name.length > 5) {
    return `${name.slice(0, 5)}...`;
  }
  return name;
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
.home-visitor-item {
  padding: 20px 30px;
  .item-info {
    // background-image: url('@/assets/images/activity/bg-visitor.png');
    background-position: center center;
    background-size: 100% 100%;
    position: relative;
    height: 241px;
    z-index: 20;
    .my-swipe {
      position: absolute;
      overflow: hidden;
      left: 40px;
      top: 100px;
      z-index: 99;
      width: 100%;
    }
    .swipe-container {
      width: calc(100% - 80px);
      height: 100px;
      .image-photo {
        width: 93px;
        height: 93px;
      }
      .item-info-content {
        display: flex;
        font-size: $zaui-font-size-sm2;
        margin: 10px 0 0 151px;
        position: absolute;
        left: -30px;
        top: 5px;
        .info-name {
          color: #9f5218;
          font-size: $zaui-font-size-md;
          margin-right: 10px;
          font-family: Helvetica;
          font-weight: bold;
        }
        .title-title {
          display: inline-block;
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .right_arrow {
        font-size: $zaui-font-size-md;
        width: 23px;
        height: 32px;
        margin-right: 20px;
        position: absolute;
        right: -10px;
        top: 30px;
      }
    }
    .intro-time {
      font-size: $zaui-font-size-sm;
      font-family: Helvetica;
      color: #8c8c8c;
      line-height: 29px;
      margin: 10px 0 0 151px;
      position: absolute;
      top: 45px;
      left: -30px;
    }
    .num {
      display: flex;
      position: absolute;
      top: 30px;
      right: 31px;
      font-size: $zaui-font-size-md;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #5c2d17;
      line-height: 31px;
      .content-title {
        font-weight: 400;
      }
      .content-tip {
        position: absolute;
        margin-top: -36px;
        .trianele-out {
          display: flex;
          justify-content: center;
          padding-right: 20px;
          .triangle {
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 6px solid #572f11;
          }
        }

        .tag-out:last-child {
          margin-right: 0;
        }
        .tag-out {
          height: 32px;
          background: #5c2d17;
          border-radius: 70px;
          padding: 4px 11px 4px 10px;
          margin-right: 20px;
          display: flex;
          align-items: center;
          &.checked {
            background: linear-gradient(90deg, #a65516 0%, #572f11 100%);
          }
          .tag-item-text {
            // height: 34px;
            font-size: $zaui-font-size-sm;
            font-family: -apple-system, Helvetica, sans-serif;
            font-weight: 500;
            line-height: 24px;
            margin-top: 2px;
            &.checked {
              color: #fff;
            }
          }
        }
      }
    }
  }
  .item-empty-info {
    background-image: url('@/assets/images/activity/bg-visitor.png');
    background-position: center center;
    background-size: 100% 100%;
    position: relative;
    height: 241px;
    .content {
      font-size: $zaui-font-size-md2;
      font-weight: 400;
      color: #616161;
      line-height: 33px;
      top: 135px;
      left: 66px;
      position: absolute;
    }
    .btn {
      width: 126px;
      height: 47px;
      background: $btn-background;
      border-radius: 34px;
      top: 128px;
      right: 40px;
      position: absolute;
      .title {
        font-size: $zaui-font-size-sm;
        font-weight: 400;
        color: #fff;
        text-align: center;
        line-height: 24px;
        margin-top: 11px;
      }
    }
  }
}
</style>
