import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',//打包上线需要切换成该模式
  routes: [
    {
      path: '/', redirect:'/index'
    },
    {
      path: '/index', component: () => import('../components/login/Login'),
      meta:{title:'登陆'}
    },
    {
      path: '/register', component: () => import('../components/login/Register'),
      meta:{title:'注册'}
    } ,
    {
      path: '/home', component: () => import('../components/home/Home'),
      meta:{title:'主页',home:'home'},
      children:[
        {
          path: 'myInfo101', component: () => import('../components/myInfo/MyInfo101'),
          meta:{title:'与我有关101'},
          children: [
            {//children中的路由不带/
              path: 'myInfo10101', component: () => import('../components/myInfo/MyInfo10101'),
              meta:{title:'与我有关10101'}
            },
            {
              path: 'myInfo10102', component: () => import('../components/myInfo/MyInfo10102'),
              meta:{title:'与我有关10102'}
            },
            {
              path: 'myInfo10103', component: () => import('../components/myInfo/MyInfo10103'),
              meta:{title:'与我有关10103'}
            }
          ]
        },
        {
          path: 'myInfo111', component: () => import('../components/myInfo/MyInfo111'),
          meta:{title:'与我有关111'}
        }
      ]
    }
  ]
})
