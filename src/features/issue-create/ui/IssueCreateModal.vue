<script setup lang="ts">
import { BModalCard, BButton } from '@/shared/ui/bulma';

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<template>
  <BModalCard title="Новая заявка" @close="close">
    ISSUE CREATE MODAL
    <template #footer>
      <BButton @click="close">Закрыть</BButton>
    </template>
  </BModalCard>
</template>
