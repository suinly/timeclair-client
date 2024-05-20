import type { Organization } from '@/shared/types/organizations';
import { httpClient } from './client';

export const getOrganizations = (): Promise<any> => {
  return httpClient.get<Organization[]>('/organizations');
};

export const getOrganizationById = (id: number): Promise<any> => {
  return httpClient.get<Organization>(`/organizations/${id}`);
};

export const createOrganization = (name: string): Promise<any> => {
  return httpClient.post<Organization>('/organizations', {
    name,
  });
};

export const updateOrganization = (id: number, name: string): Promise<any> => {
  return httpClient.put<Organization | null>(`/organizations/${id}`, {
    name,
  });
};

export const removeOrganization = (id: number): Promise<any> => {
  return httpClient.delete<Organization | null>(`/organizations/${id}`);
};
