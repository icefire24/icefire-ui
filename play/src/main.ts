import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {IceIcon} from '@icefireui/components'
import  '@icefireui/theme-chalk/index.scss'
createApp(App).use(IceIcon).mount('#app')
