import {
  createProject,
  updateProject,
  removeProject,
  getProjects,
  getProjectById,
} from '@/shared/api/http';
import type { Project } from '@/shared/types/projects';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProjectStore = defineStore('project', () => {
  const projects = ref<Project[]>([]);

  const fetch = async () => {
    try {
      projects.value = await getProjects();
    } catch (error) {
      console.log(error);
    }
  };

  const findOne = async (id: number) => {
    const project = projects.value.find((project) => project.id === id);

    if (project) return project;

    return await getProjectById(id);
  };

  const create = async (
    name: string,
    description: string,
    organizationId: number,
  ) => {
    try {
      const response = await createProject(name, description, organizationId);
      projects.value.push(response);
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (
    id: number,
    name: string,
    description: string,
    organizationId: number,
  ) => {
    try {
      await updateProject(id, name, description);
    } catch (error) {
      console.log(error);
    }
  };

  const remove = async (id: number) => {
    try {
      await removeProject(id);
      projects.value = projects.value.filter((project) => project.id !== id);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    projects,
    fetch,
    findOne,
    create,
    update,
    remove,
  };
});
