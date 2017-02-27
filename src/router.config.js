import Home from './components/Home.vue'
import News from './components/News.vue'
import Swipe from './components/Swipe.vue'
//配置路由
export default{
	routes:[
            {path:'/job', component:Home},
            {path:'/index',component:News},
            {path:'/my', component:Swipe},
            {path:'*', redirect:'/index'}  //404
        ]

}