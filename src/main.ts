import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'virtual:svg-icons-register'

// Import design system CSS files
import '@/styles/fonts.css'
import '@/styles/themes.css'
import '@/styles/tokens.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
