<template>
  <div class="add-apply">
    <div class="upload-container">
      <img :src="applyInfo.coverImage || getIconUrl('apply.bgImg')" alt="" class="bg-img" />
      <div v-if="!applyInfo.coverImage" class="upload-btn">
        <div class="btn" @click="handleUpload">
          <span class="upload-label">+</span>
          <span class="upload-front">上传活动封面</span>
        </div>
        <div class="upload-title">建议尺寸 16:9</div>
      </div>
      <div v-else class="has-upload-btn">
        <div class="btn" @click="handleUpload">
          <span class="upload-label">+</span>
          <span class="upload-front">上传封面</span>
        </div>
      </div>
    </div>
    <van-cell-group>
      <van-cell class="active-line">
        <template #title>
          <span class="apply-title">活动方式<span class="star">*</span> </span>
        </template>
        <template #value>
          <div class="f-select">
            <div
              v-for="item in activityList"
              :key="item.value"
              class="m-box"
              :class="{ active: applyInfo.activityFormat === item.value }"
              @click="handleClick(item.value)"
            >
              {{ item.label }}
            </div>
          </div>
        </template>
      </van-cell>
      <van-cell is-link label-class="label" input-align="right" @click="activeTypeShow = true">
        <template #title>
          <span>
            <span class="apply-title">活动类型<span class="star">*</span> </span>
          </span>
        </template>
        <template #value>
          <span v-if="applyInfo.activityType">{{ activityType }}</span>
          <span v-else class="cell-val">请选择</span>
        </template>
      </van-cell>
      <van-field
        v-model="applyInfo.topic"
        label-class="label"
        input-align="right"
        placeholder="请填写活动主题"
        :maxlength="15"
      >
        <template #label>
          <span>
            <span class="apply-title">活动主题<span class="star">*</span> </span>
          </span>
        </template>
      </van-field>

      <van-cell is-link @click="handleShowDatePicker('startDate')">
        <template #title>
          <span class="apply-title">活动开始时间<span class="star">*</span> </span>
        </template>
        <template #value>
          <span v-if="applyInfo.startDate">{{ applyInfo.startDate }}</span>
          <span v-else class="cell-val">请选择</span>
        </template>
      </van-cell>
      <van-cell title-class="label" is-link @click="handleShowDatePicker('endDate')">
        <template #title>
          <span class="apply-title">活动结束时间<span class="star">*</span> </span>
        </template>
        <template #value>
          <span v-if="applyInfo.endDate">{{ applyInfo.endDate }}</span>
          <span v-else class="cell-val">请选择</span>
        </template>
      </van-cell>
      <van-cell
        v-if="applyInfo.activityFormat !== 'get_customer'"
        title-class="label"
        is-link
        @click="handleShowDatePicker('registrationStartTime')"
      >
        <template #title>
          <span class="apply-title">报名开始时间<span class="star">*</span> </span>
        </template>
        <template #value>
          <span v-if="applyInfo.registrationStartTime">{{ applyInfo.registrationStartTime }}</span>
          <span v-else class="cell-val">请选择</span>
        </template>
      </van-cell>
      <van-cell
        v-if="applyInfo.activityFormat !== 'get_customer'"
        title-class="label"
        is-link
        @click="handleShowDatePicker('registrationEndTime')"
      >
        <template #title>
          <span class="apply-title">报名截止时间<span class="star">*</span> </span>
        </template>
        <template #value>
          <span v-if="applyInfo.registrationEndTime">{{ applyInfo.registrationEndTime }}</span>
          <span v-else class="cell-val">请选择</span>
        </template>
      </van-cell>

      <van-field
        v-if="applyInfo.activityFormat === 'offline_activity'"
        v-model="applyInfo.address"
        label-class="label"
        input-align="right"
        :maxlength="30"
        placeholder="请输入活动地址"
      >
        <template #label>
          <span>
            <span class="apply-title">活动地址<span class="star">*</span> </span>
          </span>
        </template>
      </van-field>
      <van-field
        v-if="applyInfo.activityFormat === 'online_activity'"
        v-model="applyInfo.address"
        label-class="label"
        input-align="right"
        :maxlength="100"
        placeholder="请输入直播链接"
      >
        <template #label>
          <span>
            <span class="apply-title">直播链接<span class="star">*</span> </span>
          </span>
        </template>
      </van-field>
      <van-field
        v-if="applyInfo.activityFormat === 'get_customer'"
        v-model="applyInfo.address"
        label-class="label"
        input-align="right"
        :maxlength="100"
        placeholder="请输入活动链接"
      >
        <template #label>
          <span>
            <span class="apply-title">活动链接<span class="star">*</span> </span>
          </span>
        </template>
      </van-field>

      <van-cell v-if="applyInfo.activityFormat !== 'get_customer'" title-class="label" is-link @click="handleApplyItem">
        <template #title>
          <span class="apply-title">报名项填写<span class="star">*</span> </span>
        </template>
        <template #value>
          <span v-if="applyInfo.columnDTOS.length > 0">{{ columnDTOSStr }}</span>
          <span v-else class="cell-val">请选择</span>
        </template>
      </van-cell>

      <van-cell v-if="applyInfo.activityFormat !== 'get_customer'" title-class="label" class="digit-container">
        <template #title>
          <span class="apply-title">限制报名人数<span class="star">*</span> </span>
        </template>
        <template #value>
          <div v-if="switchChecked" class="digit-input">
            <van-field
              v-model="applyInfo.registrationLimit"
              type="digit"
              :maxlength="4"
              :input-align="right"
              :border="false"
              placeholder="请输入"
            >
              <template #extra>人</template>
            </van-field>
          </div>
          <van-switch v-model="switchChecked" />
        </template>
      </van-cell>

      <van-cell v-if="showSearch" title-class="label" is-link @click="show = true">
        <template #title>
          <span class="apply-title">活动范围<span class="star">*</span> </span>
        </template>
        <template #value>
          <span v-if="memberNumberCount > 0">已选{{ memberNumberCount }}人</span>
          <span v-else class="cell-val">请选择</span>
        </template>
      </van-cell>
    </van-cell-group>
    <van-field
      v-model="applyInfo.introduction"
      class="apply-intro"
      type="textarea"
      rows="3"
      label="活动介绍"
      show-word-limit
      placeholder="请输入活动介绍"
      :maxlength="50"
      @focus="handleFocus"
    >
    </van-field>
  </div>
  <van-popup v-model:show="datePickerShow.startDate" position="bottom" :style="{ height: '40%' }">
    <van-picker
      ref="pickerRef"
      title="选择日期"
      class="picker-lct"
      :columns="dateColumns"
      @confirm="(val) => handleTime('startDate', val)"
    />
  </van-popup>

  <van-popup v-model:show="datePickerShow.endDate" position="bottom" :style="{ height: '40%' }">
    <van-picker
      ref="pickerRef"
      title="选择日期"
      class="picker-lct"
      :columns="dateColumns"
      @confirm="(val) => handleTime('endDate', val)"
    />
  </van-popup>
  <van-popup v-model:show="datePickerShow.registrationStartTime" position="bottom" :style="{ height: '40%' }">
    <van-picker
      ref="pickerRef"
      title="选择日期"
      class="picker-lct"
      :columns="dateColumns"
      @confirm="(val) => handleTime('registrationStartTime', val)"
    />
  </van-popup>

  <van-popup v-model:show="datePickerShow.registrationEndTime" position="bottom" :style="{ height: '40%' }">
    <van-picker
      ref="pickerRef"
      title="选择日期"
      class="picker-lct"
      :columns="dateColumns"
      @confirm="(val) => handleTime('registrationEndTime', val)"
    />
  </van-popup>

  <AgencySelect v-model:visible="show" mode="multiple" :select-value="dispatchTarget" @on-submit="handleSubmit" />

  <van-action-sheet
    v-model:show="activeTypeShow"
    :actions="activityTypeList"
    close-on-click-action
    cancel-text="取消"
    @select="handleActivityType"
    @cancel="activeTypeShow = false"
  />

  <div v-resize class="footer">
    <div class="btn" @click="handleSave"><span>保存发布</span></div>
  </div>
</template>

<script lang="ts" setup>
import { Toast, Dialog } from 'vant';
import dayjs from 'dayjs';
import { areaList } from '@vant/area-data';
import useCheckBack from '@/hooks/useCheckBack';
import { saveCustomer, removeCustomer, searchCustomerDetail } from '@/api/modules/customer';
import { useThemesStore } from '@/store/themes';
import { queryFullDict, saveApply } from '@/api/modules/apply';
import imageSelect from '@/utils/imageSelect';
import { activityList, initDate } from '../constant';
import Storage from '@/utils/storage';
import AgencySelect from '@/views/schedule/components/agencySelect/index.vue';
import { queryAgencyUserCount } from '@/api/modules/select';

const storage = new Storage({ source: 'localStorage' });
const { getIconUrl } = useThemesStore();

const dateColumns = ref(initDate);
const formatStr = 'YYYY-MM-DD HH:mm';

const router = useRouter();
const route = useRoute();
const datePickerShow = reactive({
  startDate: false,
  endDate: false,
  registrationStartTime: false,
  registrationEndTime: false,
});

const activityTypeList = ref([]);
const switchChecked = ref(false);
const showSearch = ref(false);

// 活动类型
const activeTypeShow = ref(false);
const dispatchTarget = ref([]);

const columnDTOS = JSON.parse(sessionStorage.getItem('columnDTOS')) || [];

const initInfo = JSON.parse(sessionStorage.getItem('applyInfo')) || { activityFormat: 'offline_activity' };
sessionStorage.removeItem('applyInfo');
sessionStorage.removeItem('columnDTOS');

const applyInfo = reactive({ ...initInfo, columnDTOS });

const getData = async () => {
  const res = await queryFullDict();
  if (res.data?.status === 200) {
    activityTypeList.value = res.data?.data?.map((item) => ({ name: item.itemName, value: item.itemCode })) || [];
  }
};
const show = ref(false);

const handleShowDatePicker = (type: string) => {
  datePickerShow[type] = true;
};
const handleUpload = () => {
  imageSelect(1).then((urls) => {
    if (Array.isArray(urls)) {
      const [coverImage] = urls;
      applyInfo.coverImage = coverImage;
    }
  });
};
onMounted(() => {
  getData();
  const userInfo = storage.get('userInfo');
  if (userInfo?.userType === 'I' || (userInfo?.userType === 'O' && userInfo?.agentLevel <= 60)) {
    showSearch.value = true;
  } else {
    showSearch.value = false;
  }
});

const handleApplyItem = () => {
  sessionStorage.setItem('applyInfo', JSON.stringify(applyInfo));
  if (applyInfo.columnDTOS.length > 0) {
    sessionStorage.setItem('columnDTOS', JSON.stringify(applyInfo.columnDTOS));
  }
  router.push({ path: './applyItem' });
};
const handleFocus = (e: any) => {
  setTimeout(() => {
    if (e.target) {
      e.target.scrollIntoView();
    }
  }, 200);
};
const handleTime = (type: string, val: string) => {
  console.log(type, val);
  const [a, b, c] = val;
  const aa = a.slice(0, -3);
  const str = [aa, b, c].join('');
  const newStr = str.replace(/年|月|日|时|分/g, '');
  applyInfo[type] = dayjs(newStr).format('YYYY-MM-DD HH:mm');
  datePickerShow[type] = false;
};
const memberNumberCount = ref<number>(0);

const columnDTOSStr = computed(() => {
  const strList = applyInfo.columnDTOS.filter((item) => item.isSelected === 'Y');

  if (strList.length > 0) {
    const { length } = strList;
    const str = strList
      .slice(0, 3)
      .map((item) => item.label)
      .join(',');
    if (length > 3) {
      return `${str}...`;
    }
    return str;
  }
  return '';
});
const activityType = ref('');
// const type = ref(null);

const handleActivityType = (val: { value: string; name: string }) => {
  applyInfo.activityType = val.value;
  activityType.value = val.name;
};

const handleClick = (val: number) => {
  applyInfo.activityFormat = val;
};

// 保存
// eslint-disable-next-line consistent-return
const handleSave = async () => {
  if (!applyInfo.activityType) {
    return Toast('活动类型不能为空');
  }
  if (!applyInfo.topic) {
    return Toast('活动主题不能为空');
  }
  if (!applyInfo.startDate) {
    return Toast('活动开始时间不能为空');
  }
  if (!applyInfo.endDate) {
    return Toast('活动开始结束不能为空');
  }
  // console.log(applyInfo.startDate, applyInfo.endDate);
  if (dayjs(applyInfo.endDate).isBefore(dayjs(applyInfo.startDate))) {
    return Toast('活动开始时间不能晚于结束时间');
  }

  if (applyInfo.activityFormat !== 'get_customer') {
    if (!applyInfo.registrationStartTime) {
      return Toast('报名开始时间不能为空');
    }
    if (!applyInfo.registrationEndTime) {
      return Toast('报名结束时间不能为空');
    }
    if (dayjs(applyInfo.registrationEndTime).isBefore(dayjs(applyInfo.registrationStartTime))) {
      return Toast('报名开始时间不能晚于报名截止时间');
    }
    if (dayjs(applyInfo.endDate).isBefore(dayjs(applyInfo.registrationStartTime))) {
      return Toast('报名开始时间不能晚于活动结束时间');
    }
    if (dayjs(applyInfo.endDate).isBefore(dayjs(applyInfo.registrationEndTime))) {
      return Toast('报名截止时间不能晚于活动结束时间');
    }
    if (switchChecked.value && !applyInfo.registrationLimit) {
      return Toast('限制报名人数不能为空');
    }
    if (applyInfo.columnDTOS.length === 0) {
      return Toast('报名项填写不能为空');
    }
    if (!applyInfo.address) {
      return Toast(applyInfo.activityFormat === 'online_activity' ? '活动地址不能为空' : '直播链接不能为空');
    }
  } else {
    if (!applyInfo.address) {
      return Toast('活动链接不能为空');
    }
  }
  if (memberNumberCount.value === 0) {
    return Toast('活动范围不能为空');
  }
  saveApply({
    ...applyInfo,
    columnDTOS: applyInfo.columnDTOS.map((item) => {
      return { ...item, required: item.required ? 'Y' : 'N' };
    }),
    dispatchTarget: dispatchTarget.value,
  }).then((res) => {
    if (res.data.status === 200) {
      Toast('创建成功！');
      router.back();
    }
  });
};
const handleSubmit = (val) => {
  dispatchTarget.value = val.map((el) => {
    return {
      id: el.agencyId,
      name: el.agencyName,
      ...el,
    };
  });
};

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

// 删除
const handleDelete = () => {
  Dialog.confirm({
    title: '提示',
    message: '您确认要删除客户信息吗',
  })
    .then(async () => {
      await removeCustomer({});
      Toast('删除成功').$nextTick(() => {
        useCheckBack();
        router.replace({ name: 'customer' });
      });
    })
    .catch(() => {});
};
</script>

<style lang="scss" scoped>
.digit-container {
  ::v-deep .van-cell__value {
    display: flex;
    align-items: center;
    color: #343434;
    justify-content: flex-end;
  }
  ::v-deep .van-switch {
    width: 120px;
    margin-left: 26px;
  }
  .digit-input {
    flex: 1;
    padding-right: 26px;
    border-right: 2px solid #f5f5f5;
    ::v-deep .van-field {
      padding: 0px;
      .van-cell__value {
        padding-right: 16px;
      }
      input {
        text-align: right;
      }
    }
  }
}

::v-deep {
  .van-cell {
    font-size: 30px;
    padding: 29px 30px;
    color: var(--van-field-label-color);
    .van-cell__value {
      color: #343434;
    }
  }
  .active-line {
    .van-cell__title {
      flex: 0 0 auto;
    }
  }
  .van-cell-group--inset {
    margin: 0;
  }
  .van-icon {
    line-height: inherit;
  }
  .date-pick {
    flex: 2;
  }
}
.add-apply {
  overflow-y: auto;
  height: calc(100vh - 150px);
  .apply-intro {
    flex-wrap: wrap;
    ::v-deep {
      .van-cell__title {
        width: 100%;
      }
      .van-cell__value.van-field__value {
        background: #f4f5f7;
        border-radius: 20px;
        margin-top: 30px;
        padding: 24px;

        .van-field__word-limit {
          font-size: 30px;
          font-weight: 400;
          color: #b8b8b8;
        }
      }
    }
  }
  .upload-container {
    width: 750px;
    height: 422px;
    box-shadow: inset -4px -11px 7px 0px rgba(255, 255, 255, 0.28);
    backdrop-filter: blur(1.9656px);
    position: relative;
    overflow: hidden;
    .bg-img {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    .has-upload-btn {
      position: absolute;
      z-index: 2;
      right: 0px;
      top: 90px;
      .btn {
        width: 174px;
        height: 53px;
        background: #000000;
        border-radius: 100px 0px 0px 100px;
        opacity: 0.4;
        display: flex;
        align-items: center;
        justify-content: center;
        .upload-label {
          font-size: 32px;
          color: #ffffff;
          height: 34px;
          line-height: 28px;
          padding-right: 8px;
        }
        .upload-front {
          font-size: 24px;
          font-weight: 400;
          color: #ffffff;
        }
      }
    }
    .upload-btn {
      position: absolute;
      z-index: 2;
      .btn {
        width: 420px;
        height: 88px;
        background: #ffffff;
        border-radius: 44px;
        border: 1px solid #ff5342;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        color: #ff2b1f;
        .upload-label {
          font-size: 40px;
          height: 48px;
          line-height: 40px;
        }
        .upload-front {
          margin-left: 16px;
          font-size: 32px;
        }
      }
      .upload-title {
        margin-top: 30px;
        font-size: 24px;
        font-weight: 400;
        color: #ff2b1f;
        line-height: 33px;
        text-align: center;
      }
    }
  }
  .label {
    color: #616161;
  }
  .value {
    color: #343434;
  }
  .line {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    vertical-align: text-top;
  }
  input::placeholder {
    color: #bcbcbc;
  }
  .cell-val {
    color: #bcbcbc;
    font-size: 30px;
  }

  .copy {
    width: 36px;
    vertical-align: sub;
  }
  .star {
    color: $primary-color;
  }

  .f-select {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .m-box {
      height: 60px;
      width: 158px;
      border-radius: 8px;
      font-size: 30px;
      margin-left: 24px;
      color: #bcbcbc;
      border: 2px solid #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;

      .cm-img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .active {
    background: $btn-background;
    color: #fff !important;
  }
}
.footer {
  width: 100vw;
  height: 150px;
  background: #ffffff;
  padding: 0px 30px;
  box-shadow: 0px -2px 10px 0px #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    height: 88px;
    width: 100%;
    background: linear-gradient(90deg, #f70800 0%, #ff5003 100%);
    border-radius: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 32px;
      font-weight: 600;
      color: #ffffff;
      line-height: 45px;
    }
  }
}
</style>
