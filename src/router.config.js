import Home from './components/Home.vue'
import News from './components/News.vue'
import Information from './components/Information.vue'
import Mytask from './components/Mytask.vue'
import Plan from './components/Plan.vue'
import Swipe from './components/Swipe.vue'
//配置路由
export default {
	mode: 'history',
    routes: [
        	{ path: '/task', component: Mytask },
        	{
            path: '/inhence',
            component: Home,
            children: [{
                    path: 'profile',
                    name: 'plan',
                    component: Plan
                }]
            },
            { path: '/index', component: News },
            { path: '/index/swipe',name: 'swipe', component: Swipe },
            { path: '/my', component: Information },
            { path: '*', redirect: '/task' } //404
        ]

    }