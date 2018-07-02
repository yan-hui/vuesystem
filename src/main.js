import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//一级路由
import Home from "./components/Home"
import Menu from "./components/Menu"
import Admin from "./components/Admin"
import About from "./components/about/About"
import Login from "./components/Login"
import Register from "./components/Register"

//二级路由
import Contact from "./components/about/Contact"
import History from "./components/about/History"
import OrderingGuide from "./components/about/OrderingGuide"
import Delivery from "./components/about/Delivery"

//三级路由
import PersonName from "./components/about/contact/PersonName"
import Phone from "./components/about/contact/Phone"

Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'homelink',
        component: Home
    },
    {
        path: '/menu',
        name: 'menulink',
        component: Menu
    },
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/about',
        component: About,
        name: 'aboutLink',
        redirect: 'history',
        children: [{ //二级路由
                path: '/about/phone',
                name: "contactLink",
                component: Contact,
                redirect: '/personName',
                children: [{ //三级路由
                        path: '/personName',
                        name: 'personNameLink',
                        component: PersonName
                    },
                    {
                        path: '/phone',
                        name: 'phoneLink',
                        component: Phone
                    }
                ]
            },
            {
                path: '/history',
                name: 'historyLink',
                component: History
            },
            {
                path: '/delivery',
                name: 'deliveryLink',
                component: Delivery
            },
            {
                path: '/orderingGuide',
                name: 'orderingGuideLink',
                component: OrderingGuide
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
//全局守卫
router.beforeEach((to,from,next)=>{
	/* alert('还没有登录，请先登录！');
	next();//是否继续跳转，选false不跳转，里面可选跳转路径
	console.log(to); */
	
/* 	if (to.path == '/login'||to.path=='register') {
		next();//继续访问，相当于拦截器不限制
	} else{
		alert('还没有登录，请先登录！');
		next('/login')
	} */
	
})

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
