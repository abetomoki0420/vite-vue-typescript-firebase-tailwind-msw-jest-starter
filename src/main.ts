import { createApp } from 'vue'
import { worker }  from './mocks/browser'

// read tailwindcss
import "./tailwind.dist.css"

// store
import store from "./store";

// router
import router from "./router"

import App from './App.vue'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

createApp(App).use(store).use(router).mount('#app')
