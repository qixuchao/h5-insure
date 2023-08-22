<template>
  <div>{{ title }}</div>
</template>
<script lang="ts" setup>
import { withDefaults, reactive, shallowRef, useSlots } from 'vue';

interface Props {
  title: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
});
</script>
<style lang="scss" scoped></style>
