<template>
  <div class="com-card-wrap">
    <div class="header">
      <div class="title">{{ title }}</div>
      <ProSvg
        v-if="showFold"
        name="down"
        color="#99A9C0"
        :class="['fold-icon', { fold: isFold }]"
        @click="handleFoldClick"
      />
      <div v-if="link" class="link" @click="handleLinkClick">
        {{ link }}
        <ProSvg name="right_arrow" class="icon" />
      </div>
      <slot v-if="extra" name="extra" class="extra" />
    </div>
    <div ref="body" class="body" :style="{ height: showFold ? `${bodyHeight}px` : 'auto' }">
      <slot />
    </div>
  </div>
  <ProDivider />
</template>

<script lang="ts" setup>
import { useSlots } from 'vue';
import { useToggle } from '@vant/use';
import { getHiddenDomSize } from '@/utils/dom';
import ProSvg from '@/components/ProSvg/index.vue';
import ProDivider from '@/components/ProDivider/index.vue';

const [isFold, toggle] = useToggle(false);
const body = ref<HTMLDivElement>();
const emits = defineEmits(['link-click']);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  showFold: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: '',
  },
});

const handleFoldClick = () => {
  toggle();
};

const bodyHeight = computed(() => {
  if (isFold.value) {
    return 0;
  }
  return getHiddenDomSize(body.value);
});

const handleLinkClick = () => {
  emits('link-click');
};

const extra = computed(() => {
  return !!useSlots().extra;
});
</script>

<style lang="scss" scoped>
.com-card-wrap {
  .header {
    height: 90px;
    line-height: 90px;
    margin-left: 30px;
    padding-right: 30px;
    border-bottom: 1px solid #eeeff4;
    display: flex;
    align-items: center;
    .title {
      font-size: 30px;
      font-weight: bold;
      color: #333333;
      display: flex;
      align-items: center;
      flex: 1;
      &:before {
        content: ' ';
        width: 8px;
        height: 28px;
        border-radius: 4px;
        background: #0d6efe;
        margin-right: 16px;
      }
    }
    .fold-icon {
      transition: all 0.3s;
      &.fold {
        transform: rotate(180deg);
      }
    }
    .link {
      color: #0d6efe;
      font-size: 26px;
      display: flex;
      align-items: center;
      .icon {
        margin-left: 6px;
        font-size: 22px;
      }
    }
  }
  .body {
    transition: height 0.3s;
    overflow: hidden;
    padding: 0 30px;
  }
}
</style>
