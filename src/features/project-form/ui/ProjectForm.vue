<script setup lang="ts">
import { BField, BInput, BTextarea, BButton } from '@/shared/ui/bulma';
import { useProjectStore } from '@/entities/project';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useOrganizationStore } from '@/entities/organization';

const props = defineProps<{
  projectId?: number;
}>();

const router = useRouter();
const projectStore = useProjectStore();
const organizationStore = useOrganizationStore();

await organizationStore.fetch();

const form = reactive({
  name: '',
  description: '',
  organizationId: organizationStore.organizations[0]?.id,
});

if (props.projectId) {
  const project = await projectStore.findOne(props.projectId);

  if (project) {
    form.name = project.name;
    form.description = project.description;
    form.organizationId = project.organizationId;
  }
}

const onSubmit = async () => {
  try {
    if (props.projectId) {
      await projectStore.update(
        props.projectId,
        form.name,
        form.description,
        form.organizationId,
      );
    } else {
      await projectStore.create(
        form.name,
        form.description,
        form.organizationId,
      );
    }

    router.push('/projects');
  } catch (error) {
    // ..
  }
};
</script>

<template>
  <form class="project-form" @submit.prevent="onSubmit">
    <BField label="Организация">
      <div class="select is-fullwidth">
        <select v-model="form.organizationId">
          <option
            v-for="organization in organizationStore.organizations"
            :key="organization.id"
            :value="organization.id"
          >
            {{ organization.name }}
          </option>
        </select>
      </div>
    </BField>
    <BField label="Название проекта">
      <BInput v-model="form.name" placeholder="Название проекта" />
    </BField>

    <BField label="Описание">
      <BTextarea
        v-model="form.description"
        placeholder="Описание проекта"
      ></BTextarea>
    </BField>

    <BField>
      <BButton primary>Сохранить</BButton>
    </BField>
  </form>
</template>
