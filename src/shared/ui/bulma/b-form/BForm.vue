<script setup lang="ts">
const emit = defineEmits(['submit']);

const onSubmit = () => {
  emit('submit');
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <slot />
  </form>
</template>
