import { createApp } from 'vue'
import {firebaseApp} from './firebaseConfig'
import router from './routes'

import App from './App.vue'

import './styles/main.css'
firebaseApp


createApp(App).
use(router).
mount('#app')

