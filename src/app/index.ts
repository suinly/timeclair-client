import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './providers';
import { init } from './init';

export const bootstrap = async () => {
  const app = createApp(App);

  app.use(createPinia());
  app.use(router);

  await init();

  app.mount('#app');
};
