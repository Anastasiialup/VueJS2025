<template>
  <div class="container">
    <div class="card">
      <h3>{{ t('app.cart') }}</h3>
      <div v-if="cart.totalCount === 0">
        <p>{{ t('messages.cart_empty') }}</p>
        <router-link to="/products" class="btn">{{ t('app.products') }}</router-link>
      </div>
      <div v-else>
        <div v-for="i in cart.items" :key="i.id" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div>
            <div><strong>{{ i.title }}</strong></div>
            <div>{{ i.qty }} × {{ i.price }} $</div>
          </div>
          <div style="display:flex; gap:8px; align-items:center;">
            <button class="btn" @click="remove(i.id)">{{ t('buttons.remove') }}</button>
          </div>
        </div>

        <div style="margin-top:12px;">
          <div><strong>{{ t('messages.total') }}: {{ cart.totalPrice.toFixed(2) }} $</strong></div>
          <button @click="clear" class="btn" style="margin-top:8px;">{{ t('buttons.clear') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useCartStore } from '../stores/cart'
const { t } = useI18n({ useScope: 'global' })
const cart = useCartStore()
function remove(id){ cart.remove(id) }
function clear(){ cart.clear() }
</script>
