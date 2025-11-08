<template>
  <div class="tab-content">
    <h3>Overview Tab</h3>
    <p>Enter some text to test KeepAlive:</p>
    <input v-model="note" placeholder="Type something..." />
    <p>You typed: {{ note }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const note = ref('')
</script>
