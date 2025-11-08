<template>
  <FormWrapper title="Home">
    <div class="home-content">
      <h2>Welcome Home!</h2>
      <p v-if="auth.user">Email: {{ auth.user.email }}</p>
      <p v-else>Please login or register</p>
      <button v-if="auth.user" @click="logout">Logout</button>
    </div>
  </FormWrapper>
</template>

<script setup>
import FormWrapper from '../components/ui/FormWrapper.vue'
import { auth } from '../store/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  auth.logout(router)
}
</script>
