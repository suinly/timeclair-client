<script setup lang="ts">
const emit = defineEmits(['close']);
const props = defineProps<{ title?: string }>();

const close = () => {
  emit('close');
};
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <template v-if="title">{{ title }}</template>
          <template v-else>
            <slot name="title" />
          </template>
        </p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <slot />
      </section>
      <footer class="modal-card-foot">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>
