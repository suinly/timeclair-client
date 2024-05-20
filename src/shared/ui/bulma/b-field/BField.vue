<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    grouped?: boolean;
  }>(),
  {
    grouped: false,
  },
);
</script>

<template>
  <div class="field" :class="{ 'is-grouped': props.grouped }">
    <label class="label" v-if="props.label || $slots.label">
      <template v-if="props.label">
        {{ props.label }}
      </template>
      <slot v-else name="label" />
    </label>

    <slot />
  </div>
</template>
