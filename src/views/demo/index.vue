<template>
  <ProPageWrap>
    <ProForm ref="formRef">
      <ProField
        v-model="formInfo.birth"
        :rules="[{ required: true, message: '请选择' }]"
        name="birth"
        label="出生日期"
        is-link
        placeholder="请选择"
        @click="toggle(true)"
      ></ProField>
      <ProPicker
        v-model="formInfo.city"
        label="城市"
        name="city"
        :data-source="selectList"
        is-link
        placeholder="请选择城市"
        :rules="[{ required: true, message: '请选择城市' }]"
      />
      <ProPicker
        v-model="formInfo.city"
        label="城市 isView"
        name="city"
        :data-source="selectList"
        is-link
        placeholder="请选择城市"
        :rules="[{ required: true, message: '请选择城市' }]"
        is-view
      />
      <ProDatePicker
        v-model="formInfo.dateTime"
        label="datetime"
        type="datetime"
        name="datetime"
        :rules="[{ required: true, message: '请选择' }]"
      />
      <ProDatePicker
        v-model="formInfo.date"
        label="date"
        type="date"
        name="date"
        :rules="[{ required: true, message: '请选择' }]"
      />
      <ProDatePicker v-model="formInfo.time" label="time" type="time" name="date" />
      <ProDatePicker v-model="formInfo.yearMonth" label="year-month" type="year-month" name="date" />
      <ProDatePicker v-model="formInfo.monthDay" label="month-day" type="month-day" name="date" />
      <ProDatePicker v-model="formInfo.datehour" label="datehour" type="datehour" name="date" />
      <ProField v-model="formInfo.gender" name="gender" label="性别" :rules="[{ required: true, message: '请选择' }]">
        <template #input>
          <ProRadioButton v-model="formInfo.gender" :options="options" />
        </template>
      </ProField>
      <ProField v-model="formInfo.like" name="like" label="爱好" :rules="[{ required: true, message: '请选择' }]">
        <template #input>
          <ProCheckboxButton v-model="formInfo.like" :options="options" />
        </template>
      </ProField>

      <VanButton type="primary" @click="trial">试算</VanButton>
    </ProForm>
    <ProCard title="图片上传">
      <ProImageUpload :max-count="9" />
    </ProCard>
    <ProCard title="身份证上传">
      <ProIDCardUpload />
    </ProCard>

    <ProCard title="折叠卡片" :show-fold="true">
      <p>卡片内容，可以被折叠</p>
      <p>卡片内容，可以被折叠</p>
      <p>卡片内容，可以被折叠</p>
      <p>卡片内容，可以被折叠</p>
    </ProCard>
    <ProCard title="link卡片" link="查看更多" @link-click="handleLinkClick">
      <p>卡片内容，查看更多</p>
    </ProCard>
    <ProCard title="自定义">
      <template #extra> 自定义按钮 </template>
      自定义
    </ProCard>
    <ProCard title="PDF预览">
      <div class="pdf-preview">
        <van-button v-for="(item, index) in pdfList" :key="index" type="primary" class="item" @click="preview(index)">{{
          item.title
        }}</van-button>
      </div>
    </ProCard>
    <ProCard title="ProSelect">
      <van-button type="primary" @click="isProSelectShow = true">弹出选择</van-button>
      <ProSelect v-model:show="isProSelectShow" :data-source="selectList" />
    </ProCard>
    <ProCard title="电子签名1">
      <ProSign ref="signRef1" selector="sign1"></ProSign>
      <VanButton @click="saveSign1">保存</VanButton>
      <VanButton @click="clearSign1">清除</VanButton>
      <VanButton @click="reView">回显</VanButton>
    </ProCard>
    <ProCard title="电子签名2">
      <ProSign ref="signRef2" selector="sign2"></ProSign>
    </ProCard>
    <ProCard title="单元格">
      <ProCell title="12313131,，测侧沃尔沃认为问题问题提问试-——" content="123132侧呃呃呃312312"></ProCell>
    </ProCard>
    <ProChart :min="0" :max="100" :step-value="10" />
    <ProFixedButton :button-image="ProFixedButtonDefaultImage" />
    <ProCard title="ProTable">
      <ProTable :columns="columns" class="table" :data-source="dataSource" />
      <p>
        注意：因行内样式无法正确转换未rem，columns中的width，目前仅支持80-200，如需其他的宽度，请在组件内对应添加&.table-cell-width-的样式
      </p>
    </ProCard>
  </ProPageWrap>
  <van-popup v-model:show="isShow" position="bottom">
    <van-datetime-picker
      type="time"
      @confirm="
        (value) => {
          formInfo.birth = value;
          toggle(false);
        }
      "
      @cancel="toggle(false)"
    />
  </van-popup>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import ProRadioButton from '@/components/ProRadioButton/index.vue';
import ProCheckboxButton from '@/components/ProCheckboxButton/index.vue';
import ProChart from '@/components/ProChart/index.vue';
import ProImageUpload from '@/components/ProImageUpload/index.vue';
import ProCard from '@/components/ProCard/index.vue';
import ProDivider from '@/components/ProDivider/index.vue';
import ProSelect from '@/components/ProSelect/index.vue';
import pdfPreview from '@/utils/pdfPreview';
import ProFixedButton from '@/components/ProFixedButton/index.vue';
import ProFixedButtonDefaultImage from '@/assets/images/customer/da.png';
import ProIDCardUpload from '@/components/ProIDCardUpload/index.vue';
import ProTable from '@/components/ProTable/index.vue';
import ProDatePicker from '@/components/ProDatePicker/index.vue';
import ProPicker from '@/components/ProPicker/index.vue';

const [isShow, toggle] = useToggle(false);

const formInfo = ref({
  gender: '1',
  like: [],
  birth: '',
  city: '',
  date: '',
  dateTime: '2020-02-02 02:02',
  time: '',
  yearMonth: '',
  monthDay: '',
  datehour: '',
});
const formRef = ref();
const options = [
  {
    label: '男',
    value: '1',
  },
  {
    label: '女',
    value: '2',
  },
];
const signRef1 = ref(null);
const signRef2 = ref(null);
const state = reactive({
  btns: [1, 2],
});

const pdfList = [
  {
    title: 'pdfedgherth01',
    url: 'https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO_SE/T16048_WS_C422_PRO_SE_V4_WEB.pdf',
  },
  {
    title: 'pdf二哥哥让他个人提供2',
    url: 'https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO_SE/C16048_WS_C422_PRO_SE_V4_WEB.pdf',
  },
  {
    title: 'pd认同感和认同感让他f3',
    url: 'https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO_SE/E16048_WS_C422_PRO_SE_UM_V4_WEB.pdf',
  },
  {
    title: 'pd任何个人挺好认同和f4',
    url: 'https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO/SE/Manual/J14043_WS_C422_PRO_SE_UM_V2_WEB.pdf',
  },
  {
    title: 'pdf让他忽然他还让他还让他合同任何人5',
    url: 'https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_SAGE_10G/Manual/T16047_WS_C422_SAGE_10G_V3_WEB.pdf',
  },
];

const selectList = [
  { label: '北京', value: '1' },
  { label: '上海', value: '2' },
  { label: '广州', value: '3' },
  { label: '深圳', value: '4' },
  { label: '武汉', value: '5' },
  { label: '天津', value: '6' },
  { label: '杭州', value: '7' },
];

const isProSelectShow = ref(false);

const trial = () => {
  formRef.value.validate();
};

const clearSign1 = () => {
  signRef1.value?.clear();
};

const saveSign1 = () => {
  const data = signRef1.value?.save();
  localStorage.setItem('test_sign', data);
};

const reView = () => {
  const data = localStorage.getItem('test_sign');
  if (data) {
    signRef1.value?.setDataURL(data, { ratio: 1 });
  }
};

const handleLinkClick = () => {
  console.log('link click');
};

const preview = (index: number) => {
  pdfPreview(pdfList, index);
};

const columns = [
  {
    title: '险种名称',
    dataIndex: 'key1',
    width: 180,
  },
  {
    title: '保额',
    dataIndex: 'key2',
  },
  {
    title: '保障期间',
    dataIndex: 'key3',
    width: 110,
  },
  {
    title: '缴费期间',
    dataIndex: 'key4',
    width: 110,
  },
  {
    title: '保费',
    dataIndex: 'key5',
    width: 120,
  },
  {
    title: 'columnA',
    dataIndex: 'key6',
    width: 120,
  },
  {
    title: 'columnB',
    dataIndex: 'key7',
    width: 120,
  },
];

const dataSource = [
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
  {
    key1: '众安家庭共享保额意外险',
    key2: '50万',
    key3: '1年期',
    key4: '一次交清',
    key5: '988.00',
    key6: 'columnA',
    key7: 'columnB',
  },
];
</script>

<style lang="scss" scoped>
.pdf-preview {
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 30px;
    margin-bottom: 30px;
  }
}
.table {
  margin: 30px 0;
}
</style>
