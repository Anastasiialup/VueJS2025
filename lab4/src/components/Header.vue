<template>
  <header class="app-header">
    <div style="display:flex; align-items:center; gap:12px;">
      <h2>{{ t('app.title') }}</h2>
    </div>

    <nav style="display:flex; gap:12px; align-items:center;">
      <router-link to="/products">{{ t('app.products') }}</router-link>
      <router-link to="/cart">{{ t('app.cart') }}</router-link>
      <router-link to="/profile">{{ t('app.profile') }}</router-link>
      <LanguageSwitcher />
    </nav>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
const { t } = useI18n({ useScope: 'global' })
</script>

<style scoped>
header { align-items:center; justify-content:space-between; }
nav a { color:var(--accent); text-decoration:none; }
</style>
