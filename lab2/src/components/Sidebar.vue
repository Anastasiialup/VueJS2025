<template>
  <nav class="sidebar">
    <router-link to="/admin/dashboard">Dashboard</router-link>
    <router-link to="/admin/users">Users</router-link>
    <router-link to="/admin/reports">Reports</router-link>
    <button @click="$emit('logout')">Logout</button>
  </nav>
</template>

<script setup>
</script>
