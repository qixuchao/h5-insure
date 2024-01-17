<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useScroll from '@/hooks/useScroll';

export default defineComponent({
  name: 'Scroll',
  props: {
    click: {
      type: Boolean,
      default: true,
    },
    probeType: {
      type: Number,
      default: 0,
    },
    scrollX: {
      type: Boolean,
      default: true,
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
    bounce: {
      type: Boolean,
      default: false,
    },
    useTransition: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const rootRef = ref(null);
    const scroll = useScroll(rootRef, props, emit);

    return {
      rootRef,
      scroll,
    };
  },
});
</script>
