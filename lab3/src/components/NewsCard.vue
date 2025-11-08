<template>
  <div :class="$style.card">
    <img :src="news.image" alt="" :class="$style.image" />
    <h2 :class="$style.title">{{ news.title }}</h2>
    <p :class="$style.description">{{ news.description }}</p>
    <p :class="$style.date">{{ news.date }}</p>
    <router-link :to="`/article/${news.id}`">
      <button :class="$style.button">Детальніше</button>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  news: Object
})
</script>

<style module src="../assets/NewsCard.module.css"></style>
