<template>
  <div>
    <select v-model="locale" @change="change">
      <option value="en">EN</option>
      <option value="ua">UA</option>
    </select>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '../stores/settings'
const settings = useSettingsStore()
const { locale: i18nLocale } = useI18n({ useScope: 'global' })

const locale = computed({
  get: () => settings.locale,
  set: (v) => settings.setLocale(v)
})

watch(() => settings.locale, (v) => {
  i18nLocale.value = v
})
function change() {
  // sync happens via watcher
}
</script>

<style scoped>
select {
  padding: 6px;
  border-radius:6px;
}
</style>
