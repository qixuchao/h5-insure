<template>
  <div class="cal-schedule">
    <div class="schedule-item" :class="[item.status === 'Y' && 'disable']">
      <van-checkbox v-model="checked" shape="square" @click="handleChange"></van-checkbox>
      <span class="comm" :class="[getTagColor(item.type)]">{{ item.type }}</span>
      <div class="tl" @click="handleDetail(item.contentId, item.mold)">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Toast } from 'vant';
import { completeSchedule } from '@/api/modules/schedule';

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
const emit = defineEmits(['on-click']);

const checked = ref(false);
const history = useRouter();

watchEffect(() => {
  checked.value = props.item.status === 'Y';
});

const handleChange = async () => {
  await completeSchedule({
    contentId: props.item.contentId,
    status: props.item.status === 'Y' ? 'N' : 'Y',
  });
  emit('on-click');
  Toast(props.item.status === 'Y' ? '事项重新打开' : '恭喜你 完成了一个事项');
};

const getTagColor = (val: string) => {
  switch (val) {
    case '客户':
      return 'tag2';
    case '团队':
      return 'tag0';
    case '学习':
      return 'tag1';
    case '招募':
      return 'tag3';
    case '其他':
      return 'tag4';
    case '活动':
      return 'tag5';

    default:
      return 'tag0';
  }
};

const handleDetail = (contentId: string, mold: string) => {
  history.push({
    name: 'addSchedule',
    query: { contentId, chooseType: 'month', mold },
  });
};
</script>
<style lang="scss">
.cal-schedule {
  .schedule-item {
    height: 110px;
    width: 100%;
    background: url('@/assets/images/schedule/bg.png') no-repeat;
    background-size: 100% 100%;
    font-size: $zaui-font-size-lg;
    color: #343434;
    display: flex;
    align-items: center;
    // clip-path: inset(0 round 20px);
    padding: 0 28px;
    margin-bottom: 20px;

    .comm {
      width: 60px;
      height: 40px;
      border-radius: 8px;
      display: inline-block;
      font-size: $zaui-font-size-sm;
      line-height: 40px;
      margin: 0 18px;
    }
    .tl {
      flex: 1;
      text-align: left;
    }
    .tag0 {
      color: #ff6600;
      background: #ffeee7;
    }
    .tag1 {
      color: #947fe1;
      background: rgba(115, 76, 255, 0.1);
    }
    .tag2 {
      color: #00afff;
      background: rgba(0, 175, 255, 0.1);
    }
    .tag3 {
      color: $primary-color;
      background: rgba(255, 43, 31, 0.1);
    }
    .tag4 {
      color: #1bcd91;
      background: rgba(27, 205, 145, 0.1);
    }
    .tag5 {
      color: #af7c38;
      background: rgba($color: #af7c38, $alpha: 0.1);
    }
  }
  .disable {
    opacity: 0.45;
  }
}
</style>
