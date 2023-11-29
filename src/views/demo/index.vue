<template>
  <ProPageWrap>
    <ProFilePreview type="richText" :content="fileContent">
      <template #title>
        <!-- <div class="title">标题</div> -->
      </template>
      <!-- <template #footer-btn>
        <div class="footer-button">
          <van-button type="primary">了解并继续</van-button>
        </div>
      </template> -->
    </ProFilePreview>
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
        v-model="formInfo.city1"
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
      <!-- <ProCascader
        v-model="formInfo.area"
        v-model:field0="formInfo.province"
        v-model:field1="formInfo.city"
        v-model:field2="formInfo.area"
        name="address"
        :data-source="region"
        label="地址选择"
        :mapping="{ label: 'name', value: 'code', children: 'children' }"
      /> -->
      <VanButton type="primary" @click="trial">试算</VanButton>
    </ProForm>
    <ProCard title="图片上传">
      <ProImageUpload v-model="images" :max-count="9" />
    </ProCard>
    <ProCard title="身份证上传">
      <ProIDCardUpload v-model:front="front" v-model:back="back" />
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

  <ProStackPicker
    v-model="value"
    :options="District"
    :field-names="{
      text: 'label',
      value: 'value',
      children: 'children',
    }"
    @change="
      (value) => {
        console.log('onChange', value);
      }
    "
    @finish="stackFinish"
  ></ProStackPicker>
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
import ProFixedButtonDefaultImage from '@/assets/images/demo/da.png';
import ProIDCardUpload from '@/components/ProIDCardUpload/index.vue';
import ProTable from '@/components/ProTable/index.vue';
import ProDatePicker from '@/components/ProDatePicker/index.vue';
import ProPicker from '@/components/ProPicker/index.vue';
import ProCascader from '@/components/ProCascader/index.vue';
import useDicData from '@/hooks/useDictData';
import ProFilePreview from '@/components/ProFilePreview/index.vue';
import { ProStackPicker } from '@/components/RenderForm';

const [isShow, toggle] = useToggle(false);
const region = useDicData('NATIONAL_REGION_CODE'); // 全国区域编码
const formInfo = ref({
  gender: '1',
  like: [],
  birth: '',
  city1: '',
  date: '',
  dateTime: '2020-02-02 02:02',
  time: '',
  yearMonth: '',
  monthDay: '',
  datehour: '',
  province: '140000',
  city: '140300',
  area: '140303',
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
const images = ref([]);
const front = ref('');
const back = ref('');

const fileContent = ref(
  '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>本次寄快递的计费规则是否清晰？</p>\n</body>\n</html>',
);
// 'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20220805161514385dd71e0a2b90a420eb46c654890fc5b67/wecom-temp-459b63632080ea2afdab795e3a1195d9.png?Expires=1660292114&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=d28WE7hADK16%2FRG%2BA4KA4BK4Vq8%3D',
// 'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20220805155700747410a463c03734433b33a398ea9b4b036/vue3%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86Pinia.pdf?Expires=1660291021&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=9VlzAH%2Funj2kjD%2F4j8FYiBe7TaU%3D',
// '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>本次寄快递的计费规则是否清晰？</p>\n</body>\n</html>',
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
    title: '交费期间',
    dataIndex: 'key4',
    width: 110,
  },
  {
    title: '保费',
    dataIndex: 'key5',
    width: 120,
  },
  {
    title: 'render',
    render(row: any, index: number) {
      return row.key1 + index;
    },
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

const [visible, setVisible] = useToggle(false);
const value = ref(['340000', '340800', '340822']);

const District = [
  {
    value: '340000',
    label: '安徽省',
    children: [
      {
        value: '340800',
        label: '安庆市',
        children: [
          {
            value: '340803',
            label: '大观区',
            children: [],
          },
          {
            value: '340822',
            label: '怀宁县',
            children: [],
          },
          {
            value: '340882',
            label: '其它区',
            children: [],
          },
        ],
      },
    ],
  },
  {
    value: '310000',
    label: '上海',
    children: [
      {
        value: '310100',
        label: '上海市',
        children: [
          {
            value: '310113',
            label: '宝山区',
            children: [],
          },
          {
            value: '310105',
            label: '长宁区',
            children: [],
          },
          {
            value: '310230',
            label: '崇明县',
            children: [],
          },
          {
            value: '310152',
            label: '川沙区',
            children: [],
          },
        ],
      },
    ],
  },
];

const stackFinish = () => {};
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
