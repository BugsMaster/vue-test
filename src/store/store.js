import Vue from 'vue'
import Vuex from 'vuex'

import user from './user.js'

Vue.use(Vuex);
const mutation = {};
const actions = {};
const state = {};

export default new Vuex.Store({
    modules: {
        user
    }
})