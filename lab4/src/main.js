import { createApp, nextTick } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { i18n } from './i18n'
import router from './router'
import App from './App.vue'
import './assets/main.css'

// create pinia and use persisted state plugin
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.use(router)

// sync i18n locale with settings store AFTER app mounted
app.mount('#app')

// set locale from settings if saved
import { useSettingsStore } from './stores/settings'
const settings = useSettingsStore(pinia)
if (settings && settings.locale) {
    i18n.global.locale.value = settings.locale
}
