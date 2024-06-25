import './style.css'

import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'

import App from './App.vue'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
