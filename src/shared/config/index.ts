const env = (name: string, defaultValue?: string) => {
  const value = import.meta.env[name];
  return value === undefined ? defaultValue : value;
};

export const API_BASE_URL = env('VITE_API_BASE_URL', 'http://localhost/api');
export const APP_NAME = env('VITE_APP_NAME', 'timeclair');
