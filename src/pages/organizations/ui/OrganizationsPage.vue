<script setup lang="ts">
import { useOrganizationStore } from '@/entities/organization';
import { OrganizationsManagement } from '@/widgets/organizations-management';

const organizationStore = useOrganizationStore();
organizationStore.fetch();
</script>

<template>
  <div class="organizations-page">
    <p class="title">Организации</p>

    <OrganizationsManagement />
  </div>
</template>
