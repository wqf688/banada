import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login'
import Reg from '../views/Reg'
import Products from '../views/Products'
import Ex from '../views/ex'
import Details from "../views/Details"
import Cart from "../views/Cart";


Vue.use(VueRouter)

const routes = [
 {path:"/",component:Index},
 {path:'/login',component:Login},
 {path:'/reg',component:Reg},
 {path:'/products',component:Products},
 {path:'/ex',component:Ex},
 {path:'/details/:lid',component:Details,props:true},
 {path:'/cart',component:Cart}
]

const router = new VueRouter({
  routes
})

export default router
