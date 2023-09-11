import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'
import 'animate.css';
import 'amfe-flexible'
import { createPinia } from 'pinia';
import "animate.css/animate.min.css";
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
