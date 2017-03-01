<template>
	<div id="news">
		<h3>我是新来的</h3>
		<ul>
			<li v-for="(val,index) in news">
				{{val}}
			</li>
		</ul>
		<p>{{date|date}}</p>
		<ul class="ul_list">
			<li v-for="(index,myval) in list">{{myval}},{{index}}</li>
		</ul>
	</div>
</template>
<script>

	export default{
		name:'news',
		data(){
			return {
				news:['大王让我来巡山','火星人来过','真的不是你','真的不是我'],
				date:Date.now(),
				list:{
					one:"漂流瓶",
					two:"汽水瓶",
					three:"魔鬼瓶"
				}
			}
		}
	}
</script>
<style>
    h3{ margin-top:50px; }
	li{ border-bottom:1px dashed #dedede; margin-top:50px;}
    p{ color: #e84c3d; padding-top: 20px; }
    .ul_list{
        display: flex;
      
    }  
     .ul_list li {
            flex:1;
        }
</style>