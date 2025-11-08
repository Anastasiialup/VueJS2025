<template>
  <div>
    <header class="card">
      <h1>Lab 2 - Vue Admin</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/admin/dashboard">Dashboard</router-link> |
        <router-link to="/admin/users">Users</router-link> |
        <router-link to="/admin/reports">Reports</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>
