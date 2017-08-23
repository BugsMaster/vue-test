<template>
  	<div id="content">
		<!-- <transition enter-active-class="animated fadeOutLeft" leave-active-class="animated fadeOutRight"> -->
		<transition enter-active-class="animated hinge" >
      <router-view></router-view>
    </transition>
	</div>
</template>
<script>
	export default{
    data(){
       return {

       }
    },
    methods:{

    }
	}

</script>
   	
