<template>
	<div id="news">
		<h3>我是新来的</h3>
		<ul>
			<li v-for="(val,index) in news">
				{{val}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'news',
		data(){
			return {
				news:['大王让我来巡山','火星人来过','真的不是你','真的不是我']
			}
		}
	}
</script>
<style>
    h3{ margin-top:50px; }
	li{ border-bottom:1px dashed #dedede; margin-top:50px;}

</style>