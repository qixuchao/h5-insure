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
    <ProDivider />
    <ProImageUpload />
    <ProDivider />
    <ProCard title="折叠卡片" :show-fold="true">
      <p>卡片内容，可以被折叠</p>
      <p>卡片内容，可以被折叠</p>
      <p>卡片内容，可以被折叠</p>
      <p>卡片内容，可以被折叠</p>
    </ProCard>
    <ProDivider />
    <ProCard title="link卡片" link="查看更多" @link-click="handleLinkClick">
      <p>卡片内容，查看更多</p>
    </ProCard>
    <ProDivider />
    <ProCard title="PDF预览">
      <div class="pdf-preview">
        <van-button v-for="(item, index) in pdfList" :key="index" type="primary" class="item" @click="preview(index)">{{
          item.title
        }}</van-button>
      </div>
    </ProCard>
    <ProDivider />
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
  signRef1.value?.save(null, 0.5);
};

const reView = () => {
  signRef1.value?.setDataURL(
    'data:image/png;base64,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',
    { ratio: 1 },
  );
};

const handleLinkClick = () => {
  console.log('link click');
};

const preview = (index: number) => {
  pdfPreview(pdfList, index);
};
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
</style>
