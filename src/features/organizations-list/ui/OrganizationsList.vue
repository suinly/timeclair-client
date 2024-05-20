<script setup lang="ts">
import { BConfirmDialog } from '@/shared/ui/bulma';
import { useOrganizationStore } from '@/entities/organization';

const organizationStore = useOrganizationStore();

const onRemoveConfirm = (id: number) => {
  organizationStore.remove(id);
};
</script>

<template>
  <table class="table is-fullwidth organizations-list">
    <thead>
      <tr>
        <th>Название</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="organization in organizationStore.organizations"
        :key="organization.id"
        class="organization"
      >
        <td>
          {{ organization.name }}
        </td>
        <td>
          <RouterLink :to="`/organizations/${organization.id}/edit`">
            Изменить
          </RouterLink>
          <BConfirmDialog
            message="Вы уверены, что хотите удалить организацию?"
            @confirm="onRemoveConfirm(organization.id)"
          >
            <a>Удалить</a>
          </BConfirmDialog>
        </td>
      </tr>
    </tbody>
  </table>
</template>
