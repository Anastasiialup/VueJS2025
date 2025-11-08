<template>
  <div>
    <AdSlot>
      <img src="@/assets/ad2.jpg" alt="Реклама 2" class="ad-image" />
      <button @click="showAd = true">Переглянути</button>
    </AdSlot>

    <ModalAd :show="showAd" @close="showAd = false">
      <h2>Рекламний контент</h2>
      <img src="@/assets/ad2.jpg" alt="Реклама 2" class="modal-image" />
    </ModalAd>

    <NewsCard v-for="item in news" :key="item.id" :news="item" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NewsCard from '../components/NewsCard.vue'
import AdSlot from '../components/AdSlot.vue'
import ModalAd from '../components/ModalAd.vue'
import { news } from '../data/news.js'

const showAd = ref(false)
</script>

<style scoped>
.ad-image {
  width: 350px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.modal-image {
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
}
</style>
