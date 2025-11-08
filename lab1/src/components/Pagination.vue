<template>
  <nav class="pagination">
    <button :disabled="page <= 1" @click="setPage(page - 1)">« Prev</button>
    <span>Page {{ page }} / {{ totalPages }}</span>
    <button :disabled="page >= totalPages" @click="setPage(page + 1)">Next »</button>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  total: { type: Number, required: true },
  page: { type: Number, default: 1 },
  pageSize: { type: Number, default: 5 }
})
const emit = defineEmits(['update:page'])

const totalPages = computed(() =>
  Math.max(1, Math.ceil(props.total / props.pageSize))
)

function setPage(newPage) {
  if (newPage >= 1 && newPage <= totalPages.value) {
    emit('update:page', newPage)
  }
}
</script>
