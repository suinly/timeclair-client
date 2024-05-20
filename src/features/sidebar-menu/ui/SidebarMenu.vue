<script setup lang="ts">
import { useLogout } from '@/features/auth';
import { useProjectStore } from '@/entities/project';

const { logout } = useLogout();
const projectStore = useProjectStore();
</script>

<template>
  <div class="sidebar-menu menu">
    <p class="menu-label">Меню</p>
    <ul class="menu-list">
      <li>
        <RouterLink to="/">Общая сводка</RouterLink>
      </li>
      <li>
        <RouterLink to="/issues">Заявки</RouterLink>
      </li>
    </ul>

    <p class="menu-label">Проекты</p>
    <ul class="menu-list">
      <li v-for="project in projectStore.projects" :key="project.id">
        <RouterLink :to="`/projects/${project.id}`">
          {{ project.name }}
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/projects/new">Добавить новый</RouterLink>
      </li>
    </ul>

    <p class="menu-label">Управление</p>
    <ul class="menu-list">
      <li>
        <RouterLink to="/organizations">Организации</RouterLink>
      </li>
      <li>
        <RouterLink to="/settings">Настройки</RouterLink>
      </li>
      <li>
        <a @click="logout()">Выход</a>
      </li>
    </ul>
  </div>
</template>
