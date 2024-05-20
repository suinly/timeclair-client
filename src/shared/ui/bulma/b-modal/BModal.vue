<script setup lang="ts">
const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content">
      <slot />
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>
