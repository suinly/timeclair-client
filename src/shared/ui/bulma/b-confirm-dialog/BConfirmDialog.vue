<script setup lang="ts">
const props = defineProps<{
  message: string;
}>();

const emit = defineEmits(['confirm', 'cancel']);

const onClick = () => {
  const confirm = window.confirm(props.message);
  if (confirm) emit('confirm');
  else emit('cancel');
};
</script>

<template>
  <span @click.prevent="onClick">
    <slot />
  </span>
</template>
