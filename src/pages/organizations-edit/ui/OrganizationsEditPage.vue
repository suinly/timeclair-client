<script setup lang="ts">
import { OrganizationForm } from '@/features/organization-form';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="organizations-edit-page">
    <p class="title">Редактирование организации</p>

    <OrganizationForm :organizationId="Number(route.params.id)" />
  </div>
</template>
