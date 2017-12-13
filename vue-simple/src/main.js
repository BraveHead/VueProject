import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//开启debug
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

//定义组件
import home from  './component/home'
import list from './component/project/list'
import about from './component/about/about'
import detailItem from './component/project/detailItem'
import pay from './component/project/pay'
import aboutItem from './component/about/aboutItem'

//创建路由   配置
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
        component: home
    },
    {
      path:'/list',
      name: 'list',
      component: list,

    },
    {
      path: '/list/:itemId',
      name:'detail',
      component: detailItem
    },
    {
      path: '/list/:itemId/pay',
      name: 'pay',
      component: pay
    },
    {
      path:'/about',
      name: 'about',
      component: about
    },
    {
      path: '/about/:aboutId',
      name:'aboutItem',
      component: aboutItem
    }
  ]
});

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
