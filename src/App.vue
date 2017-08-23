<template>
  <div id="app">
    <mt-header fixed :title="msg" class="title">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <Maincontent class="content"></Maincontent>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Swipe from './components/Swipe.vue'
import Navbar from './components/Navbar.vue'
import Maincontent from './components/Maincontent.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: '移动端培训'
    }
  },
  methods: {
   
  },
  components:{
    Swipe,Navbar,Maincontent
  }
}
</script>

<style scoped lang="less">
@color:#cccccc;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .title{
    background-color: #464c5b;
  }
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
.content{
  margin-top: 40px;
  padding: 0 10px; 
}
</style>
