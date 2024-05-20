import { getSession, login as getToken } from '@/shared/api/http';
import { useLocalStorage } from '@/shared/lib/browser';
import { type ISession } from '@/shared/types/session';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useSessionStore = defineStore('session', () => {
  const { value: storedToken, storeValue: storeToken } = useLocalStorage(
    'token',
    '',
  );

  const { value: expirationToken, storeValue: storeExpiration } =
    useLocalStorage('token-expiration', 0);

  const token = ref(storedToken);
  const expiration = ref(expirationToken);
  const session = ref<ISession | null>();

  const setToken = (value: string, exp: number) => {
    token.value = value;
    expiration.value = exp;
    storeToken(value);
    storeExpiration(exp);
  };

  const removeToken = () => {
    token.value = '';
    expiration.value = 0;
    storeToken('');
    storeExpiration(0);
  };

  const fetch = async () => {
    if (!token.value) throw new Error('No token');

    try {
      session.value = await getSession();
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await getToken(email, password);

      if (response.access_token) {
        setToken(response.access_token, response.expiration_time);

        await fetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    removeToken();
  };

  const isLogged = computed(() => {
    return token.value !== '';
  });

  return {
    login,
    logout,
    fetch,
    token,
    expiration,
    isLogged,
  };
});
