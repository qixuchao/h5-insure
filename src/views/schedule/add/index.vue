<template>
  <div class="add-schedule">
    <div class="container">
      <van-cell-group inset>
        <van-field
          v-model="title"
          :disabled="!edit"
          placeholder="添加日程标题"
          :formatter="formatter"
          class="title-input"
          maxlength="15"
        />
        <van-cell title="日程类型" is-link @click="handleDateType">
          <template #value>
            <span>
              {{ type }}
            </span>
          </template>
        </van-cell>
        <van-cell title="内容" />
        <van-field
          v-model="remark"
          placeholder="请输入详细内容"
          rows="4"
          type="textarea"
          class="input-addschedule-area"
          maxlength="200"
          show-word-limit
          :disabled="!edit"
        />
      </van-cell-group>

      <div class="bottom">
        <van-cell-group inset>
          <van-cell center title="全天事项" class="all-day">
            <template #value>
              <van-switch v-model="sw" :disabled="!edit" size="22" />
            </template>
          </van-cell>

          <van-cell>
            <div class="tim-com">
              <div @click="handleShowTime(1)">
                <p v-if="!sw" class="time">
                  {{ startTime ? dayjs(startTime).format('HH:mm') : dayjs().format('HH:00') }}
                </p>
                <p class="day">{{ dayjs(startTime).format('MM月DD日') }} 周{{ weekDay[dayjs(startTime).day()] }}</p>
              </div>
              <div>
                <img class="ig-arrow" src="@/assets/images/schedule/arrow.png" alt="" />
              </div>
              <div @click="handleShowTime(2)">
                <p v-if="!sw" class="time">{{ endTime ? dayjs(endTime).format('HH:mm') : dayjs().format('HH:00') }}</p>
                <p class="day">{{ dayjs(endTime).format('MM月DD日') }} 周{{ weekDay[dayjs(endTime).day()] }}</p>
              </div>
            </div>
          </van-cell>
          <van-cell title="日程提醒" is-link @click="clickRemind">
            <template #value>
              <span>
                {{ pushType.name }}
              </span>
            </template>
          </van-cell>

          <van-cell title="图片" />
          <van-cell>
            <div class="img-com">
              <div class="com-ig">
                <div v-for="(item, i) in imgArr" :key="i" class="img-prw">
                  <img :src="item" @click="handlePrew(i)" />
                  <div class="del" @click="handleDeleImg(i)">
                    <div class="del-line"></div>
                  </div>
                </div>
                <div v-if="imgArr.length === 0 && !edit">-</div>
                <van-uploader
                  v-if="edit"
                  :max-size="5 * 1024 * 1024"
                  result-type="file"
                  :max-count="3"
                  :before-read="uploadImg"
                  preview-size="80"
                  @oversize="onOversize"
                >
                  <div v-if="imgArr.length < 3" class="img-add">
                    <div>+</div>
                  </div>
                </van-uploader>
              </div>
            </div>
          </van-cell>
          <van-cell v-if="route.query.mold === 'issued'" title="来源">
            <template #value>
              <span>
                {{ inputInfo.source }}
              </span>
            </template>
          </van-cell>
          <van-cell v-if="route.query.mold === 'issued'" title="通知人">
            <template #value>
              <span>
                {{ inputInfo.notifier }}
              </span>
            </template>
          </van-cell>
          <van-cell v-if="personalShow && route.query.mold !== 'issued'" title="通知人群" is-link @click="handleNotice">
            <template #value>
              <span v-if="dispatchTarget.length"> 已选{{ memberNumberCount }} 人 </span>
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </div>

    <van-action-sheet
      v-model:show="select"
      :actions="scheduleType"
      close-on-click-action
      cancel-text="取消"
      @select="handleSelect"
      @cancel="select = false"
    />

    <van-action-sheet
      v-model:show="remind"
      :actions="remindTime"
      close-on-click-action
      cancel-text="取消"
      @select="handleRemind"
      @cancel="remind = false"
    />
    <AgencySelect v-model:visible="showUser" mode="multiple" :select-value="dispatchTarget" @on-submit="handleSubmit" />
    <van-popup :show="time > 0" position="bottom" :style="{ height: '40%' }">
      <van-picker
        ref="pickerRef"
        title="选择日期"
        :show="time > 0"
        class="picker-lct"
        :columns="columns"
        @cancel="time = 0"
        @confirm="handleTime"
      />
    </van-popup>
  </div>
  <div v-if="route.query.mold !== 'issued'" class="footer" :class="[!contentId && 'footer-bt']">
    <div v-if="contentId" class="item" @click="handleDelete">
      <div class="icon">
        <img src="../../../assets/images/schedule/delete.png" class="item-im1" />
      </div>
      <div>删除</div>
    </div>
    <div v-if="contentId" class="item check">
      <div class="item-check icon">
        <van-checkbox v-model="isChecked" shape="square" icon-size="18" @click="handleCheck"></van-checkbox>
      </div>
      <div>标记完成</div>
    </div>
    <van-button v-if="edit" class="btn" :block="true" :disabled="loading" @click="handleSave">保存</van-button>
    <van-button v-else class="btn" @click="handleEnbale">编辑</van-button>
  </div>
  <div v-else class="footer">
    <div class="item check else">
      <div class="item-check icon">
        <van-checkbox v-model="isChecked" shape="square" icon-size="18" @click="handleCheck"></van-checkbox>
      </div>
      <div class="text">标记完成</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast, ImagePreview, Dialog } from 'vant';
import dayjs from 'dayjs';
import {
  saveSchedule,
  uploadBase64File,
  checkSaveSchedule,
  searchScheduleDetail,
  removeSchedule,
  completeSchedule,
  getPathByKey,
} from '@/api/modules/schedule';
import { queryAgencyUserCount } from '@/api/modules/select';
import AgencySelect from '../components/agencySelect/index.vue';
import useCheckBack from '@/hooks/useCheckBack';
import Storage from '@/utils/storage';
import { weekDay, scheduleType, remindTime } from '../constant';

const storage = new Storage({ source: 'localStorage' });
const minDate = '2022-01-01';
const maxDate = '2030-12-31';

/* eslint-disable consistent-return */
const personalShow = ref(true);
const pickerRef = ref<any>(null);
const memberNumberCount = ref<number>(0);
const formatter = (value: string) => value.replace(/\s+/g, '');

const getDayAll = (begin, end) => {
  const dateAllArr = [];
  const ab = begin.split('-');
  const ae = end.split('-');
  const db = new Date();
  db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
  const de = new Date();
  de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
  const unixDb = db.getTime();
  const unixDe = de.getTime();
  for (let k = unixDb; k <= unixDe; ) {
    dateAllArr.push(
      `${dayjs(k).format('YYYY年MM月DD日')} 周${['日', '一', '二', '三', '四', '五', '六'][+dayjs(k).format('d')]}`,
    );
    k += 24 * 60 * 60 * 1000;
  }
  return dateAllArr;
};

const getHours = (num: number) => {
  const arr = [];
  for (let i = 0; i <= num; ) {
    if (i <= 9) {
      arr.push(`0${i}时`);
    } else {
      arr.push(`${i}时`);
    }
    i += 1;
  }
  return arr;
};

const getMinutes = () => {
  const arr = [];
  for (let i = 0; i <= 60; ) {
    if (i <= 9) {
      arr.push(`0${i}分`);
    } else {
      arr.push(`${i}分`);
    }
    i += 5;
  }
  return arr;
};

const columns = ref([
  {
    values: getDayAll(minDate, maxDate),
    defaultIndex: +dayjs().diff(dayjs(minDate), 'day'),
    className: 'date-pick',
  },
  {
    values: getHours(23),
    defaultIndex: dayjs().format('HH'),
  },
  {
    values: getMinutes(),
    defaultIndex: 0,
  },
]);

const remind = ref(false);
const select = ref(false);
const sw = ref(false);
const showUser = ref(false);
const time = ref(0);
const imgArr = ref([]) as any;
const edit = ref(true);
const isChecked = ref(false);
const loading = ref(false);
const defaultTime = ref([]) as any;

const route = useRoute();
const history = useRouter();

const chooseDate = dayjs(route.query.chooseDate).format('YYYY-MM-DD');
const nowTime = dayjs().format('HH:mm');

const inputInfo = reactive({
  title: '',
  type: '客户',
  startTime: dayjs(`${chooseDate} ${nowTime}`).startOf('hours'),
  endTime: dayjs(`${chooseDate} ${nowTime}`).startOf('hours'),
  remark: '',
  dispatch: '',
  dispatchTarget: [] as any,
  pushType: {
    name: '提前30分钟',
    value: 'b_30',
  },
  source: '系统',
  notifier: '',
});

console.log('>>>> route.query', route.query);

onMounted(() => {
  window.scrollTo(0, 0);
  sessionStorage.setItem('schedule_type', route.query.chooseType);
});

const { title, type, startTime, endTime, remark, dispatch, dispatchTarget, pushType } = toRefs(inputInfo);
const { contentId, mold } = route.query;
const getData = async () => {
  const { data } = await searchScheduleDetail({
    contentId,
    mold,
  });
  title.value = data.data.title;
  type.value = data.data.type || '客户';
  startTime.value = data.data.startTime;
  endTime.value = data.data.endTime;
  defaultTime.value = [startTime.value, endTime.value];
  inputInfo.notifier = data.data?.assignor || '';
  if (data.data.pushType) {
    pushType.value = remindTime.find((item) => item.name === data.data.pushType) || {
      name: '提前30分钟',
      value: 'b_30',
    };
  }
  if (data.data.dispatch === 'Y') {
    const val = JSON.parse(data.data.dispatchTarget);
    dispatchTarget.value = val.map((v: any) => {
      return {
        ...v,
        agencyId: v.id,
        agencyName: v.name,
      };
    });
  }
  remark.value = data.data.remark;
  isChecked.value = data.data.status === 'Y';
  edit.value = false;
  imgArr.value = data.data.images ? data.data.images.split(',') : [];
  sw.value = data.data.isAllDay === 'Y';

  useCheckBack(title, type, sw, startTime, endTime, imgArr, remark, dispatchTarget);
};

onMounted(() => {
  const userInfo = storage.get('userInfo');
  if (userInfo?.userType === 'I' || (userInfo?.userType === 'O' && userInfo?.agentLevel <= 80)) {
    personalShow.value = true;
  } else {
    personalShow.value = false;
  }
  contentId && getData();
  if (contentId) {
    document.title = '日程详情';
  }
});

useCheckBack(title, type, sw, startTime, endTime, imgArr, remark, dispatchTarget);

const save = () => {
  let start = dayjs(startTime.value).format('YYYY-MM-DD HH:mm:ss');
  let end = dayjs(endTime.value).format('YYYY-MM-DD HH:mm:ss');

  // 全天
  console.log('sw.value: ', sw.value);
  if (sw.value) {
    start = dayjs(startTime.value).startOf('day').format('YYYY-MM-DD HH:mm:ss');
    end = dayjs(endTime.value).endOf('day').format('YYYY-MM-DD HH:mm:ss');
  }
  saveSchedule({
    title: title.value,
    contentId,
    mold: '',
    type: type.value,
    isAllDay: sw.value ? 'Y' : 'N',
    crossDayFlag: 'N',
    startTime: start,
    endTime: end,
    images: imgArr.value.toString(),
    remark: remark.value,
    pushType: pushType.value.name,
    dispatch: dispatchTarget.value.length ? 'Y' : 'N',
    dispatchTarget: dispatchTarget.value,
  })
    .then((res) => {
      loading.value = true;
      if (res.data.data) {
        Toast('保存成功').$nextTick(() => {
          useCheckBack();
          history.back();
        });
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

const handleSave = async () => {
  if (!title.value) {
    return Toast('请填写日程标题');
  }
  if (!type.value) {
    return Toast('请选择日程类型');
  }
  // if (!remark.value) {
  //   return Toast('请填写内容');
  // }
  if (dayjs(startTime.value).diff(endTime.value) > 0) {
    return Toast('日程结束时间不能小于开始时间');
  }
  const oldStartTime = dayjs(defaultTime.value[0]).format('YYYY-MM-DD HH:mm:ss');
  let newStartTime = dayjs(startTime.value).format('YYYY-MM-DD HH:mm:ss');
  const oldEndTime = dayjs(defaultTime.value[1]).format('YYYY-MM-DD HH:mm:ss');
  let newEndTime = dayjs(endTime.value).format('YYYY-MM-DD HH:mm:ss');

  if (sw.value) {
    newStartTime = dayjs(startTime.value).startOf('day').format('YYYY-MM-DD HH:mm:ss');
    newEndTime = dayjs(endTime.value).endOf('day').format('YYYY-MM-DD HH:mm:ss');
  }

  console.log('oldStartTime: ', oldStartTime);
  console.log('newStartTime: ', newStartTime);
  console.log('oldEndTime: ', oldEndTime);
  console.log('newEndTime: ', newEndTime);

  const needCheck = oldStartTime !== newStartTime || oldEndTime !== newEndTime;
  if (needCheck) {
    const { data } = await checkSaveSchedule({
      startTime: newStartTime,
      endTime: newEndTime,
    });
    if (!data.data) {
      Dialog.confirm({
        title: '温馨提示',
        message: '当前时间段已存在待办日程，是否确认继续添加？',
      })
        .then(() => {
          save();
        })
        .catch(() => {
          loading.value = false;
        });
    } else {
      save();
    }
  } else {
    save();
  }
};

const handleSelect = (val: { value: string }) => {
  type.value = val.value;
};
const handleRemind = (val: { name: string; value: string }) => {
  pushType.value = val;
};

// eslint-disable-next-line no-shadow
const handleShowTime = (type: number) => {
  if (edit.value) {
    time.value = type;
  }
};

const handleTime = (val: Array, index: number) => {
  if (!sw.value) {
    const [a, b, c] = val;
    const aa = a.slice(0, -3);
    const str = [aa, b, c].join('');
    const newstr = str.replace(/年|月|日|时|分/g, '');
    console.log(a, b, c, aa, str, newstr);
    if (time.value === 1) {
      startTime.value = dayjs(newstr).format('YYYY-MM-DD HH:mm:ss') as any;
    } else if (time.value === 2) {
      endTime.value = dayjs(newstr).format('YYYY-MM-DD HH:mm:ss') as any;
    }
    time.value = 0;
  } else {
    const [a] = val;
    const aa = a.slice(0, -3);
    const str = [aa].join('');
    const newstr = str.replace(/年|月|日|时|分/g, '');
    console.log(a, aa, str, newstr);
    if (time.value === 1) {
      startTime.value = dayjs(newstr).format('YYYY-MM-DD HH:mm') as any;
    } else if (time.value === 2) {
      endTime.value = dayjs(newstr).format('YYYY-MM-DD HH:mm') as any;
    }
    time.value = 0;
  }
};

watch(sw, (newval, oldval) => {
  if (newval) {
    columns.value = [
      {
        values: getDayAll(minDate, maxDate),
        defaultIndex: +dayjs().diff(dayjs(minDate), 'day'),
        className: 'date-pick',
      },
    ];
  } else {
    columns.value = [
      {
        values: getDayAll(minDate, maxDate),
        defaultIndex: +dayjs().diff(dayjs(minDate), 'day'),
        className: 'date-pick',
      },
      {
        values: getHours(23),
        defaultIndex: 0,
      },
      {
        values: getMinutes(),
        defaultIndex: 0,
      },
    ];
  }
});

watch(time, (newval, oldval) => {
  if (newval === 1) {
    setTimeout(() => {
      const day = dayjs(startTime.value).format('YYYY-MM-DD');
      const hours = `${dayjs(startTime.value).format('HH')}时`;
      const minutes = `${dayjs(startTime.value).format('mm')}分`;

      pickerRef.value.setIndexes([
        +dayjs(startTime.value).diff(dayjs(minDate), 'day'),
        getHours(23).indexOf(hours),
        getMinutes().indexOf(minutes),
      ]);
    }, 0);
  }
  if (newval === 2) {
    setTimeout(() => {
      const day = dayjs(endTime.value).format('YYYY-MM-DD');
      const hours = `${dayjs(endTime.value).format('HH')}时`;
      const minutes = `${dayjs(endTime.value).format('mm')}分`;
      pickerRef.value.setIndexes([
        +dayjs(endTime.value).diff(dayjs(minDate), 'day'),
        getHours(23).indexOf(hours),
        getMinutes().indexOf(minutes),
      ]);
    }, 0);
  }
});

watch(dispatchTarget, async (val) => {
  const codeList: any = [];

  // 组合数据，请求接口
  // 后端返回id，前端变更用memberCode
  val.forEach((item: any) => {
    const { id, memberCode, memberType } = item;
    codeList.push({
      memberCode: memberCode || id,
      memberType,
    });
  });
  const {
    data: { data = 0 },
  } = await queryAgencyUserCount({ codeList });
  memberNumberCount.value = data;
});

const onOversize = () => {
  Toast('文件大小不能超过 5M');
};

const uploadImg = (file: any) => {
  Toast.loading({ message: '图片上传中...' });
  try {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async (img) => {
      const res = await uploadBase64File({ fileBase64: img?.target?.result });
      const { data } = res.data;
      const res1 = await getPathByKey({ key: data });
      imgArr.value.push(res1.data.data.fileOriginalUrl);
      Toast.clear();
    };
  } catch (e) {
    Toast.clear();
  }
};

const handlePrew = (i: number) => {
  ImagePreview({
    images: imgArr.value,
    startPosition: i,
  });
};

const handleSubmit = (val: any) => {
  dispatchTarget.value = val.map((el) => {
    return {
      id: el.agencyId,
      name: el.agencyName,
      ...el,
    };
  });
};

const handleEnbale = async () => {
  const { data } = await searchScheduleDetail({
    contentId,
    mold,
  });

  if (data.data?.dispatchStatus === '2') {
    edit.value = true;
  } else {
    Toast('日程通知下发中，请稍后操作');
  }
};

const handleDateType = () => {
  if (edit.value) {
    select.value = true;
  }
};

const handleDelete = () => {
  Dialog.confirm({
    title: '提示',
    message: '确认删除？',
  }).then(async () => {
    await removeSchedule({ contentId });
    Toast('删除成功').$nextTick(() => {
      useCheckBack();
      history.back();
    });
  });
};

const handleNotice = () => {
  if (edit.value) {
    showUser.value = true;
  }
};
const clickRemind = () => {
  if (edit.value) {
    remind.value = true;
  }
};
const handleDeleImg = (i: number) => {
  if (edit.value) {
    imgArr.value.splice(i, 1);
  }
};

const handleCheck = () => {
  completeSchedule({
    contentId,
    status: isChecked.value ? 'Y' : 'N',
  }).then(() => {
    getData();
    Toast(isChecked.value ? '恭喜你，完成了一个事项' : '该事项被重新打开');
  });
};

// eslint-disable-next-line no-shadow
const filter = (type: string, options: string[]) => {
  // if (type === 'minute') {
  //   return options.filter((option: string) => Number(option) % 5 === 0);
  // }
  return options;
};
</script>

<style lang="scss">
.add-schedule {
  background-color: #f6f6fa;
  padding-bottom: 210px;

  .van-field__word-limit {
    font-size: $zaui-font-size-md2;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #bcbcbc;
    line-height: 42px;
  }

  .van-checkbox__icon .van-icon {
    // border-color: #909090;
    width: 30px;
    height: 30px;
  }

  .van-checkbox__icon {
    height: 30px;
    line-height: 30px;
  }

  .van-cell-group--inset {
    margin: 0;
  }
  .container .van-cell {
    font-size: $zaui-font-size-lg;
    padding: 29px 30px;
  }
  .van-icon {
    line-height: inherit;
  }
  .all-day .van-cell__value {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: initial;
  }
  .title-input {
    font-size: 36px !important;
    font-weight: 500;
  }
  .input-addschedule-area {
    font-size: $zaui-font-size-md2 !important;
  }
  .tim-com {
    padding: 0 60px;
    font-size: $zaui-font-size-lg;
    color: #343434;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .ig-arrow {
      width: 16px;
      height: 64px;
    }
    .time {
      font-weight: 600;
    }
    .day {
      font-weight: 400;
    }
  }

  .bottom {
    margin-top: 20px;
  }
  .com-ig {
    display: flex;
  }
  .img-com {
    .img-add {
      width: 110px;
      height: 110px;
      background: #ffffff;
      border-radius: 8px;
      border: 1px dashed $primary-color;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $primary-color;
      font-size: 60px;
      font-weight: 300;
    }
    .img-prw {
      width: 112px;
      height: 112px;
      background: #f5f5f5;
      border-radius: 6px;
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 30px;
      position: relative;
      img {
        width: 112px;
        height: 112px;
      }
    }
    .del {
      width: 24px;
      height: 24px;
      background: #ff5050;
      border-radius: 50%;
      position: absolute;
      right: 4px;
      top: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      .del-line {
        width: 12px;
        height: 4px;
        background-color: #fff;
      }
    }
  }

  .van-popup {
    .date-pick {
      flex: 2;
    }
  }
}
.footer-bt {
  justify-content: center !important;
}

.footer {
  height: 150px;
  background: #ffffff;
  box-shadow: 0px 0px 12px 0px rgba(52, 52, 52, 0.1);
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

  .item {
    font-size: $zaui-font-size-sm;
    color: #909090;
    height: 100%;
    padding: 5px 0;
    .icon {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
    }

    &-im1 {
      width: 34px;
      height: 34px;
    }
    &.check {
      margin-left: 40px;
      margin-right: 40px;
      &.else {
        display: flex;
        align-items: center;
        margin-left: 0px;
        .icon {
          margin-right: 8px;
        }
        .text {
          margin-bottom: 7px;
        }
      }
    }
  }
  .van-checkbox__icon .van-icon {
    border: 3px solid #909090;
    border-radius: 6px;
    width: 30px;
    height: 30px;
  }

  .van-checkbox__icon {
    height: 30px;
    line-height: 30px;
  }

  .van-checkbox__icon--checked .van-icon {
    border: none;
  }

  .btn {
    flex: 1;
    // width: 480px;
    height: 90px;
    background: $btn-background;
    border-radius: 45px;
    color: #fff;
  }
}
</style>
