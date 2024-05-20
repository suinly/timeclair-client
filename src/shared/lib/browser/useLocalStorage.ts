import { APP_NAME } from '@/shared/config';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const keyWithPrefix = APP_NAME + ':' + key;
  const storedValue = window.localStorage.getItem(keyWithPrefix);
  const value = storedValue ? JSON.parse(storedValue) : initialValue;

  const storeValue = (value: T) => {
    window.localStorage.setItem(keyWithPrefix, JSON.stringify(value));
  };

  return { value, storeValue };
};
