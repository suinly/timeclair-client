import { useProjectStore } from '@/entities/project';
import { useSessionStore } from '@/entities/session';

export const init = async () => {
  const sessionStore = useSessionStore();
  await sessionStore.fetch();

  const projectStore = useProjectStore();
  await projectStore.fetch();
};
