import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import {routes} from './routes'
Vue.use(VueRouter)


const router = new VueRouter({
    routes,
    mode: 'history'
})
//全局守卫
/* router.beforeEach((to,from,next)=>{
// 	alert('还没有登录，请先登录！');
// 	next();//是否继续跳转，选false不跳转，里面可选跳转路径
// 	console.log(to); 
	//判断store.getters.isLogin==false
 	if (to.path == '/login'||to.path=='/register') {
		next();//继续访问，相当于拦截器不限制
	} else{
		alert('还没有登录，请先登录！');
		next('/login')
	} 
	
}) */





new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
