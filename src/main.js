import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components'
import './icons'

// import './assets/styles/global.scss'
import './assets/js/htmlFontSizeNoScale'
import './assets/js/fastClick'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
