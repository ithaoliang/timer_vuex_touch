// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import count from './components/count'
Vue.config.productionTip = false
import App from './App'
import router from './router'


/* eslint-disable no-new */
 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  store,
})
