<template>
  <div class="card">
    <h2>Reports</h2>
    <ReportTable :items="reports">
      <template #row="{ item }">
        <p>{{ item.title }} - {{ item.status }}</p>
      </template>
    </ReportTable>
  </div>
</template>

<script setup>
import ReportTable from '../../components/ReportTable.vue'
import { ref } from 'vue'

const reports = ref([
  { id: 1, title: 'Report 1', status: 'done' },
  { id: 2, title: 'Report 2', status: 'pending' }
])
</script>
