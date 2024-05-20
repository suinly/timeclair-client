<script setup lang="ts">
const props = defineProps<{
  primary?: boolean;
  text?: boolean;
}>();
</script>

<template>
  <button
    class="button"
    :class="{ 'is-primary': props.primary, 'is-text': props.text }"
  >
    <slot />
  </button>
</template>
