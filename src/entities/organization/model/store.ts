import {
  createOrganization,
  updateOrganization,
  removeOrganization,
  getOrganizations,
  getOrganizationById,
} from '@/shared/api/http';
import type { Organization } from '@/shared/types/organizations';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrganizationStore = defineStore('organization', () => {
  const organizations = ref<Organization[]>([]);

  const fetch = async () => {
    try {
      organizations.value = await getOrganizations();
    } catch (error) {
      console.log(error);
    }
  };

  const findOne = async (id: number) => {
    const organization = organizations.value.find(
      (organization) => organization.id === id,
    );

    if (organization) return organization;

    return await getOrganizationById(id);
  };

  const create = async (name: string) => {
    try {
      const response = await createOrganization(name);
      organizations.value.push(response);
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (id: number, name: string) => {
    try {
      await updateOrganization(id, name);
    } catch (error) {
      console.log(error);
    }
  };

  const remove = async (id: number) => {
    try {
      await removeOrganization(id);
      organizations.value = organizations.value.filter(
        (organization) => organization.id !== id,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    organizations,
    fetch,
    findOne,
    create,
    update,
    remove,
  };
});
