<template>
  <div class="com-search-filter-custom">
    <h2>{{ data.title }}</h2>
    <div class="list">
      <div v-for="(item, index) in list" :key="index" :class="['item', item.status]">
        <input
          v-show="item.status === 'typing'"
          :id="'cus' + index"
          ref="inputRef"
          v-model="item.text"
          autofocus
          maxlength="5"
          class="input"
          @blur="handleBlur(index)"
        />
        <div v-show="item.status === 'complete'" class="text">
          {{ item.text }}
          <van-icon name="cross" class="icon" @click="handleDelete(index)" />
        </div>
      </div>
      <div v-if="list.length < 6" class="add-button" @click="handleAdd">+ 添加标签</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { defineProps, reactive, watch, defineEmits, ref, nextTick } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Object,
    default: () => {},
  },
});

const emits = defineEmits(['onChange']);
const inputRef = ref<any>();
const list = reactive<any>(
  props.list.map((t) => ({
    text: t,
    status: 'complete',
  })),
);

const handleAdd = (e: any) => {
  if (list.findIndex((item: any) => item.status === 'typing') > -1) {
    return;
  }
  list.push({ status: 'typing', text: '' });
  nextTick(() => {
    const element: any = document.getElementById(`cus${(list.length || 1) - 1}`);
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth' });
    }, 200);
    element.focus();
  });
};

const handleBlur = (index: number) => {
  if (list[index].text !== '') {
    console.log(list);
    if (
      props.data.validate.includes(list[index].text) ||
      list.findIndex((t: any) => t.text === list[index].text && t.status === 'complete') > -1
    ) {
      Toast('标签已存在，无需重复创建');
      list.splice(index, 1);
    } else {
      list[index].status = 'complete';
    }
  } else {
    list.splice(index, 1);
  }
};

const handleDelete = (index: number) => {
  list.splice(index, 1);
};

watch(list, (val) => {
  emits(
    'onChange',
    val.map((item) => item.text),
  );
  // inputRef.value[(list.length || 1) - 1]?.focus?.();
});
</script>

<style lang="scss" scoped>
.com-search-filter-custom {
  h2 {
    color: $text-color;
    font-weight: bold;
    font-size: $zaui-font-size-lg;
    margin: 0 0 24px;
  }
  .list {
    font-size: $zaui-font-size-md;
    display: flex;
    flex-wrap: wrap;
    .add-button {
      width: 200px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background: $custom-detail-tag-custom-background;
      color: $primary-color;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    .item {
      height: 60px;
      line-height: 60px;
      border-radius: 8px;
      margin-right: 30px;
      margin-bottom: 30px;
      &.typing {
        width: 200px;
        padding: 0 30px;
        background: rgba(80, 64, 63, 0.8);
        color: #fff;
      }
      &.complete {
        padding: 0 20px;
        background: var(--van-primary-color);
        color: #fff;
        // border: 2px solid #e0e0e0;
      }
      .input {
        width: 100%;
        background: transparent;
        border: 0;
        height: 100%;
      }
      .text {
        .icon {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
