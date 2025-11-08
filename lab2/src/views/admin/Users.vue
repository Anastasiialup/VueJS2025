<template>
  <div class="card">
    <h1>Users List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/admin/user/${user.id}`">{{ user.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'Dasha' },
  { id: 2, name: 'Masha' },
  { id: 3, name: 'Sasha' }
])
</script>
