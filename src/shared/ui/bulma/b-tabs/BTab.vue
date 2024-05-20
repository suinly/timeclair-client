<script setup lang="ts">
import { computed, watch } from 'vue';
import { useStore } from './store';

const props = defineProps<{ name: string; label: string }>();
const tabStore = useStore();

const isActive = computed(() => tabStore.value.activeTab === props.name);
</script>

<template>
  <div v-if="isActive">
    <slot />
  </div>
</template>
