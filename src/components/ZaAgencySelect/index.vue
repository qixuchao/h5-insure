<template>
  <ZaSelect
    :visible="visible"
    :data-source="dataSource"
    data-index="agencyName"
    :mode="mode"
    :clear-select="true"
    :show-back-icon="agencyIdList.length > 0"
    :select-value="selectValue"
    :is-target="targetIs"
    key-index="agencyId"
    @on-submit="handleSubmit"
    @on-close="handleClose"
    @on-item-click="handleItemClick"
    @on-back-icon-click="handleBackIconClick"
    @on-search="onSearch"
    @on-clear="onClear"
  />
</template>

<script lang="ts" setup>
import ZaSelect from '../ZaSelect/index.vue';
import { queryAgency, IAgency } from '@/api/modules/select';

const agencyIdList = ref<any>([]);
const selectValue = ref({});

const dataSource = ref<IAgency[]>([]);
const emits = defineEmits(['on-submit', 'update:visible']);
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String as () => 'single' | 'multiple',
    default: 'single',
  },
  // 页面传入的DataSource
  dataValue: {
    type: Array,
    default: () => [],
  },
  // 目标页面 只需显示机构
  isTarget: {
    type: Boolean,
    default: false,
  },
});
const targetIs = ref(false);
onMounted(() => {
  targetIs.value = props.isTarget;
});
const queryList = () => {
  queryAgency({
    directLevel: 1,
    memberType: agencyIdList.value[agencyIdList.value.length - 1]?.memberType,
    memberCode: agencyIdList.value[agencyIdList.value.length - 1]?.memberCode,
  }).then((res) => {
    const { status } = res;
    if (status === 200) {
      console.log(props.dataValue, '>>>>>>>>>>>>>');
      if (props.dataValue.length > 0) {
        dataSource.value = props.dataValue;
        selectValue.value = props.dataValue;
      } else {
        if (props.isTarget) {
          dataSource.value = res.data.data.filter((e) => e.memberType !== 'A');
        } else {
          dataSource.value = res.data.data;
        }
      }
    }
  });
};

watch(
  () => props.visible,
  (val) => {
    if (val) {
      queryList();
    }
  },
);

const handleSubmit = (item: any) => {
  selectValue.value = item;
  emits('on-submit', item);
  emits('update:visible', false);
};

const onSearch = (e) => {
  console.log(e);
  queryAgency({
    directLevel: 1,
    keyword: e,
    memberType: e ? 'ALL' : '',
    memberCode: agencyIdList.value[agencyIdList.value.length - 1]?.memberCode,
  }).then((res) => {
    const { status } = res;
    if (status === 200) {
      if (props.isTarget) {
        dataSource.value = res.data.data.filter((el) => el.memberType !== 'A');
      } else {
        dataSource.value = res.data.data;
      }
    }
  });
};
const onClear = () => {
  console.log('clear');
  queryList();
};
const handleClose = () => {
  emits('update:visible', false);
};

const handleItemClick = (item: IAgency) => {
  if (props.isTarget) {
    if (item.hasSubordinate && item.memberType !== 'T') {
      agencyIdList.value.push({ memberType: item.memberType, memberCode: item.memberCode });
      console.log(agencyIdList.value, 'agencyIdList.value');
      queryList();
    }
  } else {
    if (item.hasSubordinate) {
      agencyIdList.value.push({ memberType: item.memberType, memberCode: item.memberCode });
      console.log(agencyIdList.value, 'agencyIdList.value');
      queryList();
    }
  }
};

const handleBackIconClick = () => {
  if (agencyIdList.value.length > 0) {
    agencyIdList.value.pop();
    queryList();
  }
};
</script>

<style lang="scss" scoped></style>
