<template>
    <div id="plan">
        <Myheader :child-msg="msg"></Myheader>
        <div class="content">
            这是一个很不错的计划！
        </div>
    </div>
</template>
<script>
import Myheader from './Myheader.vue'
export default {
    data() {
        return {
            msg: '计划列表'
        }
    },
    components: {
        Myheader
    }
}
</script>
<style scoped lang="less">
.content {
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    bottom: -40px;
    width: 25rem;
    background-color: yellowgreen;
    z-index: 200;
}
</style>