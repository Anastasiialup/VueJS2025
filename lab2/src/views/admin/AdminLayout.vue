<template>
  <div class="layout">
    <Sidebar @logout="logout" />
    <main class="main-content">
      <keep-alive include="Dashboard,Users">
        <router-view />
      </keep-alive>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '../../components/Sidebar.vue'
import { auth } from '../../store/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>

