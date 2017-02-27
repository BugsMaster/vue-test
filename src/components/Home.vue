<template>
   <div id="home">
	    <h3>{{msg}}</h3>
	    <mt-button @click.native="handleClick">按钮</mt-button>
        <mt-radio  title="请选择性别"  v-model="value"  :options="['男人', '女人', '女博士']"></mt-radio>
        <mt-cell title="跑丢的汽水瓶">{{value}}</mt-cell>
   </div>
	
</template>
<script>
import { Indicator } from 'mint-ui';
export default {
  data () {
    return {
      msg: 'Welcome to  Vue.js !',
      value:'哎呀'
    }
  },
  methods: {
    handleClick(){
      Indicator.open({
        text: 'Loading...',
        spinnerType: 'snake'
      });
      setTimeout(function(){
        Indicator.close();
      }, 2000);
    }
  }
}
</script>	
