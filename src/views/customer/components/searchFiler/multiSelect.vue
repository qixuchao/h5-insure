<template>
  <div class="multi-select">
    <div class="insure-list">
      <h2>{{ data.title }}</h2>
      <div class="item-wrap">
        <div
          v-for="el in data.list"
          :key="el.title"
          :class="[{ checked: checked.indexOf(el.value) >= 0 }, el.size === 'sm' ? 'item-sm' : 'item-md']"
          class="fil-item comm"
          @click="handleChange(el)"
        >
          {{ el.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  // eslint-disable-next-line vue/require-default-prop
  value: {
    type: Array,
    required: false,
    default: () => [],
  },
});
const emit = defineEmits(['on-change']);

const { data, value } = toRefs(props);
const checked = ref(value.value);

watchEffect(() => {
  checked.value = value.value;
});

const handleChange = (val: { title: string; value: string }) => {
  const newArr = [...checked.value];
  if (newArr.indexOf(val.value) >= 0) {
    newArr.splice(newArr.indexOf(val.value), 1);
  } else {
    newArr.push(val.value);
  }
  checked.value = newArr;
  emit('on-change', [...newArr]);
};
</script>

<style lang="scss">
.multi-select {
  .insure-list {
    margin-bottom: 48px;
  }
  h2 {
    color: #343434;
    font-weight: bold;
    font-size: $zaui-font-size-lg;
    margin: 0 0 24px;
  }
  .item-wrap {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .comm {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: $zaui-font-size-sm;
      color: #616161;
      margin-bottom: 20px;
    }
  }

  .fil-item {
    background: #ffffff;
    border-radius: 8px;
    border: 2px solid #e0e0e0;
  }

  .item-sm {
    width: 115px;
    height: 60px;
    margin-left: 20px;
  }

  .item-sm:nth-of-type(4n + 1) {
    margin-left: 0;
  }

  .item-md {
    width: 160px;
    height: 60px;
  }
  .item-md:nth-of-type(3n + 2) {
    margin: 0 20px;
  }

  .checked {
    background: $primary-color !important;
    color: #fff !important;
    border-color: $primary-color !important;
  }
}
</style>
