<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({ title: String })
</script>
