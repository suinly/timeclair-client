import { inject, provide, ref, type Ref } from 'vue';

const TABS_SYMBOL = Symbol('TABS');

type Tab = {
  name: string;
  label: string;
};

type TabStore = {
  activeTab: string;
  tabs: Tab[];
};

export const provideStore = (store: TabStore) => {
  const storeRef = ref(store);
  provide(TABS_SYMBOL, storeRef);
  return storeRef;
};

export const useStore = (): Ref<TabStore> => {
  const store = inject<Ref<TabStore>>(TABS_SYMBOL);
  if (!store) throw new Error('BTabs: store is not exists');
  return store;
};

export const addToStore = (tab: Tab) => {
  const store = useStore();
  store.value.tabs.push(tab);
};
