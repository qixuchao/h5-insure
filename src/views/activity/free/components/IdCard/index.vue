<template>
  <van-form>
    <van-cell-group>
      <van-field v-model="state.name" name="name" label="姓名" clearable placeholder="请输入姓名" />
      <van-field v-model="state.idCard" name="idCard" label="身份证" clearable placeholder="请输入身份证号">
      </van-field>
    </van-cell-group>
    <div class="submit" @click="onSubmit"></div>
    <div class="agree">
      <van-checkbox v-model="state.agree" shape="square"> </van-checkbox>
      <div>
        我已阅读并同意
        <ProPDFviewer
          v-for="(item, index) in attachmentList || []"
          :key="index"
          class="file-name"
          :title="`《${item.attachmentName}》`"
          :content="item.attachmentUri"
          type="pdf"
        >
        </ProPDFviewer>
      </div>
    </div>
  </van-form>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  attachmentList: {
    type: Array,
    default: () => [],
  },
});

const state = reactive({
  name: '',
  idCard: '',
  agree: '',
});

const onSubmit = () => {
  console.log(state);
  router.push('/activity/productDetail');
};
</script>
<style lang="scss" scoped>
:deep(.van-checkbox) {
  width: 100px;
}

:deep(.pdf-viewer .title) {
  color: #ff6d23;
}
</style>
