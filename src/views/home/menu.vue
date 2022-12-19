<template>
  <ProPageWrap main-class="page-home">
    <VanGrid>
      <VanGridItem v-for="route in routes" :key="route.path" link-type="navigateTo">
        <RouterLink :to="route.path">
          {{ route?.meta.title || route.name }}
        </RouterLink>
      </VanGridItem>
    </VanGrid>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import routes from '@/router/routes';
</script>

<style lang="scss">
.page-home {
  color: $primary-color;
}
</style>
