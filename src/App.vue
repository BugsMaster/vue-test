<template>
    <div id="app">
        <Myheader :child-msg="msg"></Myheader>
        <span class="login" v-on:click="mylogin"> {{count}}</span>
        <Maincontent class="content"></Maincontent>
        <Navbar></Navbar>
    </div>
</template>
<script>
import Myheader from './components/Myheader.vue'
import Navbar from './components/Navbar.vue'
import Maincontent from './components/Maincontent.vue'

import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    name: 'app',
    data() {
        return {
            msg: '移动端培训'
        }
    },
    methods: {
        // ...mapMutations([
        //     'increment' // 映射 this.increment() 为 this.$store.commit('increment')
        // ]),
        mylogin: function(event) {

            this.$store.commit({
                type: 'increment',
                amount: '--疾风剑豪'
            })
        }

    },
    components: {
        Myheader,
        Navbar,
        Maincontent
    },
    computed: mapState({
        count: "count"
    })



}
</script>
<style scoped lang="less">
@color: #cccccc;
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    .title {
        background-color: #464c5b;
    }
}

h1,
h2 {
    font-weight: normal;
    color: @color;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: @color;
}

.content {
    margin-top: 40px;
    padding: 0 10px;
}

.login {
    position: absolute;
    top: 50%;
    left: 30%;
    z-index: 100;
    background-color: yellowgreen;
    line-height: 1.4rem;
}
</style>