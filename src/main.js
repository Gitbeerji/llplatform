import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

//环境变量
//console.log(process)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
