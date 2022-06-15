<template>
  <div class="trend-item" @click="handleClick">
    <div class="common">
      <div class="tp">
        <div class="tp-top">
          <span>查看了</span><span class="title">{{ data.contentTitle }}</span>
        </div>
        <div class="time">
          <div style="display: flex">
            <span>
              <img :src="getIconUrl('customer.time')" class="img1" />
            </span>
            <span>
              {{ data.visitPeriod }}
            </span>
          </div>
          <div style="display: flex">
            <span>
              <img :src="getIconUrl('customer.visited')" class="img2" />
            </span>
            <span> 访问{{ data.stayDuration }} </span>
          </div>
        </div>
      </div>
      <div class="imgs">
        <img :src="data.contentImg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: () => Object,
  },
});
const history = useRouter();

const { data } = toRefs(props);
const handleClick = () => {
  if (data.value.contentType === 'vcard') {
    history.push('/businessCard');
  } else if (data.value.contentType === 'article' && data.value.extendUrl) {
    const params = new URLSearchParams(new URL(data.value.extendUrl).search);
    history.push({
      path: './articleDetail',
      query: {
        articleId: params.get('articleId'),
        flag: 'Y',
        isInnerEntry: 'Y',
        isOuterUrl: params.get('isOuterUrl'),
      },
    });
  }
};
</script>

<style lang="scss">
.trend-item {
  // width: 690px;
  height: 210px;
  border-radius: 8px;
  border-bottom: 1px solid #f4f5f7;
  margin: 0 auto;
  padding: 30px 0;
  .common {
    display: flex;
    justify-content: space-between;
  }
  .tp {
    width: 465px;
    height: 88px;
    font-size: $zaui-font-size-md;
    color: #a5a5a5;
  }
  .tp-top {
    // line-height: auto;
    margin-top: -1px;
  }
  .imgs {
    width: 196px;
    height: 150px;
    margin-left: 22px;
    img {
      border-radius: 12px;
      width: 196px;
      height: 150px;
    }
  }
  .title {
    font-weight: 400;
    color: #333;
    font-weight: 500;
  }
  .time {
    font-size: $zaui-font-size-sm;
    color: #b38e57;
    margin-top: 8px;
    display: flex;
    align-items: center;

    div:first-child {
      margin-right: 30px;
    }
    .img1 {
      width: 32px;
      height: 32px;
      margin-right: 4px;
    }
    .tm {
      flex: 1;
      display: flex;
    }

    .img2 {
      margin-right: 4px;
      height: 32px;
    }
  }
}
</style>
