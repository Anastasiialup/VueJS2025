<template>
  <div class="card">
    <h2>Dashboard</h2>
    <nav>
      <button @click="activeTab = 'overview'">Overview</button>
      <button @click="activeTab = 'activity'">Activity</button>
    </nav>
    <KeepAlive>
      <component :is="activeTabComponent" />
    </KeepAlive>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import OverviewTab from './dashboard/OverviewTab.vue'
import ActivityTab from './dashboard/ActivityTab.vue'

const activeTab = ref('overview')
const activeTabComponent = computed(() => {
  return activeTab.value === 'overview' ? OverviewTab : ActivityTab
})
</script>
