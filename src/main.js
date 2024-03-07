import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { usersMSInstance } from './common/axiosInstance'

const app = createApp(App)

app.config.globalProperties.$http = usersMSInstance

app.use(router).mount('#app')
