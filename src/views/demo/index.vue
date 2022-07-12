<template>
  <ZaPageWrap>
    <VanForm ref="formRef">
      <VanField
        v-model="formInfo.birth"
        :rules="[{ required: true, message: '请选择' }]"
        name="birth"
        label="出生日期"
        is-link
        placeholder="请选择"
        @click="toggle(true)"
      ></VanField>
      <VanField v-model="formInfo.gender" name="gender" label="性别" :rules="[{ required: true, message: '请选择' }]">
        <template #input>
          <ProRadioButton v-model="formInfo.gender" :options="options" />
        </template>
      </VanField>
      <VanField v-model="formInfo.like" name="like" label="爱好" :rules="[{ required: true, message: '请选择' }]">
        <template #input>
          <ProCheckboxButton v-model="formInfo.like" :options="options" />
        </template>
      </VanField>

      <VanButton type="primary" @click="trial">试算</VanButton>
    </VanForm>
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
  </ZaPageWrap>
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
import ProImageUpload from '@/components/ProImageUpload/index.vue';
import ProCard from '@/components/ProCard/index.vue';
import ProDivider from '@/components/ProDivider/index.vue';
import ProSelect from '@/components/ProSelect/index.vue';
import pdfPreview from '@/utils/pdfPreview';

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
const state = reactive({
  btns: [1, 2],
});

const pdfList = [
  {
    title: 'pdf01',
    url: 'https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO_SE/T16048_WS_C422_PRO_SE_V4_WEB.pdf',
  },
  {
    title: 'pdf2',
    url: 'https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO_SE/C16048_WS_C422_PRO_SE_V4_WEB.pdf',
  },
  {
    title: 'pdf3',
    url: 'https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO_SE/E16048_WS_C422_PRO_SE_UM_V4_WEB.pdf',
  },
  {
    title: 'pdf4',
    url: 'https://dlsvr04.asus.com.cn/pub/ASUS/mb/Socket2066/WS_C422_PRO/SE/Manual/J14043_WS_C422_PRO_SE_UM_V2_WEB.pdf',
  },
  {
    title: 'pdf5',
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
