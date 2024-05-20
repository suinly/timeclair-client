<script setup lang="ts">
import { BButton } from '@/shared/ui/bulma';
import { OrganizationsList } from '@/features/organizations-list';
</script>

<template>
  <div class="organizations-management">
    <div class="block">
      <RouterLink to="/organizations/new">
        <BButton>Добавить организацию</BButton>
      </RouterLink>
    </div>
    <div class="block">
      <OrganizationsList />
    </div>
  </div>
</template>
