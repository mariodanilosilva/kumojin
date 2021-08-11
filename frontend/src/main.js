import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
const BACKEND = process.env.BACKEND || 'http://localhost:3000'
app.provide('BACKEND', BACKEND)
app.mount('#app')