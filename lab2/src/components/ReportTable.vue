<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <slot name="row" :item="item">{{ item.title }}</slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ items: Array })
</script>
