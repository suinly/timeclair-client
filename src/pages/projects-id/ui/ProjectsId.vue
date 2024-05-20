<script setup lang="ts">
import { useProjectStore } from '@/entities/project';
import type { Project } from '@/shared/types/projects';
import { BTabs, BTab } from '@/shared/ui/bulma';
import { IssuesList } from '@/features/issues-list';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const projectStore = useProjectStore();

const project = ref<Project>(
  await projectStore.findOne(Number(route.params.id)),
);

const currentTab = ref<string>('list');
</script>

<template>
  <div class="projects-id">
    <p class="title is-size-6">{{ project.name }}</p>

    <BTabs v-model="currentTab">
      <BTab name="list" label="Список">
        <IssuesList :projectId="project.id" />
      </BTab>
    </BTabs>
  </div>
</template>
