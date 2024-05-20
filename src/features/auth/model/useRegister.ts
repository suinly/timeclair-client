import { register } from '@/shared/api/http';

export const useRegister = () => {
  return (email: string, password: string) => {
    return register(email, password);
  };
};
