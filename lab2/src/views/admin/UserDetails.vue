<template>
  <div class="card">
    <h1>User Details</h1>
    <p>ID: {{ user.id }}</p>
    <p>Name: {{ user.name }}</p>
    <router-link to="/admin/users">Back to Users</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const userId = Number(route.params.id)

// Для демонстрації — простий масив користувачів
const allUsers = [
  { id: 1, name: 'Dasha' },
  { id: 2, name: 'Masha' },
  { id: 3, name: 'Sasha' }
]

const user = allUsers.find(u => u.id === userId) || { id: 0, name: 'Unknown' }
</script>
