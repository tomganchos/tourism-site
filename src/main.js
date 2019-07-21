// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueCarousel from '@chenfengyuan/vue-carousel';


Vue.component(VueCarousel.name, VueCarousel);
import './assets/semantic/dist/semantic.min.css'
import './assets/semantic/dist/semantic.min.js'

// import './assets/bootstrap/js/bootstrap.js'
Vue.config.productionTip = false;
Vue.use(require('vue-moment'));
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
