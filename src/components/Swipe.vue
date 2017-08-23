<template>
	<div id="swipe" class="page-swipe">
	   <!--  <mt-swipe :auto="3000" :show-indicators="true">
	              <mt-swipe-item :class="{slide{{index}}:true}" v-for="(val,index) in msg" :key="index">{{val}}</mt-swipe-item>
	           </mt-swipe> -->
        <mt-swipe :auto="3000" :show-indicators="true">
           <mt-swipe-item :class="{slide1:true}">{{msg}}</mt-swipe-item>
           <mt-swipe-item :class="{slide2:true}">{{msg}}</mt-swipe-item>
           <mt-swipe-item :class="{slide3:true}">{{msg}}</mt-swipe-item>
        </mt-swipe>
	</div>
</template>
<script>
	export default{
		data(){
			return {
			  msg:['你好','你不好','跑丢的汽水瓶']
			}
		}
	}
</script>

<style scoped>
.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
    line-height: 200px;
}
.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}

.my-btn-box{
  margin-top:50px;
}
</style>