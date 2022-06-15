<template>
  <div class="single-select">
    <div class="insure-list">
      <h2>{{ data.title }}</h2>
      <div class="item-wrap">
        <div
          v-for="el in data.list"
          :key="el.title"
          :class="[{ checked: el.value === checked }, el.size === 'sm' ? 'item-sm' : 'item-md']"
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
    type: String,
    required: false,
    default: () => '',
  },
});
const emit = defineEmits(['on-change']);

const { data, value } = toRefs(props);
const checked = ref(value?.value);
watchEffect(() => {
  console.log(value?.value, 11);
  checked.value = value.value;
});

const handleChange = (val: { title: string; value: string }) => {
  checked.value = val.value;
  emit('on-change', val.value);
};
</script>

<style lang="scss">
.single-select {
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

  .item-md {
    width: 160px;
    height: 60px;
  }
  .item-md:nth-of-type(3n + 2) {
    margin: 0 20px;
  }

  .item-sm {
    width: 115px;
    height: 60px;
    margin-left: 20px;
  }
  .item-sm:first-child {
    margin-left: 0;
  }

  .checked {
    background: $primary-color !important;
    color: #fff !important;
    border-color: $primary-color !important;
  }
}
</style>
