import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import { BootstrapVue} from 'bootstrap-vue'
import './app.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(router)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
