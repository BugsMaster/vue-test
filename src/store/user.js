import * as types from './types'

const state = {

    // 箭头函数可使代码更简练
    name: "哈里亚卡托！",
    count: "-面对疾风吧",

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: "--略略略",

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState(state) {
        return this.count + this.countAlias
    }
}
const getters = {
    countPlusStateeee(state) {
        return state.count + state.countAlias + "==五杀"
    }
}
const mutations = {
    increment(state, payload) {
        state.count += payload.amount
    },
    incrementtime(state,res) {
        state.count += res
    },
    [types.COM_STATUS](state,res) {
        state.name += "超神" +res
    }
}
const actions = {
    incrementAsync({ commit },res) {
        setTimeout(() => {
            commit('incrementtime',res.time)
        }, 2000)
    },
    legenghero({ commit },res) {
        setTimeout(() => {
            commit(types.COM_STATUS,res.time)
        }, 2000)
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}