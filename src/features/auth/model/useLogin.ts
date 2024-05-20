import { useSessionStore } from '@/entities/session';

export const useLogin = () => {
  return (email: string, password: string) => {
    const sessionStore = useSessionStore();
    return sessionStore.login(email, password);
  };
};
