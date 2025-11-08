<template>
  <header>
    <router-link to="/" class="logo">📰 Новини Online</router-link>
    <nav class="nav">
      <router-link to="/" active-class="active">Головна</router-link>
      <router-link to="/about" active-class="active">Про нас</router-link>
    </nav>
    <button @click="toggleTheme">{{ isDark ? '🌙' : '☀️' }}</button>
  </header>
</template>

<script setup>
import { useTheme } from '../composables/useTheme.js'
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav a {
  margin-right: 1rem;
}

button {
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>
