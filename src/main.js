import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from '@/App.vue'
import UIcomponents from '@/components/UI/componentsLib.js' // импортируем файл componentsLib.js

const app = createApp(App)

UIcomponents.forEach(compoment => {
  app.component(compoment.name, compoment) // поскольку в каждом компоненте мы задали свойство name, то именно оно и будет использоваться как первый аргумент
})

app.mount('#app')