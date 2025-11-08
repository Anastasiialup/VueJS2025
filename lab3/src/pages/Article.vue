<template>
  <div v-if="article">
    <img :src="article.image" alt="" style="width:100%; border-radius:8px" />
    <h1>{{ article.title }}</h1>
    <p>{{ article.date }}</p>
    <p>{{ article.content }}</p>

    <AdSlot>
      <button @click="showAd = true">Переглянути рекламу</button>
    </AdSlot>

    <ModalAd :show="showAd" @close="showAd = false">
      <h2>Рекламний контент у статті</h2>
      <img :src="adImage" alt="Реклама" style="width:80%; border-radius:8px" />
    </ModalAd>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { news } from '../data/news.js'
import AdSlot from '../components/AdSlot.vue'
import ModalAd from '../components/ModalAd.vue'

const adImage = new URL('../assets/ad1.jpg', import.meta.url).href

const route = useRoute()
const article = news.find(n => n.id === Number(route.params.id))
const showAd = ref(false)
</script>
