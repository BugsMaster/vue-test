<template>
    <div id="app">
        <Myheader :child-msg="msg"></Myheader>
        <Maincontent class="content"></Maincontent>
        <Navbar v-show="navshow"></Navbar>
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

    },
    components: {
        Myheader,
        Navbar,
        Maincontent
    },
    computed: {
        headshow(){
            return this.$route.path.split('/').length>2?false:true
        },
        navshow(){
            return this.$route.path.split('/').length>2?false:true
        }
    }



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

</style>