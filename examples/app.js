
import Vue from 'vue'
import App from './views/App.vue'
import kdloading from '../src/index.js'
import '../theme/src/light/index.scss';

Vue.use(kdloading);
new Vue({ 
  el: '#app',
  render: h => h(App)
})