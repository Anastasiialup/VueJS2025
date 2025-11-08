import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        locale: 'en' // default
    }),
    actions: {
        setLocale(lang) {
            this.locale = lang
        }
    },
    persist: {
        key: 'lab4_settings',
        // pick only locale to persist
        paths: ['locale']
    }
})
