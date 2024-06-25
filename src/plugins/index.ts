import { App } from 'vue'

import { pinia } from '@/plugins/pinia.ts'
import router from '@/router'
import PrimeVue from 'primevue/config';

import { createI18n } from 'vue-i18n'

import ru from '@/locales/ru.json'
import uz from '@/locales/uz.json'

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'uz',
  messages: {
    ru,
    uz,
  },
})


export function registerPlugins(app: App): void {
  app.use(router).use(pinia)
  app.use(PrimeVue)
  app.use(i18n)
}
