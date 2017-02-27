<template>
<div id="navbar">
    <mt-tabbar >		
   		<mt-tab-item id="职位" :class="{iselected:selected1==i}" @click.native="selecte1()">
    	    <img slot="icon" src="../images/logo.png">
   		    <router-link to="/job">职位</router-link>
  		</mt-tab-item>
 		<mt-tab-item id="首页" :class="{iselected:selected2==i}" @click.native="selecte2()">
  		    <img slot="icon" src="../images/logo.png">
  		    <router-link to="/index">首页</router-link>
 		</mt-tab-item>
  		<mt-tab-item id="我的" :class="{iselected:selected3==i}" @click.native="selecte3()">
   		    <img slot="icon" src="../images/logo.png">
   		    <router-link to="/my">我的</router-link>
  		</mt-tab-item>
	  </mt-tabbar>
	<div>
		<transition enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut">
           <router-view></router-view>
        </transition>
	</div>
   	
</div>
</template>
<script>
	export default{
        data(){
      	   return {
            selected1:1,
            selected2:2,
      		  selected3:3,
            i:0
      	   }
        },
        methods:{
          selecte1 (){
             this.i=1
          },
          selecte2 (){
             this.i=2
          },
        	selecte3 (){
              this.i=3
        	}
        }
	}

</script>
<style scoped>
.mint-tabbar a{
	display: block;
	color: #e84c3d;
	font-size: 24px;
}
.mint-tabbar {
    background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    position: relative;
    background-color: #fafafa;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    text-align: center;
}
.mint-tabbar .mint-tab-item.iselected {
    background-color: #eaeaea;
    color: #26a2ff;
}
.mint-tabbar.is-fixed {
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 199;

}

</style>
