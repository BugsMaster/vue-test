const state = {

    // 箭头函数可使代码更简练
    count: "-面对疾风吧",

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: '--略略略',

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
        console.log(res)
        state.count += res
    }
}
const actions = {
    incrementAsync({ commit },res) {
        setTimeout(() => {
            commit('incrementtime',res.time)
        }, 2000)
    },
    setInformation({ commit }, res) {
        axios.get('https://api.douban.com/v2/movie/top250?count=10')
            .then(function(response) {
                console.log(response);
            })
            .catch(function(err) {
                console.log(err);
            });
    },
    /**
     * 用户登录
     */
    setUserInfo({ commit }, res) {
        localStorage.setItem('userInfo', JSON.stringify(res))
        localStorage.setItem('loginStatus', true)
        commit(types.SET_USER_INFO, res)
        commit(types.SET_LOGIN_STATUS, true)
    },

    /**
     * 退出登录
     */
    setSignOut({ commit }) {
        localStorage.removeItem('loginStatus')
        localStorage.removeItem('userInfo')
        commit(types.SET_LOGIN_STATUS, false)
        commit(types.SET_USER_INFO, {})
    },

    /**
     * 请求用户信息
     */
    getUserData({ commit }, id) {
        commit(types.COM_LOADING_STATUS, true)
        api.UserInfo(id)
            .then(res => {
                commit(types.COM_LOADING_STATUS, false)
                commit(types.GET_USER_DATA, res.data)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}