import { type $Fetch, ofetch } from 'ofetch';
import { API_BASE_URL } from '@/shared/config';
import { useLocalStorage } from '@/shared/lib/browser';
import { useRouter } from 'vue-router';

const fetcher = ofetch.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  onRequest: ({ options }) => {
    const { value: token } = useLocalStorage('token', '');
    const { value: tokenExpiration } = useLocalStorage('token-expiration', 0);

    if (token && Date.now() / 1000 < tokenExpiration) {
      options.headers = {
        ...options.headers,
        Authorization: 'Bearer ' + token,
      };
    }
  },

  onResponseError: (error) => {
    if (error.response.status === 401) {
      const router = useRouter();
      router.push('/login');
    }

    return Promise.reject(error);
  },
});

class HttpClient {
  constructor(private fetcher: $Fetch) {}

  get<T>(path: string, query?: object): Promise<T> {
    return this.fetcher<T>(path, {
      method: 'GET',
      query,
    });
  }

  post<T>(path: string, body?: object): Promise<T> {
    return this.fetcher<T>(path, {
      method: 'POST',
      body,
    });
  }

  put<T>(path: string, body?: object): Promise<T> {
    return this.fetcher<T>(path, {
      method: 'PUT',
      body,
    });
  }

  delete<T>(path: string): Promise<T> {
    return this.fetcher<T>(path, {
      method: 'DELETE',
    });
  }
}

export const httpClient = new HttpClient(fetcher);
