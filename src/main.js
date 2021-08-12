import Vue from 'vue'
import App from './App'

// Style
import './assets/scss/main.scss'

// Store
import store from './store'

// Preloader
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.component('loading', Loading)
Vue.use(Loading)

// UI
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

// Routes
import router from './routes'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  components: { App, Loading },
  template: '<App/>',
})
