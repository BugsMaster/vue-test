import Vue from 'vue'
import Vuex from 'vuex'
import { mapState } from 'vuex'

Vue.use(Vuex);
const mutation = {};
const actions = {};
const state = {};

export default new Vuex.Store({
    state: {

        // 箭头函数可使代码更简练
        count: "-面对疾风吧",

        // 传字符串参数 'count' 等同于 `state => state.count`
        countAlias: '略略略',

        // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        countPlusLocalState(state) {
            return state.count + this.countAlias
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.amount
        }
    }

})