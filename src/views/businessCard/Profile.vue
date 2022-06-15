<template>
  <div class="profile">
    <div class="name">
      {{ data.name }}
    </div>
    <div class="pic">
      {{ data.pic }}
    </div>
    <div class="desc">
      {{ data.desc }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

const loadData = async () => {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove({
        name: 'Jack',
        desc: '这是一段描述',
        pic: '',
      });
    }, 1500);
  });
};

export default {
  async setup() {
    const data = ref(await loadData());
    return {
      data,
    };
  },
};
</script>

<style></style>
