import {createApp} from 'vue'
import App from './App.vue'
import Icon from '@icefireui/components/icon'
import  '@icefireui/theme-chalk/src/index.scss'
const app=createApp(App)
app.use(Icon)
app.mount('#app')