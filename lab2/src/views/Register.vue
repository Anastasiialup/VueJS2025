<template>
  <FormWrapper title="Register">
    <BaseInput label="Name" v-model="name" />
    <BaseInput label="Email" v-model="email" type="email" />
    <BaseInput label="Password" v-model="password" type="password" />
    <BaseInput label="Confirm Password" v-model="confirm" type="password" />
    <button @click="submit">Register</button>
  </FormWrapper>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../store/auth'
import FormWrapper from '../components/ui/FormWrapper.vue'
import BaseInput from '../components/ui/BaseInput.vue'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')

function submit() {
  if (!name.value || !email.value || !password.value) return alert('Fill fields!')
  if (password.value !== confirm.value) return alert('Passwords do not match!')
  auth.register(name.value, email.value, password.value)
  router.push('/')
}
</script>
