import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Product from '../views/allproduct.vue'
// import AddCart from '../views/addtocart'
// import Register from '../components/Register'
// import Login from '../components/Login'
// import Logout from '../components/logout'
// import product from '../Products/ProductList'
import NotFoundComponent from '../views/NotFoundComponent'
// import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'NotFoundComponent',
    component: NotFoundComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
