<script setup lang="ts">
import { BField, BInput, BButton } from '@/shared/ui/bulma';
import { useOrganizationStore } from '@/entities/organization';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  organizationId?: number;
}>();

const router = useRouter();
const organizationStore = useOrganizationStore();

const form = reactive({
  name: '',
});

if (props.organizationId) {
  const organization = await organizationStore.findOne(props.organizationId);

  if (organization) {
    form.name = organization.name;
  }
}

const onSubmit = async () => {
  try {
    if (props.organizationId) {
      await organizationStore.update(props.organizationId, form.name);
    } else {
      await organizationStore.create(form.name);
    }

    router.push('/organizations');
  } catch (error) {
    // ..
  }
};
</script>

<template>
  <form class="organization-form" @submit.prevent="onSubmit">
    <BField label="Название организации">
      <BInput v-model="form.name" placeholder="Название организации" />
    </BField>

    <BField>
      <BButton primary>Сохранить</BButton>
    </BField>
  </form>
</template>
