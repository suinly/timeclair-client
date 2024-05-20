<script setup lang="ts">
import { RegisterForm } from '@/features/auth';
import { AppLogo } from '@/shared/ui/logo';
</script>

<template>
  <div class="register-page">
    <AppLogo />
    <p class="title is-4">Создание аккаунта</p>
    <RegisterForm />
  </div>
</template>
