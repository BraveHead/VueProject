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
      children: [
        {
          path:'detailItem',
          name: 'detailItem',
          component: detailItem
        }
      ]
    },
    {
      path:'/about',
      name: 'about',
      component: about
    }
  ]
});

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
