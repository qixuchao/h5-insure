<template>
  <div class="com-empty-out">
    <div class="empty-top">
      <img :src="emptyimg" alt="" class="empty-image" />
    </div>
    <p class="empty-text">{{ text }}</p>
    <p v-show="text2" class="empty-text">{{ text2 }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  text2: {
    type: String,
    default: '',
  },
  emptyimg: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.com-empty-out {
  .empty-top {
    display: flex;
    justify-content: center;
    margin-top: 240px;
    .empty-image {
      width: 209px;
      height: 200px;
      margin-bottom: 56px;
    }
  }
  .empty-text {
    text-align: center;
    color: #616161;
    font-size: 30px;
  }
}
</style>
