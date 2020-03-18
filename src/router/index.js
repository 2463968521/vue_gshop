/*
  这是路由器对象模块
 */
//首先引入Vue
import Vue from 'vue'
//引入路由
import VueRouter from "vue-router";
import Msite from "../pages/Msite/Msite";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login"
//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  //所有路由 多个
  routes:[
    {
      path:'/msite',
      //值就是某一个组件
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      //值就是某一个组件
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      //值就是某一个组件
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      //值就是某一个组件
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      //值就是某一个组件
      component:Login
    },
    //默认显示的组件
    {
      path:'/',
      redirect:'/msite',
      meta:{
        showFooter:true
      }
    }
  ],
  //重新回到组件的初始位置
  scrollBehavior (to, from, savedPosition) {
    return { x:0, y:0}
  }
})

