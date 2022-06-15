<template>
  <div class="com-date-select">
    <div class="input" @click="handleClick">
      <div class="label">{{ label }}</div>
      <div class="date">{{ dayjs(date).format('YYYY-MM-DD') }}<van-icon name="arrow" color="#ddd" /></div>
    </div>
    <van-popup v-model:show="showCalendar" position="bottom">
      <van-datetime-picker
        v-model="date"
        :min-date="minDate"
        :max-date="maxDate"
        type="date"
        title="选择日期"
        @confirm="handleConfirm"
        @cancel="showCalendar = false"
      />
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import dayjs from 'dayjs';
import { Toast } from 'vant/es';
import { queryDailyDetail } from '@/api/modules/daily';
import ZaSvg from '@/components/ZaSvg/index.vue';

const emits = defineEmits(['update:modelValue']);
const minDate = new Date('1990/01/01');
const maxDate = new Date('2050/12/31');
const route = useRoute();

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: 'date',
  },
  label: {
    type: String,
    default: '选择日期',
  },
  placeholder: {
    type: String,
    default: '点击选择日期',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isView: {
    type: Boolean,
    default: false,
  },
});
const showCalendar = ref(false);
const changeVal = ref(dayjs(props.modelValue).format('YYYY-MM-DD'));
const date = ref(new Date(props.modelValue.replace(/-/g, '/')));

watchEffect(() => {
  changeVal.value = dayjs(props.modelValue).format('YYYY-MM-DD');
  date.value = new Date(props.modelValue.replace(/-/g, '/'));
});
const handleClick = () => {
  if (!props.disabled) {
    showCalendar.value = true;
  }
};

const handleConfirm = (v) => {
  if (props.isView) {
    queryDailyDetail({
      userId: route.query.userId,
      workDay: dayjs(v).format('YYYY-MM-DD HH:mm:ss'),
    }).then((res) => {
      if (res.data.status === 200 && res.data.data) {
        changeVal.value = dayjs(v).format('YYYY-MM-DD');
        emits('update:modelValue', dayjs(v).format('YYYY-MM-DD'));
        showCalendar.value = false;
      } else {
        Toast.fail('所选日期未填写工作日志');
      }
    });
  } else {
    changeVal.value = dayjs(v).format('YYYY-MM-DD');
    emits('update:modelValue', dayjs(v).format('YYYY-MM-DD'));
    showCalendar.value = false;
  }
};

const handleCancel = () => {
  showCalendar.value = false;
};
</script>

<style lang="scss" scoped>
.com-date-select {
  .input {
    padding: 30px;
    height: 100px;
    line-height: 100px;
    font-size: $zaui-font-size-md2;
    color: #616161;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;

    .label {
      flex: 0 0 200px;
    }
    .date {
      flex: 1;
      text-align: right;
    }
  }
}
</style>
