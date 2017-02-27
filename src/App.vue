<template>
  <div id="app">
     <mt-header :title="msg">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    
    <Navbar></Navbar>
  </div>
</template>

<script>
import Swipe from './components/Swipe.vue'
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to  Vue.js !',
      value:'哎呀'
    }
  },
  methods: {
   
  },
  components:{
    Swipe,Navbar
  }
}
</script>

<style scoped lang="less">
@color:red;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
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
</style>
