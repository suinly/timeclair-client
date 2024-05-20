<script setup lang="ts">
import { Sidebar } from '@/widgets/sidebar';
</script>

<template>
  <div class="default-layout">
    <aside>
      <Sidebar />
    </aside>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.default-layout {
  display: flex;

  min-height: 100%;
  width: 100%;

  aside {
    width: 280px;
    border-right: 1px solid var(--bulma-border);
    padding: 24px;
  }

  main {
    padding: 24px;
    flex: 1;
  }
}
</style>
