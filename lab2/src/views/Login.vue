<template>
  <div class="card">
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="submit">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../store/auth'

const email = ref('')
const password = ref('')
const router = useRouter()

function submit() {
  if (!email.value || !password.value) return alert('Fill fields!')
  auth.login(email.value)
  router.push('/')
}
</script>
