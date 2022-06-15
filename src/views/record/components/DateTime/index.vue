<template>
  <div>
    <div :class="['time-container', { 'time-has-border': hasBorder }]" @click="showTime = true">
      <div class="time-item">
        <span>{{ dateTime }} </span>
        <span class="dot"> <ZaSvg name="right_arrow" class="arrow-icon" /> </span>
      </div>
    </div>
    <van-action-sheet v-model:show="showTime">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        title="选择时间"
        @confirm="handleConfirm"
        @cancel="showTime = false"
      />
    </van-action-sheet>
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs';

const props = defineProps({
  dateTime: {
    type: String,
    default: () => dayjs().format('YYYY-MM-DD HH:mm'),
  },
  hasBorder: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update:dateTime']);
// 时间处理
const showTime = ref(false);
const currentDate = ref(new Date());

const handleConfirm = (value: Date) => {
  const time = dayjs(value).format('YYYY-MM-DD HH:mm');
  currentDate.value = value;
  showTime.value = false;
  emit('update:dateTime', time);
};

watch(
  () => props.dateTime,
  () => {
    if (props.dateTime) {
      console.log(props.dateTime, 22, new Date(props.dateTime.replace(/-/g, '/')));
      currentDate.value = new Date(props.dateTime.replace(/-/g, '/'));
    }
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>

<style lang="scss">
.time-container {
  .time-item {
    font-size: 28px;
    font-weight: 400;
    color: #343434;
    display: flex;
    align-items: center;
    .dot {
      color: #909090;
      margin-left: 17px;
      line-height: 8px;
      font-size: 24px;
    }
  }
}
.time-has-border {
  display: flex;
  margin-top: 30px;
  .time-item {
    background: #ffffff;
    border-radius: 35px;
    border: 2px solid #e0e0e0;
    padding: 13px 40px;
  }
}
</style>
