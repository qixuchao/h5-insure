<template>
  <div class="com-avatar-box" :style="style">
    {slots.default ? slots.default() : src ? <img :src="src" :alt="text" /> : text}
  </div>
</template>
<script lang="ts" setup="props, context">
import { withDefaults } from 'vue';

interface AvatarProps {
  src?: string | undefined;
  size?: number | string;
  color?: string;
  text?: string;
}
// 获取props，并设置默认值
const props = withDefaults(defineProps<AvatarProps>(), {
  size: 30,
  color: '#6476FF',
  text: '',
  src: '',
});

const slots = useSlots();

const { size, color, src, text } = toRefs(props);

const style = computed(() => ({
  backgroundColor: color.value,
  height: `${size.value}px`,
  width: `${size.value}px`,
}));
</script>

<style lang="scss">
.com-avatar-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: relative;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  color: #fff;
  img {
    border-radius: inherit;
    display: inline-flex;
    height: inherit;
    width: inherit;
    background-size: cover;
  }
}
</style>
import { SetupContext, Component } from 'vue'; import './index.scss'; /** * 头像 * @returns */ export default const
ZaAvatar: Component = function (props: AvatarProps, context: SetupContext): Component { }
