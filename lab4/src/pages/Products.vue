<template>
  <div class="container">
    <div class="card">
      <h3>{{ t('app.products') }}</h3>
      <div class="grid-2">
        <div>
          <div v-for="p in products" :key="p.id" class="card" style="display:flex; gap:12px; align-items:center;">
            <div style="flex:1">
              <h4>{{ p.title }}</h4>
              <p>{{ p.description }}</p>
              <div style="margin-top:8px;">
                <button class="btn" @click="addToCart(p)">{{ t('buttons.add') }}</button>
              </div>
            </div>
            <div style="min-width:80px; text-align:right">
              <div><strong>{{ p.price }} $</strong></div>
            </div>
          </div>
        </div>

        <aside class="card">
          <h4>{{ t('app.cart') }}</h4>
          <div v-if="cart.totalCount === 0">{{ t('messages.cart_empty') }}</div>
          <div v-else>
            <div v-for="i in cart.items" :key="i.id" style="display:flex; justify-content:space-between; gap:8px; margin-bottom:8px;">
              <div>{{ i.title }} x{{ i.qty }}</div>
              <div>{{ (i.price * i.qty).toFixed(2) }} $</div>
            </div>
            <div style="margin-top:8px;">
              <div>{{ t('messages.total') }}: {{ cart.totalPrice.toFixed(2) }} $</div>
              <button class="btn" @click="clearCart">{{ t('buttons.clear') }}</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCartStore } from '../stores/cart'
const { t } = useI18n({ useScope: 'global' })
const cart = useCartStore()

const products = ref([
  { id: 'p1', title: 'Product A', description: 'Nice product A', price: 19.99 },
  { id: 'p2', title: 'Product B', description: 'Excellent product B', price: 29.5 },
  { id: 'p3', title: 'Product C', description: 'Useful product C', price: 12.0 }
])

function addToCart(p) {
  cart.add({ id: p.id, title: p.title, price: p.price, qty: 1 })
}
function clearCart(){ cart.clear() }
</script>

<style scoped>
.card { margin-bottom:12px; }
</style>
