import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Import design system CSS files
import '../styles/fonts.css'
import '../styles/themes.css'
import '../styles/tokens.css'
import '../styles/utilities.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
