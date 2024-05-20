import { type ISession } from '@/shared/types/session';
import { httpClient } from './client';

export const login = (email: string, password: string): Promise<any> => {
  return httpClient.post('/auth/login', {
    email,
    password,
  });
};

export const register = (email: string, password: string): Promise<any> => {
  return httpClient.post('/auth/register', {
    email,
    password,
  });
};

export const getSession = (): Promise<any> => {
  return httpClient.get<ISession>('/auth/session');
};
