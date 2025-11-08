<template>
  <footer class="app-footer">
    <div>© 2025 — Lab4</div>
    <div>{{ t('messages.total') }}: {{ totalLabel }}</div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCartStore } from '../stores/cart'
const { t } = useI18n({ useScope: 'global' })
const cart = useCartStore()
const totalLabel = computed(() => `${cart.totalCount}`)
</script>

<style scoped>
footer { font-size:0.95rem; display:flex; justify-content:space-between; gap:12px; }
</style>
