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
import { defineEmits, defineProps, onMounted, ref } from 'vue';
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
