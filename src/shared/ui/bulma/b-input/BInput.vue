<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue?: string;
  placeholder?: string;
  type?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: any) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <input
    v-model="value"
    :type="props.type"
    :placeholder="props.placeholder"
    class="input"
  />
</template>
