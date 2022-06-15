<template>
  <div class="family-edit">
    <van-cell-group inset>
      <van-cell is-link title-class="label">
        <template #title>
          家庭关系
          <span class="star">*</span>
        </template>
        <template #value>
          <span v-if="relation.value" class="value" @click="handleSelect('2')">{{ relation.label }}</span>
          <span v-else @click="handleSelect('2')">请选择</span>
        </template>
      </van-cell>
      <van-field v-model="name" label-class="label" input-align="right" placeholder="请输入成员姓名">
        <template #label>姓名<span class="star">*</span> </template>
      </van-field>
      <van-cell is-link title-class="label">
        <template #title>证件类型</template>
        <template #value>
          <span v-if="certType.value" class="value" @click="handleSelect('1')">{{ certType.lable }}</span>
          <span v-else @click="handleSelect('1')">请选择</span>
        </template>
      </van-cell>
      <van-field
        v-model="certNo"
        label-class="label"
        label="证件号码"
        input-align="right"
        placeholder="请输入成员证件号码"
      />

      <van-cell title="出生日期" title-class="label" is-link @click="show = true">
        <template #value>
          <span v-if="birthday" class="value">{{ birthday }}</span>
          <span v-else class="cell-val">请选择成员出生日期</span>
        </template>
      </van-cell>
      <van-field
        v-model="phone"
        label-class="label"
        type="number"
        label="手机号码"
        input-align="right"
        placeholder="请输入成员的手机号码"
      />
    </van-cell-group>
    <van-action-sheet
      v-model:show="select"
      :actions="actions"
      close-on-click-action
      cancel-text="取消"
      @select="onSelect"
    />

    <van-popup v-model:show="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        type="date"
        title="选择年月日"
        :min-date="new Date(1900, 0, 1)"
        :max-date="new Date()"
        @confirm="handleDate"
        @cancel="show = false"
      />
    </van-popup>

    <div v-if="route.query.name" v-resize class="footer">
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
import { saveFamilyMember, removeFamilyMember } from '@/api/modules/customer';
import useCheckBack from '@/hooks/useCheckBack';

const router = useRouter();

const docType = [
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

const relationType = [
  {
    name: '父亲',
    value: '父亲',
  },
  {
    name: '母亲',
    value: '母亲',
  },
  {
    name: '配偶',
    value: '配偶',
  },
  {
    name: '女儿',
    value: '女儿',
  },
  {
    name: '儿子',
    value: '儿子',
  },
  {
    name: '其他',
    value: '其他',
  },
];

const getBirthday = (idCard: string) => {
  let birthday = '';
  if (idCard != null && idCard !== '') {
    if (idCard.length === 15) {
      birthday = `19${idCard.substr(6, 6)}`;
    } else if (idCard.length === 18) {
      birthday = idCard.substr(6, 8);
    }
    birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-');
  }
  return birthday;
};

const getDocName = (val: string) => {
  let name = '';
  docType.forEach((item) => {
    if (item.value === val) {
      name = item.name;
    }
  });
  return name;
};
const getRelationName = (val: string) => {
  let name = '';
  docType.forEach((item) => {
    if (item.value === val) {
      name = item.name;
    }
  });
  return name;
};

const history = useRouter();
const route = useRoute();
const info = reactive({
  birthday: '',
  certNo: '',
  certType: { lable: '', value: '' },
  name: '',
  phone: '',
  relation: {
    label: '',
    value: '',
  },
});

useCheckBack(info);

const show = ref(false);
const select = ref(false);
const actions = ref();
const type = ref('1');
const { birthday, certNo, certType, name, phone, relation } = toRefs(info);
watchEffect(() => {
  console.log('>>>>>', route.query);
  certNo.value = route.query.certNo as string;
  birthday.value = route.query.birthday as string;
  phone.value = route.query.phone as string;
  name.value = route.query.name as string;
  certType.value.value = (route.query.certType as string) || '01';
  certType.value.lable = getDocName(route.query.certType as string) || '身份证';
  relation.value.value = route.query.relation as string;
  relation.value.label = route.query.relation as string;
  useCheckBack(info);
});
watchEffect(() => {
  if (certType.value.value === '01' && certNo.value?.length >= 15) {
    birthday.value = getBirthday(certNo.value);
  }
});

const handleSelect = (val: string) => {
  type.value = val;
  if (val === '1') {
    actions.value = docType;
  } else {
    actions.value = relationType;
  }
  select.value = true;
};

const handleDate = (val: string) => {
  birthday.value = dayjs(val).format('YYYY-MM-DD');
  show.value = false;
};

const onSelect = (val: { name: string; value: string }) => {
  if (type.value === '1') {
    certType.value.lable = val.name;
    certType.value.value = val.value;
  } else {
    relation.value.label = val.name;
    relation.value.value = val.value;
  }
};

// eslint-disable-next-line consistent-return
const handleSave = async () => {
  const na = /(^[\u4e00-\u9fa5·]{2,20}$)|(^[a-zA-Z.]{4,40}$)/;
  const ph = /^1[3-9]\d{9}$/;
  const val1 = /^[0-9]*$/;
  const val2 = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

  if (!name.value || !relation.value.value) {
    return Toast('请填写必填项');
  }
  if (!na.test(name.value)) {
    return Toast('请填写正确姓名');
  }
  if (phone.value && !ph.test(phone.value)) {
    return Toast('请输入正确手机号码');
  }
  if (certType.value.value === '01') {
    if (certNo.value && !val2.test(certNo.value)) {
      return Toast('证件号码有误，请重新输入');
    }
  } else if (certNo.value && !val1.test(certNo.value)) {
    return Toast('证件号码有误，请重新输入');
  }

  await saveFamilyMember({
    ...route.query,
    familyMember: {
      birthday: birthday.value,
      certNo: certNo.value,
      certType: certType.value.value,
      name: name.value,
      phone: phone.value,
      primaryKey: route.query.primaryKey,
      relation: relation.value.value,
    },
  });
  useCheckBack();
  Toast('保存成功！');
  router.back();
};

const handleDelete = async () => {
  Dialog.confirm({
    title: '提示',
    message: '您确认要删除家庭成员信息吗?',
  })
    .then(async () => {
      await removeFamilyMember({
        ...route.query,
        familyMember: {
          birthday: birthday.value,
          certNo: certNo.value,
          certType: certType.value.value,
          name: name.value,
          phone: phone.value,
          primaryKey: route.query.primaryKey,
          relation: relation.value.value,
        },
      });
      Toast('删除成功').$nextTick(() => {
        useCheckBack();
        history.back();
      });
    })
    .catch(() => {});
};
</script>

<style lang="scss" scoped>
.family-edit {
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
  }

  .label {
    color: #616161;
  }
  .value {
    color: #343434;
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

  .van-cell-group--inset {
    margin: 0;
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
      border-radius: 44px;
      border: none;
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #ffffff;
    }
  }
}
</style>
