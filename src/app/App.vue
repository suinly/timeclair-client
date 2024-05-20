<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { DefaultLayout } from '@/shared/ui/layouts';

const route = useRoute();
const layout = computed(() => route.meta.layout || DefaultLayout);
</script>

<template>
  <component :is="layout">
    <Suspense>
      <RouterView />
    </Suspense>
  </component>
</template>

<style lang="scss">
@import './styles/index.scss';
</style>
