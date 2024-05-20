import { useSessionStore } from '@/entities/session';

export const useLogout = () => {
  const logout = () => {
    const sessionStore = useSessionStore();
    sessionStore.logout();

    window.location.reload();
  };

  return { logout };
};
