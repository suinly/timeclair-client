<script setup lang="ts">
import { IssueCreateModal } from '@/features/issue-create';
import {
  BButton,
  BInput,
  BLevel,
  BLevelItem,
  useModal,
} from '@/shared/ui/bulma';
const props = defineProps<{ projectId: number }>();
const modal = useModal();

const openIssueModal = () =>
  modal.open({
    component: IssueCreateModal,
  });
</script>

<template>
  <div class="issues-list">
    <BLevel>
      <BLevelItem>
        <BButton @click="openIssueModal">Добавить заявку</BButton>
      </BLevelItem>

      <template #right>
        <BLevelItem>
          <BInput placeholder="Поиск..."></BInput>
        </BLevelItem>
      </template>
    </BLevel>

    <p>ISSUES LIST (PROJECT: #{{ projectId }})</p>
  </div>
</template>
