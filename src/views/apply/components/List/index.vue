<template>
  <div class="list">
    <div v-for="(item, index) in data" :key="index" class="item" @click="handleToDetail(item)">
      <div v-if="!isOver" class="left-over">
        <img v-if="item.coverImage" class="left-img" :src="item.coverImage" />
        <img v-if="item.coverImage" class="status-img" src="@/assets/images/apply/start.png" />
        <div v-if="userId === item.userId" class="desc">本人创建</div>
      </div>
      <!-- <div v-if="!isOver" class="left">
        <img v-if="item.coverImage" class="left-img" :src="item.coverImage" />
      </div> -->
      <div v-else class="left-over">
        <img v-if="item.coverImage" class="left-img" :src="item.coverImage" />
        <img v-if="item.coverImage" class="status-img" src="@/assets/images/apply/over.png" />
        <div v-if="userId === item.userId" class="desc">本人创建</div>
      </div>
      <div class="right">
        <div class="title">
          <span class="name">{{ item.topic.length > 10 ? item.topic.substring(0, 10) + '...' : item.topic }}</span>
          <div class="tag-1"><span class="label">线下</span></div>
        </div>
        <div class="time-wrap">
          <img class="left-img" src="@/assets/images/apply/time.png" />
          <span class="time">{{ item.startDate }} - {{ item.endDate }}</span>
        </div>
        <div class="desc-wrap">
          <div class="desc-1">
            <span class="name">已报名：</span>
            <span class="value">{{ item.applicantNum || 0 }}</span>
          </div>
          <div v-if="!isOver" class="desc-2">
            <span class="name">剩余名额：</span> <span class="value">{{ item.surplusNum || 0 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Storage from '@/utils/storage';

const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: () => {},
  },
  isOver: {
    type: Boolean,
    default: false,
  },
});
const storage = new Storage({ source: 'localStorage' });
const userId = storage.get('userInfo')?.userId;

const history = useRouter();
const handleToDetail = (item) => {
  history.push({
    path: `./applyDetail`,
    query: {
      id: item.id,
    },
  });
};
</script>

<style lang="scss" scoped>
.list {
  padding: 30px;
  background: #f6f6fa;
  .item {
    padding: 30px;
    background: linear-gradient(180deg, #fff7f8 0%, #ffffff 50%);
    box-shadow: 0px 0px 16px 0px #e5e5e8;
    border-radius: 20px;
    height: 200px;
    border: 2px solid;
    border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(244, 231, 231, 1)) 2 2;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .left {
      width: 140px;
      height: 140px;
      background: #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .left-over {
      width: 140px;
      height: 140px;
      background: #e0e0e0;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      .status-img {
        position: absolute;
        left: 20px;
        top: 20px;
        width: 100px;
        height: 100px;
        z-index: 2;
      }
      .desc {
        font-size: 20px;
        font-weight: 400;
        z-index: 2;
        width: 100%;
        position: absolute;
        text-align: center;
        left: 0px;
        bottom: 0px;
        background: rgba(0, 0, 0, 0.6);
        height: 36px;
        color: #fffbfc;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
    .left-over::after {
      width: 140px;
      height: 140px;
      z-index: 1;
      background: rgba(0, 0, 0, 1);
      left: 0px;
      top: 0px;
      content: '';
      position: absolute;
      opacity: 0.6;
    }
    .right {
      margin-left: 24px;
      .title {
        display: flex;
        align-items: center;
        .name {
          font-size: 28px;
          font-weight: 500;
          color: #343434;
          line-height: 44px;
        }
        .tag-1 {
          margin-left: 12px;
          padding: 0px 8px;
          height: 40px;
          display: flex;
          align-items: center;
          background: rgba(27, 205, 145, 0.1);
          border-radius: 8px;
          .label {
            font-size: 22px;
            font-weight: 400;
            color: #1bcd91;
            line-height: 30px;
          }
        }
        .tag-2 {
          margin-left: 12px;
          padding: 0px 8px;
          height: 40px;
          display: flex;
          align-items: center;
          background: rgba(0, 175, 255, 0.1);
          border-radius: 8px;
          .label {
            font-size: 22px;
            font-weight: 400;
            color: #00afff;
            line-height: 30px;
          }
        }
        .tag-3 {
          margin-left: 12px;
          padding: 0px 8px;
          height: 40px;
          display: flex;
          align-items: center;
          background: rgba(255, 238, 231, 0.1);
          border-radius: 8px;
          .label {
            font-size: 22px;
            font-weight: 400;
            color: #ffeee7;
            line-height: 30px;
          }
        }
      }
      .desc-wrap {
        display: flex;
        align-items: center;
        font-size: 24px;
        font-weight: 400;
        .desc-1 {
          display: flex;
          align-items: center;
        }
        .desc-2 {
          margin-left: 33px;
          padding-left: 26px;
          border-left: 2px solid #e2dddd;
          height: 20px;
          display: flex;
          align-items: center;
        }
        .name {
          height: 33px;
          color: #b39366;
        }
        .value {
          height: 33px;
          color: #ff2b1f;
        }
      }
      .time-wrap {
        display: flex;
        align-items: center;
        margin: 12px 0px 14px 0px;
        overflow: hidden;
        .left-img {
          width: 20px;
          height: 20px;
        }
        .time {
          width: 409px;
          height: 33px;
          font-size: 24px;
          font-weight: 400;
          margin-left: 8px;
          color: #616161;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
