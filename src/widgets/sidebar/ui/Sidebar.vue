<script setup lang="ts">
import { SidebarMenu } from '@/features/sidebar-menu';
import { AppLogo } from '@/shared/ui/logo';
</script>

<template>
  <div class="sidebar">
    <div class="block">
      <AppLogo />
    </div>

    <div class="block">
      <SidebarMenu />
    </div>
  </div>
</template>
