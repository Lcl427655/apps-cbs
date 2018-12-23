import Vue from 'vue';
import App from './App';
//less
import Less from 'less';

Vue.use(Less);
//轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper);
//阿里矢量图
import './assets/icon/iconfont.css';
//router
import router from './router';
import VueRouter from 'vue-router';
import iView from 'iview';
//iView
import 'iview/dist/styles/iview.css';
Vue.use(VueRouter);
Vue.use(iView);
//官网配置问题？？？待定

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  //设置标题
  document.title = to.meta.title;
  //放行
  next();
  //取本地浏览器数据
  /*const role = localStorage.getItem('ms_username');
  console.log(role);
  if(!role && to.path !== '/index'){
    next('/index');
  }else if(to.meta.permission){
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === 'admin' ? next() : next('/');
  }else{
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/'){
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      });
    }else{
      next();
    }
  }*/
})

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
