import { createApp } from 'vue'
import './style.css'
import 'virtual:uno.css'
import { vFocus } from './directives'
import App from './App.vue'

createApp(App).directive('focus', vFocus).mount('#app')
