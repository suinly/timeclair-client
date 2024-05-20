import type { Project } from '@/shared/types/projects';
import { httpClient } from './client';

export const getProjects = (): Promise<any> => {
  return httpClient.get<Project[]>('/projects');
};

export const getProjectById = (id: number): Promise<any> => {
  return httpClient.get<Project>(`/projects/${id}`);
};

export const createProject = (
  name: string,
  description: string,
  organizationId: number,
): Promise<any> => {
  return httpClient.post<Project>('/projects', {
    name,
    description,
    organizationId,
  });
};

export const updateProject = (
  id: number,
  name: string,
  description: string,
  organizationId: number,
): Promise<any> => {
  return httpClient.put<Project | null>(`/projects/${id}`, {
    name,
    description,
    organizationId,
  });
};

export const removeProject = (id: number): Promise<any> => {
  return httpClient.delete<Project | null>(`/projects/${id}`);
};
