<script setup lang="ts">
import { LoginForm } from '@/features/auth';
import { AppLogo } from '@/shared/ui/logo';
</script>

<template>
  <div class="login-page">
    <AppLogo />
    <p class="title is-4">Вход в систему</p>
    <LoginForm />
  </div>
</template>
