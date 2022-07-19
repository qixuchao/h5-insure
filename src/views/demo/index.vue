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
      <ProSelect v-model:show="isProSelectShow" :data-source="selectList" value-key="code" />
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

const [isShow, toggle] = useToggle(false);

const formInfo = ref({
  gender: '1',
  like: [],
  birth: '',
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
  { title: '北京', code: '1' },
  { title: '上海', code: '2' },
  { title: '广州', code: '3' },
  { title: '深圳', code: '4' },
  { title: '武汉', code: '5' },
  { title: '天津', code: '6' },
  { title: '杭州', code: '7' },
];

const isProSelectShow = ref(false);

const trial = () => {
  formRef.value.submit();
};

const clearSign1 = () => {
  signRef1.value?.clear();
};

const saveSign1 = () => {
  console.log('length', signRef1.value?.save('image/svg+xml', 1).length);
};

const reView = () => {
  signRef1.value?.setDataURL(
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzQ1IDIwNSIgd2lkdGg9IjE3Mi41IiBoZWlnaHQ9IjEwMi41Ij48cGF0aCBkPSJNIDE2Ni4xMzcsMTAuMjU4IEMgMTYzLjQwMSwxMy4zOTAgMTYzLjU2NywxMy41MDcgMTYwLjk5NywxNi43NTUiIHN0cm9rZS13aWR0aD0iNC4yNTQiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTYwLjk5NywxNi43NTUgQyAxNTkuMzEyLDE5LjYxMSAxNTkuMDc1LDE5LjQ0OCAxNTcuNDg1LDIyLjM3NSIgc3Ryb2tlLXdpZHRoPSI0LjEwNyIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAxNTcuNDg1LDIyLjM3NSBDIDE1My4wMDUsMjguNDExIDE1My4zNTIsMjguNjI5IDE0OS4wNzcsMzQuNzkxIiBzdHJva2Utd2lkdGg9IjMuMjU1IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDE0OS4wNzcsMzQuNzkxIEMgMTQ0LjIzOSw0My4zOTggMTQzLjkwNCw0My4xOTIgMTM5LjI4Myw1MS45MzciIHN0cm9rZS13aWR0aD0iMi43MDEiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTM5LjI4Myw1MS45MzcgQyAxMzYuNjAyLDU1Ljg1OCAxMzYuOTExLDU2LjAyMyAxMzQuNDIwLDYwLjA0MCIgc3Ryb2tlLXdpZHRoPSIzLjIzNiIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAxMzQuNDIwLDYwLjA0MCBDIDEzMi4zNjgsNjQuODQ2IDEzMi4wMTAsNjQuNjY0IDEzMC4wOTgsNjkuNTQ5IiBzdHJva2Utd2lkdGg9IjMuNDA2IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDEzMC4wOTgsNjkuNTQ5IEMgMTIxLjQ1MSw4Ny4wMjEgMTIxLjYyNyw4Ny4xMDUgMTEyLjkzOSwxMDQuNTU5IiBzdHJva2Utd2lkdGg9IjEuOTM5IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDExMi45MzksMTA0LjU1OSBDIDEwOS4zOTUsMTExLjY4MSAxMDkuNDY4LDExMS43MTIgMTA2LjEzMiwxMTguOTMwIiBzdHJva2Utd2lkdGg9IjIuNDgyIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDEwNi4xMzIsMTE4LjkzMCBDIDEwMi4zOTQsMTI3LjQzOSAxMDIuMzE4LDEyNy40MDMgOTguNzg0LDEzNi4wMDIiIHN0cm9rZS13aWR0aD0iMi42MjIiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gOTguNzg0LDEzNi4wMDIgQyA5Ni40NjQsMTQxLjc3MSA5Ni4zNjksMTQxLjczMSA5NC4wODIsMTQ3LjUxNCIgc3Ryb2tlLXdpZHRoPSIzLjAzMSIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA5NC4wODIsMTQ3LjUxNCBDIDkyLjM1OCwxNTEuNzU4IDkyLjMyOCwxNTEuNzQ0IDkwLjUxMywxNTUuOTUwIiBzdHJva2Utd2lkdGg9IjMuNDQzIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDkwLjUxMywxNTUuOTUwIEMgODguNzQ2LDE1OS42MjggODguODcwLDE1OS42ODIgODcuMTA1LDE2My4zNjEiIHN0cm9rZS13aWR0aD0iMy42ODYiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gODcuMTA1LDE2My4zNjEgQyA4NS43MzQsMTY2LjU5NCA4NS42OTEsMTY2LjU3NSA4NC40MDMsMTY5Ljg0NCIgc3Ryb2tlLXdpZHRoPSIzLjg4NyIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA4NC40MDMsMTY5Ljg0NCBDIDgzLjM1NywxNzIuMjU2IDgzLjQwNywxNzIuMjc0IDgyLjQ1MiwxNzQuNzIwIiBzdHJva2Utd2lkdGg9IjQuMTY2IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDgyLjQ1MiwxNzQuNzIwIEMgODEuNTU1LDE3Ny45NzMgODEuMjk2LDE3Ny44NjkgODAuMjgyLDE4MS4wNzEiIHN0cm9rZS13aWR0aD0iNC40OTMiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gODAuMjgyLDE4MS4wNzEgQyA3OC43OTUsMTgzLjc5NSA3OS4xMDgsMTgzLjkyNyA3Ny41NTcsMTg2LjYyOCIgc3Ryb2tlLXdpZHRoPSI0LjgzMyIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA3Ny41NTcsMTg2LjYyOCBDIDc2LjU1OCwxODguOTY3IDc2LjU0MywxODguOTQ5IDc1Ljc3OCwxOTEuMzc3IiBzdHJva2Utd2lkdGg9IjUuMTc5IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48L3N2Zz4=',
    { ratio: 1 },
  );
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
