<template>
    <div id="header">
        <mt-header fixed :title="msg" class="title">
            <router-link to="" slot="left">
                <mt-button icon="back" @click.native="goBack">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right" @click.native="swipe"></mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
    props: {
        childMsg: String //这样可以指定传入的类型，如果类型不对，会警告
    },
    data() {
        return {
            msg: this.childMsg
        }
    },
    methods: {
        goBack() {
            // window.history.back()
            this.$router.go(-1);
        },
        swipe() {
           this.$router.push({ name: 'swipe' });
        }
    }

}
</script>
<style scoped lang="less">
@color: #cccccc;
#header {
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
</style>