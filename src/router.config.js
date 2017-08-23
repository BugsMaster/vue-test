import Home from './components/Home.vue'
import News from './components/News.vue'
import Information from './components/Information.vue'
import Mytask from './components/Mytask.vue'
//配置路由
export default{
	routes:[
            {path:'/task', component:Mytask},
            {path:'/inhence', component:Home},
            {path:'/index',component:News},
            {path:'/my', component:Information},
            {path:'*', redirect:'/my'}  //404
        ]

}