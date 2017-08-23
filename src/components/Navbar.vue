<template>
    <div id="navbar">
        <mt-tabbar :fixed="true">
            <mt-tab-item id="任务" :class="{iselected:i==1}" >
                <img src="../images/logo.png">
                <router-link @click.native="selecte1" to="/task">任务</router-link>
            </mt-tab-item>
            <mt-tab-item id="提升" :class="{iselected:i==2}" >
                <img src="../images/logo.png">
                <router-link @click.native="selecte2" to="/inhence">提升</router-link>
            </mt-tab-item>
            <mt-tab-item id="挑战" :class="{iselected:i==3}">
                <img src="../images/logo.png">
                <router-link @click.native="selecte3" to="/index">挑战</router-link>
            </mt-tab-item>
            <mt-tab-item id="我的" :class="{iselected:i==4}">
                <img src="../images/logo.png">
                <router-link @click.native="selecte4" to="/my">我的</router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selected: [1, 2, 3, 4],
            i: 1
        }
    },
    methods: {
        selecte1() {
            this.i = this.selected[0];
        },
        selecte2() {
            this.i = this.selected[1];
        },
        selecte3() {
            this.i = this.selected[2];
        },
        selecte4() {
            this.i = this.selected[3];
        }
    }
}
</script>
<style scoped lang="less">
.mint-tabbar {
    .mint-tab-item {
        padding: 0;
        position: relative;
        .mint-tab-item-label {
            a {
                display: block;
                color: #1abc9c;
                font-size: 16px;
                padding-top: 2rem;
                padding-bottom: 0.5rem;
            }
            img {
                position: absolute;
                top: 5px;
                left: 50%;
                width: 1.4rem;
                height: 1.4rem;
                margin-left:-0.7rem; 
            }
        }
    }
}

.mint-tabbar {
    background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    position: relative;
    background-color: #f2f2f2;
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
    border-bottom: 2px #1abc9c solid;
}

.mint-tabbar.is-fixed {
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 199;
}
</style>