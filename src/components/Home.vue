<template>
    <div id="home">
        <div class="clearfix title">
            <h3 class="h3">第一天</h3>
            <div class="cilcle">
                <!-- <router-link class="btn" :to="{ name: 'plan'}">创建学习计划</router-link> -->
                <a class="btn" v-on:click="btn">创建学习计划</a>
            </div>
            <h3 class="h3">未开始</h3>
        </div>
        <ul class="learnday">
            <li>
                <h5>今日已学</h5>
                <p>3</p>
            </li>
            <li>
                <h5>已学总数</h5>
                <p>5</p>
            </li>
            <li>
                <h5>已学天数</h5>
                <p>13</p>
            </li>
        </ul>
        <div class="plan_box">
            <mt-button class="modify_plan" @click.native="handleClick">修改计划</mt-button>
            <mt-button class="task_date" @click.native="handleClick">任务日历</mt-button>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { Indicator } from 'mint-ui';
export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        btn() {
            this.$router.push({ name: 'plan' });
        },
        handleClick() {
            Indicator.open({
                text: 'Loading...',
                spinnerType: 'snake'
            });
            setTimeout(function() {
                Indicator.close();
            }, 2000);
        }
    }
}
</script>
<style scoped lang="less">
#home {
    padding-top: 10px;
}

.title {
    display: flex;
    .h3 {
        float: left;
        line-height: 6rem;
        flex: 1;
    }
    .cilcle {
        flex: 1;
        text-align: center;
        display: flex;
        .btn {
            margin: 0 auto;
            font-size: 14px;
            color: #1abc9c;
            display: block;
            float: left;
            border-radius: 50%;
            height: 7rem;
            width: 7rem;
            line-height: 7rem;
            border: 1px solid #666666;
        }
    }
}

.learnday {
    margin-top: 0.8rem;
    display: flex;
    li {
        flex: 1;
        h5 {
            font-size: 12px;
            color: #666666;
        }
        p {
            line-height: 1.5rem;
            font-size: 14px;
            color: #000000;
            font-weight: 700;
        }
    }
}

.plan_box {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
    display: flex;
    .modify_plan,
    .task_date {
        flex: 1;
        line-height: 5rem;
        height: 5rem;
        font-weight: 700;
        color: #333333;
        background-color: transparent;
        box-shadow: none;
    }
    .modify_plan {
        border-right: 1px solid #ccc;
    }
}
</style>