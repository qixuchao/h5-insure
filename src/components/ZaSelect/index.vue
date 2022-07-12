<template>
  <van-popup
    :show="visible"
    round
    position="bottom"
    class="select-comp-popup"
    :style="{ height: '70%' }"
    @click-close-icon="handleClose"
  >
    <div class="com-pop-select">
      <div class="title">
        搜索
        <div class="back-icon">
          <div v-if="showBackIcon" class="back-icon-left" @click="handleBackIconClick">
            <img :src="backImg" alt="" />
            <!-- <span>上一级</span> -->
          </div>
          <!-- <div v-if="count > 0" class="back-icon-right" @click="onClearSelect">清空</div> -->
        </div>
        <div class="close-img">
          <img :src="closeImg" alt="" @click="handleClose" />
        </div>
        <!-- <Icon v-show="showBackIcon" name="back" class="back-icon" @click="handleBackIconClick"
          ><span :style="{ color: '#616161' }">上一级</span></Icon
        > -->
      </div>
      <div class="search">
        <van-search
          v-model="search"
          shape="round"
          clearable
          :left-icon="getIconUrl('target.searchImg')"
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @clear="onClear"
        />
      </div>
      <component :is="selectComponent" v-model="select">
        <van-cell-group inset>
          <van-cell v-for="(item, index) in filterDataSource" :key="index" class="cell">
            <template #title>
              <component
                :is="optionComponent"
                :shape="props.mode === 'multiple' ? 'square' : 'round'"
                :name="item[keyIndex]"
                :label-disabled="true"
              >
                <div @click="handleClick(item)">{{ item[dataIndex] }}</div>
              </component>
              <!-- <van-checkbox :name="item[keyIndex]" :label-disabled="true" shape="round">
                <div @click="handleClick(item)">{{ item[dataIndex] }}</div></van-checkbox
              > -->
            </template>
            <template #right-icon>
              <van-icon v-if="showNextIconFun(item)" name="arrow" color="#DDDDDD" :style="{ marginRight: '15px' }" />
            </template>
          </van-cell>
        </van-cell-group>
      </component>

      <ZaEmpty
        v-if="filterDataSource.length === 0"
        :empty-img="emptyImg"
        title="没有找到相关信息~"
        empty-class="empty-select"
      />

      <div class="footer">
        <van-button type="primary" class="btn" @click="handleSubmit">确定</van-button>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts" setup>
import { Icon } from 'vant';
import ZaEmpty from '../ZaEmpty/index.vue';
import emptyImg from '@/assets/images/searchempty.png';
import backImg from '@/assets/images/back.png';
import closeImg from '@/assets/images/themes/default/target/close.png';
import { useThemesStore } from '@/store/themes';
import './index.scss';

const { getIconUrl } = useThemesStore();
const props = defineProps({
  title: {
    type: String,
    default: '搜索',
  },
  dataSource: {
    type: Array as () => any[],
    default: () => [],
  },
  dataIndex: {
    type: String,
    default: 'name',
  },
  keyIndex: {
    type: String,
    default: 'id',
  },
  visible: {
    type: Boolean,
    required: true,
    default: () => false,
  },
  mode: {
    type: String as () => 'single' | 'multiple',
    default: 'single',
  },
  showBackIcon: {
    type: Boolean,
    default: false,
  },
  showNextIcon: {
    type: Boolean,
    default: true,
  },
  selectValue: {
    type: Array,
    default: () => [],
  },
  searchCurrentInfo: {
    type: Boolean,
    default: false,
  },
  clearSelect: {
    type: Boolean,
    default: false,
  },
  // 目标页面 只需显示机构
  isTarget: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'on-submit',
  'on-close',
  'update:visible',
  'onItemClick',
  'onBackIconClick',
  'onClear',
  'onSearch',
]);
const select = ref(props.mode === 'single' ? [] : []);
const search = ref('');
const showNextIconFun = (item) => {
  if (item.memberType === 'A') {
    return false;
  }
  if (props.isTarget && item.memberType === 'T') {
    return false;
  }
  if (props.showNextIcon === false) {
    return false;
  }
  return true;
};
const onClearSelect = () => {
  select.value = props.mode === 'single' ? [] : [];
};
// const onChange = (arr) => {
//   console.log(arr);
//   if (props.mode === 'single') {
//     select.value = arr[arr.length - 1] ? [arr[arr.length - 1]] : [];
//   }
// };
watch(select, (arr, oldarr) => {
  if (JSON.stringify(arr) === JSON.stringify(oldarr)) {
    return;
  }
  if (props.mode === 'single') {
    select.value = arr[arr.length - 1] ? [arr[arr.length - 1]] : [];
  }
});
const handleClose = () => {
  emit('on-close');
  emit('update:visible', false);
};

const handleClick = (item: any) => {
  emit('onItemClick', item);
};

const handleSubmit = () => {
  if (props.mode === 'single') {
    emit(
      'on-submit',
      // props.dataSource.find((x) => x[props.keyIndex] === select.value),
      props.dataSource.filter((x) => select.value.includes(x[props.keyIndex])),
    );
  } else {
    emit(
      'on-submit',
      props.dataSource.filter((x) => select.value.includes(x[props.keyIndex])),
    );
  }
};

const count = computed(() => {
  // if (props.mode === 'single') {
  //   return select.value ? 1 : 0;
  // }
  return select.value.length;
});

const filterDataSource = computed(() => {
  if (props.searchCurrentInfo) {
    return props.dataSource.filter((x) => x[props.dataIndex] && x[props.dataIndex].includes(search.value));
  }
  return props.dataSource;
  // return props.dataSource.filter((x) => x[props.dataIndex] && x[props.dataIndex].includes(search.value));
});

const selectComponent = computed(() => {
  return props.mode === 'multiple' ? 'van-checkbox-group' : 'van-checkbox-group';
});

const optionComponent = computed(() => {
  return props.mode === 'multiple' ? 'van-checkbox' : 'van-checkbox';
});

watch(
  () => props.dataSource,
  (newVal, oldVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
      select.value = props.mode === 'single' ? [] : [];
    }
  },
);

watch(
  () => props.visible,
  (val) => {
    if (val && props.selectValue) {
      // if (props.mode === 'single') {
      //   console.log(
      //     '我就看看',
      //     props.selectValue.map((x) => x[props.keyIndex]),
      //   );
      select.value =
        Object.keys(toRaw(props.selectValue)).length !== 0 ? props.selectValue.map((x) => x[props.keyIndex]) : [];
      // } else {
      //   select.value = props.selectValue.map((x) => x[props.keyIndex]);
      // }
    }
  },
  {
    immediate: true,
  },
);
watch(
  () => props.selectValue,
  (newval, oldval) => {
    if (JSON.stringify(newval) === JSON.stringify(oldval)) {
      return;
    }
    if (newval[0]) {
      select.value = [newval[0].memberCode];
    }
  },
  {
    immediate: true,
  },
);
const handleBackIconClick = () => {
  emit('onBackIconClick');
};
const onSearch = (e) => {
  console.log(e);
  emit('onSearch', e);
};
const onClear = () => {
  emit('onClear');
};
</script>
