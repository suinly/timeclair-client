<template>
  <div class="auth-layout">
    <main class="auth-content">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100%;
  width: 100%;

  .auth-content {
    min-width: 300px;
    padding: 24px 0;
  }
}
</style>
