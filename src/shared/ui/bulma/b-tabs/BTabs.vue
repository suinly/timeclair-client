<script setup lang="ts">
import { onMounted, provide, useSlots, watch } from 'vue';
import { provideStore } from './store';

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits(['update:modelValue']);
const slots = useSlots();

const tabStore = provideStore({
  activeTab: props.modelValue,
  tabs: [],
});

watch(
  () => props.modelValue,
  (name: string) => {
    tabStore.value.activeTab = name;
  },
);

const selectTab = (name: string) => {
  emit('update:modelValue', name);
};

onMounted(() => {
  const slotComponents = slots.default ? slots.default() : [];
  const slotNames = slotComponents
    .map((vnode: any) => ({
      name: vnode.props?.name,
      label: vnode.props?.label,
    }))
    .filter(Boolean);

  tabStore.value.tabs = slotNames;

  if (tabStore.value.tabs.length) {
    emit('update:modelValue', tabStore.value.tabs[0].name);
  }
});

provide('selectedTab', props.modelValue);
</script>

<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, index) in tabStore.tabs"
          :key="index"
          :class="{ 'is-active': modelValue === tab.name }"
        >
          <a @click="selectTab(tab.name)">{{ tab.label }}</a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.tabs {
  margin-bottom: 1rem;
}
</style>
