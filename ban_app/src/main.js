import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 功能：引入ement组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 注册vue中
Vue.use(ElementUI);

// 引入axios
// node_modules中安装的axios模块
import axios from 'axios'
// 设置axios对象的基础路径属性
axios.defaults.baseURL = "http://127.0.0.1:5050/"
axios.defaults.withCredentials=true   //携带验证
// 将axios对象放入Vue的原型对象中
Vue.prototype.axios = axios
Vue.config.productionTip = false


// 先引入头部组件
import myHeader from './components/myHeader'
// 注册到vue中，头部变成全局组件
Vue.component("my-header",myHeader)

// 引入页脚组件
import myFooter from './components/myFooter'
// 注册到vue中，
Vue.component("my-footer",myFooter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
  
}).$mount('#app')
