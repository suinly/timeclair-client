<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { BButton, BField, BForm, BInput } from '@/shared/ui/bulma';
import { useRegister } from '../model/useRegister';

const form = reactive({
  email: '',
  password: '',
});

const router = useRouter();
const register = useRegister();

const onSubmit = async () => {
  try {
    await register(form.email, form.password);

    form.email = '';
    form.password = '';

    router.push('/login');
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="login-form">
    <BForm @submit="onSubmit">
      <BField label="E-mail">
        <BInput
          v-model="form.email"
          placeholder="Введите ваш адрес эл. почты"
        />
      </BField>

      <BField label="Пароль">
        <BInput
          v-model="form.password"
          type="password"
          placeholder="Введите ваш пароль"
        />
      </BField>

      <BField grouped>
        <BButton primary>Продолжить</BButton>
        <RouterLink to="/login">
          <BButton text>Есть аккаунт?</BButton>
        </RouterLink>
      </BField>
    </BForm>
  </div>
</template>
