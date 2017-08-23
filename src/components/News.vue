<template>
    <div id="news">
        <ul class="title">
            <li>
                <h5>任务</h5>
                <p>有金币可以领取</p>
            </li>
            <li>
                <h5>获得金币</h5>
                <p>3金币</p>
            </li>
            <li>
                <h5>挑战排行</h5>
                <p>232位</p>
            </li>
            <li>
                <h5>竞技PK</h5>
            </li>
        </ul>
        <ul class="item_ul">
            <li v-for="item in msg">
                <div class="theme">
                    <h5>{{item.title}}</h5>
                </div>
                <div class="detail">
                    <p>金币总量：{{item.icon}}</p>
                    <p>{{item.num}}人正在闯关</p>
                </div>
            </li>
        </ul>
        <div style="display: flex">
            <mt-spinner type="fading-circle" color="#1abc9c" style="margin: 0.5rem auto;" :size="20"></mt-spinner>
        </div>
        <p style="font-size: 9px;color: #888888;text-align: center;">更多精彩，敬请期待。。。</p>
    </div>
</template>
<script>
export default {
    name: 'news',
    data() {
        return {
            msg: [
                { title: "主题闯关1", icon: "4536", num: "17665674" },
                { title: "主题闯关2", icon: "5446", num: "5765756" },
                { title: "主题闯关3", icon: "326", num: "213421" }
            ]
        }
    }
}
</script>
<style scoped lang="less">
h5 {
    color: #333333;
}

.title {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #cccccc;
    li {
        flex: 1;
        border-right: 1px solid #cccccc;
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
    li:last-child {
        border: 0;
        h5 {
            line-height: 40px;
        }
    }
}

.item_ul {
    text-align: left;
    padding: 0.3rem 0.6rem;
    margin-top: 1rem;
    li {
        margin-bottom: 1rem;
        border: 1px solid #cccccc;
        .theme {
            border-bottom: 1px solid #cccccc;
            h5 {
                font-size: 0.8rem;
                line-height: 3rem;
                padding-left: 1rem;
            }
        }
        .detail {
            padding-left: 1rem;
            p {
                color: #999999;
                font-size: 0.8rem;
                line-height: 2rem;
                margin: 10px 0;
            }
        }
    }
    li:last-child {
        margin-bottom: 0;
    }
}
</style>