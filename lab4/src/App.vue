<template>
  <Header />
  <main class="container">
    <router-view v-slot="{ Component }">
      <transition name="route-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* global small tweak */
.route-fade-enter-from, .route-fade-leave-to { opacity: 0; transform: translateY(8px); }
.route-fade-enter-active, .route-fade-leave-active { transition: all .28s ease; }
</style>
