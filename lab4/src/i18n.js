import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ua from './locales/ua.json'

export const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en, ua },
    globalInjection: true
})
