<template>
  <div class="com-card">
    <div class="com-card-wrap">
      <div :class="['header', { showLine: Boolean(title) && showLine }]">
        <div v-if="title" class="title-wrapper">
          <div :class="['title', { showIcon }]">{{ title }}</div>
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
          <slot v-if="extra" name="extra" />
        </div>
        <slot v-if="subTitle" name="subTitle" />
      </div>
      <div ref="body" class="body" :style="{ height: showFold ? `${bodyHeight}px` : 'auto' }">
        <slot />
      </div>
    </div>
    <ProDivider v-if="showDivider" />
  </div>
</template>

<script lang="ts" setup name="ProCard">
import { useSlots } from 'vue';
import { useToggle } from '@vant/use';
import { getHiddenDomHeight } from '@/utils/dom';
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
  showIcon: {
    type: Boolean,
    default: true,
  },
  showLine: {
    type: Boolean,
    default: true,
  },
  showDivider: {
    type: Boolean,
    default: true,
  },
});

const handleFoldClick = () => {
  toggle();
};

const bodyHeight = computed(() => {
  if (isFold.value) {
    return 0;
  }
  return getHiddenDomHeight(body.value);
});

const handleLinkClick = () => {
  emits('link-click');
};

const extra = computed(() => {
  return !!useSlots().extra;
});

const subTitle = computed(() => {
  return !!useSlots().subTitle;
});
</script>

<style lang="scss" scoped>
.com-card {
  .com-card-wrap {
    background-color: #ffffff;
    border-radius: 16px;
    .header {
      margin-left: $zaui-card-border;
      padding-right: $zaui-card-border;
      border-bottom: 0;
      position: relative;

      &.showLine {
        &:after {
          content: ' ';
          position: absolute;
          width: 100%;
          border-bottom: 1px solid $zaui-line;
          transform: scaleY(0.5);
          z-index: 1;
          left: 0;
        }
      }
      .title-wrapper {
        height: 90px;
        line-height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
          font-size: 30px;
          font-weight: bold;
          color: #333333;
          display: flex;
          align-items: center;
          &.showIcon {
            &:before {
              content: ' ';
              width: 8px;
              height: 28px;
              background: var(--van-primary-color);
              margin-right: 16px;
              border-radius: 4px;
            }
          }
        }
        .fold-icon {
          transition: all 0.3s;
          &.fold {
            transform: rotate(180deg);
          }
        }
        .link {
          color: $zaui-brand;
          font-size: 26px;
          display: flex;
          align-items: center;
          .icon {
            margin-left: 6px;
            font-size: 22px;
          }
        }
      }
    }
    .body {
      transition: height 0.3s;
      overflow: hidden;
      padding: 0 30px;
    }
  }

  &.com-card-body-no-padding {
    .body {
      padding: 0;
    }
  }
}
</style>
