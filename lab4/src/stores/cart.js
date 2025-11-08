import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] // { id, title, price, qty }
    }),
    getters: {
        totalCount: (state) => state.items.reduce((s, it) => s + it.qty, 0),
        totalPrice: (state) => state.items.reduce((s, it) => s + it.qty * it.price, 0)
    },
    actions: {
        add(item) {
            const idx = this.items.findIndex(i => i.id === item.id)
            if (idx !== -1) {
                this.items[idx].qty += item.qty || 1
            } else {
                this.items.push({ ...item, qty: item.qty || 1 })
            }
        },
        remove(id) {
            this.items = this.items.filter(i => i.id !== id)
        },
        clear() {
            this.items = []
        }
    },
    persist: {
        key: 'lab4_cart',
        // persist whole cart
        paths: ['items']
    }
})
