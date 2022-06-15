<template>
  <div class="doc-add">
    <van-cell-group inset>
      <van-cell is-link @click="select = true">
        <template #title> <span class="label">证件类型</span> <span class="star">*</span></template>
        <template #value>
          <span class="value">{{ name.label }}</span>
        </template>
      </van-cell>
      <van-field v-model="certNo" label-class="labe" input-align="right" placeholder="请输入证件号码">
        <template #label> 证件号码<span class="star">*</span> </template>
        <template #right-icon>
          <img :src="getIconUrl('customer.copy')" class="copy" @click="handleCopy(certNo)" />
        </template>
      </van-field>

      <van-cell title-class="label" title="有效起期" @click="handleTime(1)">
        <template #value>
          <span v-if="effectiveTime" class="value"> {{ effectiveTime }} </span>
          <span v-else class="cell-val"> 请输入有效起期</span>
        </template>
      </van-cell>
      <van-cell v-model="expiryTime" title="有效止期" title-class="label">
        <template #value>
          <span v-if="expiryTime" class="value" @click="handleTime(2)">
            {{ expiryTime }}
          </span>
          <span v-else class="cell-val" @click="handleTime(2)">请输入有效止期</span>
        </template>
        <template #right-icon>
          <span class="cheack-val">
            <van-checkbox v-model="isLongTerm" name="1" @change="handleCheck">长期有效</van-checkbox>
          </span>
        </template>
      </van-cell>

      <van-action-sheet
        v-model:show="select"
        :actions="actions"
        close-on-click-action
        cancel-text="取消"
        @select="onSelect"
      />

      <van-popup :show="show > 0" position="bottom" :style="{ height: '40%' }">
        <van-datetime-picker
          type="date"
          title="选择年月日"
          :min-date="new Date(1900, 0, 1)"
          :max-date="new Date(2050, 10, 1)"
          @confirm="selectTime"
          @cancel="show = 0"
        />
      </van-popup>
    </van-cell-group>

    <div v-if="route.query.certNo" v-resize class="footer">
      <van-button plain type="primary" class="btn1" @click="handleDelete">删除</van-button>
      <van-button type="primary" class="btn" @click="handleSave">保存</van-button>
    </div>

    <div v-else v-resize class="footer">
      <van-button type="primary" class="btn-enable" @click="handleSave">保存</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast, Dialog } from 'vant';
import dayjs from 'dayjs';
import { saveCertificate, removeCertificate } from '../../../../api/modules/customer';
import useCheckBack from '@/hooks/useCheckBack';
import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const info = reactive({
  certNo: '',
  effectiveTime: '',
  expiryTime: '',
  forever: '',
  isLongTerm: false,
  name: { label: '身份证', value: '01' },
  primaryKey: '',
});
const router = useRouter();
const route = useRoute();
console.log('>>>>route', route.query);
useCheckBack(info);

const actions = [
  {
    name: '身份证',
    value: '01',
  },
  {
    name: '护照',
    value: '07',
  },
  {
    name: '军官证',
    value: '04',
  },
  {
    name: '港澳通行证',
    value: '09',
  },
  {
    name: '台湾通行证',
    value: '11',
  },
  {
    name: '出生证',
    value: '12',
  },
  {
    name: '其他',
    value: '99',
  },
];

const { name, certNo, effectiveTime, expiryTime, isLongTerm } = toRefs(info);
watchEffect(() => {
  // name.value.value = (route.query.certType as string) || '01';
  // name.value.label = actions.find((x) => x.value === name.value.value)?.name || '身份证';
  certNo.value = route.query.certNo as string;
  isLongTerm.value = route.query.isLongTerm === 'Y';
  effectiveTime.value = route.query.effectiveTime ? dayjs(`${route.query.effectiveTime}`).format('YYYY-MM-DD') : '';
  expiryTime.value = route.query.expiryTime ? `${route.query.expiryTime}` : '';
  useCheckBack(info);
});

const show = ref(0);
const select = ref(false);
const disable = ref(false);

// 选择时间
const handleTime = (val: number) => {
  if (!disable.value) {
    show.value = val;
  }
};

const selectTime = (val: string) => {
  if (show.value === 1) {
    effectiveTime.value = dayjs(val).format('YYYY-MM-DD');
  } else if (show.value === 2) {
    expiryTime.value = dayjs(val).format('YYYY-MM-DD');
  }
  show.value = 0;
};

const onSelect = (val: { name: string; value: string }) => {
  console.log(val);
  name.value.label = val.name;
  name.value.value = val.value;
};

const handleCopy = (val: string) => {
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('value', val);
  input.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
    Toast('已复制');
  }
  document.body.removeChild(input);
};
const handleCheck = (e: boolean) => {
  disable.value = e;
  if (e) {
    expiryTime.value = '至长期有效';
  }
  isLongTerm.value = e;
};

// 保存
const handleSave = async () => {
  const val = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  const val1 = /^[0-9]*$/;
  if (!name.value.label || !certNo.value) {
    Toast('请输入证件号码');
    return;
  }
  console.log('>>>>>>', val.test(certNo.value));
  if (name.value.value === '01') {
    if (!val.test(certNo.value)) {
      Toast('证件号码有误，请重新输入');
      return;
    }
  } else {
    if (!val1.test(certNo.value)) {
      Toast('证件号格式不正确');
      return;
    }
  }
  console.log(effectiveTime.value, expiryTime.value, 1);
  if (effectiveTime.value >= expiryTime.value) {
    Toast('有效止期日期需晚于有效起期');
    return;
  }

  const res = await saveCertificate({
    ...route.query,
    certificate: {
      certNo: certNo.value,
      certType: name.value.value,
      effectiveTime: effectiveTime.value,
      expiryTime: expiryTime.value,
      isLongTerm: isLongTerm.value ? 'Y' : 'N',
      name: name.value.label,
      primaryKey: route.query.primaryKey,
    },
  });
  if (res.data.status === 200) {
    useCheckBack();
    Toast('保存成功！');
    router.back();
  }
};
// 删除
const handleDelete = async () => {
  Dialog.confirm({
    title: '提示',
    message: '您确认要删除证件信息吗?',
  }).then(async () => {
    await removeCertificate({
      ...route.query,
      certificate: {
        certNo: certNo.value,
        certType: name.value.value,
        effectiveTime: effectiveTime.value,
        expiryTime: expiryTime.value,
        isLongTerm: 'string',
        name: name.value.label,
        primaryKey: route.query.primaryKey,
      },
    });
    Toast('删除成功').$nextTick(() => {
      useCheckBack();
      router.back();
    });
  });
};
</script>

<style lang="scss" scoped>
.doc-add {
  ::v-deep {
    .van-cell {
      font-size: $zaui-font-size-lg;
      padding: 29px 30px;
      display: flex;
      align-items: center;
    }
    .van-cell__right-icon {
      line-height: 50px;
      height: 50px;
      color: #dddddd;
    }
    .van-cell-group--inset {
      margin: 0;
    }
  }

  .label {
    color: #616161;
  }
  .line {
    display: inline-block;
    width: 8px;
    height: 28px;
    background: $primary-color;
    vertical-align: middle;
    margin-right: 16px;
  }
  input::placeholder {
    color: #bcbcbc;
  }
  .cell-val {
    color: #bcbcbc;
  }

  .copy {
    width: 36px;
    vertical-align: sub;
  }
  .star {
    color: $primary-color;
  }
  .value {
    color: #343434;
  }
  .cheack-val {
    margin-left: 20px;
  }

  .footer {
    position: absolute;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    .btn {
      width: 470px;
      height: 88px;
      background: $btn-background;
      border-radius: 44px;
      font-weight: 600;
    }
    .btn1 {
      width: 200px;
      height: 88px;
      background: #ffffff;
      border-radius: 44px;
      border: 1px solid #ef4034;
      color: #ef4034;
      font-weight: 600;
    }
    .btn-enable {
      width: 690px;
      height: 88px;
      // background: linear-gradient(90deg, #ff8383 0%, #ffb285 100%);
      border: none;
      border-radius: 44px;
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #ffffff;
    }
  }
  .cbox {
    padding-left: 530px;
    padding-top: 32px;
  }
}
</style>
