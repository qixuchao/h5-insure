<template>
  <div class="com-image-upload">
    <input ref="input" type="file" class="input" @change="handleChange" />
    <van-image width="100%" height="100%" :icon-size="50" @click="handleClick"></van-image>
  </div>
</template>

<script lang="ts" setup>
const input = ref<HTMLInputElement>();

const handleClick = () => {
  console.log('input', input.value);
  input.value?.click();
};

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  const file = target?.files?.[0];
  console.log(file);
};
</script>

<style lang="scss" scoped>
.com-image-upload {
  width: 300px;
  height: 300px;
  .input {
    display: none;
  }
}
</style>
