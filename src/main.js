import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
// mint加载
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// 路由模块
Vue.use(VueRouter);

import store from './store/store.js'//vuex

import routerConfig from './router.config.js'
// 运动模块
import './css/animate.css'
//生成路由实例
const router = new VueRouter(routerConfig);
Vue.filter('date', function(input) {
    var oDate = new Date(input);
    return oDate.getFullYear() + '-' + (oDate.getMonth() + 1) + '-' + oDate.getDate() + ' ' + oDate.getHours() + ':' + oDate.getMinutes() + ':' + oDate.getSeconds();
});
console.log(router)
//最后挂到vue上
var vm = new Vue({
    router,
    store,
    render: h => h(App),
    mounted(){
    }
}).$mount('#app');
console.log(410711196807211548)