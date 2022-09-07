<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-21 19:34:02
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-12 11:02:17
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ZaAgencyUserSelect/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ZaSelect
    :visible="visible"
    :show-next-icon="false"
    :data-source="dataSource"
    :mode="mode"
    data-index="memberName"
    key-index="memberCode"
    :select-value="selectValue"
    :search-current-info="true"
    @on-submit="handleSubmit"
    @on-close="handleClose"
  />
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import ZaSelect from '../ZaSelect/index.vue';
import { queryAgencyUser, IAgencyUser } from '@/api/modules/select';
import { getTeamTarget } from '@/api/modules/target';

const dataSource = ref<IAgencyUser[]>([]);
const selectValue = ref([]);
const emits = defineEmits(['on-submit', 'update:visible']);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  memberType: {
    type: String,
    default: '',
  },
  memberCode: {
    type: String,
    default: '',
  },
  mode: {
    type: String as () => 'single' | 'multiple',
    default: 'single',
  },
});

watch(
  () => props.visible,
  (val) => {
    selectValue.value = [];
    if (val) {
      getTeamTarget({
        memberCode: props.memberCode,
        memberType: props.memberType,
        effectiveTime: `${dayjs().format('YYYY')}-01-01 00:00:00`,
        expriyTime: `${dayjs().format('YYYY')}-12-31 00:00:00`,
      }).then((res) => {
        const { status } = res;
        if (status === 200) {
          dataSource.value = res.data.data.teamMembers;
        }
      });
    }
  },
);
const handleSubmit = (item: IAgencyUser) => {
  emits('on-submit', item);
  emits('update:visible', false);
};

const handleClose = () => {
  emits('update:visible', false);
};
</script>

<style lang="scss" scoped></style>
