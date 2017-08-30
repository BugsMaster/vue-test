<template>
    <div id="infor">
        <div class="head">
            <img src="../images/logo.png" alt="" v-on:click="emit">
            <h5>认真的小炒肉</h5>
        </div>
        <ul class="title">
            <li>
                <h5>27小时78分钟</h5>
                <p>学习时间</p>
            </li>
            <li>
                <h5>危险品</h5>
                <p>学习内容</p>
            </li>
            <li>
                <h5>81天</h5>
                <p>连续学习</p>
            </li>
        </ul>
        <ul class="detail">
            <li>
                <h5>错题、收藏</h5>
                <p>汇总错题、收藏题目</p>
            </li>
            <li>
                <h5>PK记录</h5>
                <p>PK记录汇总</p>
            </li>
            <li>
                <h5>学情分析</h5>
                <p>学习记录的进度</p>
            </li>
            <li>
                <h5>我的金币</h5>
                <p>金币详情</p>
            </li>
            <li>
                <h5>设置</h5>
                <p>通用项进行设置</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
       emit(){
          this.$store.commit({
                type: 'countPlusLocalState',
                amount: '--疾风剑豪'
            })
       }
    }
}
</script>
<style scoped lang="less">
.head {
    padding-top: 2rem;
    position: relative;
    img {
        width: 5rem;
        height: 5rem;
        margin: 0 auto;
        border-radius: 50%;
        background-color: #fff;
        position: relative;
        z-index: 6;
    }
    h5 {
        margin-top: 0.5rem;
        font-size: 16px;
        color: #666666;
        line-height: 1.5rem;
    }
    &:after {
        content: "";
        width: 100%;
        display: block;
        border-bottom: 1px solid #cccccc;
        position: absolute;
        top: 50%;
        z-index: 2;
    }
}

.title {
    margin-top: 0.8rem;
    display: flex;
    padding: 10px 0;
    li {
        flex: 1;
        h5 {
            font-size: 14px;
            line-height: 22px;
        }
        p {
            font-size: 12px;
            line-height: 18px;
            color: #999999;
        }
    }
}

.detail {
  margin-top: 2rem;
    text-align: left;
    border-top: 1px solid #cccccc;
    li {
        padding: 5px 0;
        border-bottom: 1px solid #cccccc;
        h5 {
            color: #666666;
            font-size: 0.8rem;
            line-height: 2rem;
            padding-left: 1rem;
        }
        p {
            color: #999999;
            font-size: 0.8rem;
            line-height: 1rem;
            padding-left: 1rem;
        }
    }
}
</style>