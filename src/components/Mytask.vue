<template>
    <div id="mytask">
        <mt-tabbar class="tabletitle" v-model="selected" @click.native="tabmove()">
            <mt-tab-item id="uncomplete">
                未完成
            </mt-tab-item>
            <mt-tab-item id="complete">
                已完成
            </mt-tab-item>
        </mt-tabbar>
        <mt-tab-container class="tablelist" v-model="active" :swipeable="true" :cancelable="false">
            <mt-tab-container-item id="uncomplete">
                <ul>
                    <li class="clearfix" v-for="item in uncompletemsg" :key="item.item">
                        <img class="img" src="../images/logo.png" alt="">
                        <h3>主题：{{item.item}}</h3>
                        <span>描述：{{item.depic}}</span>
                        <div class="border"></div>
                        <div class="clearfix">
                            <p class="l">时间：{{date|date}}</p>
                            <div class="operation">
                                <p>进入学习</p>
                                <p>立即考试</p>
                            </div>
                        </div>
                        <hr>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="complete">
                <ul>
                    <li class="clearfix" v-for="item in completemsg">
                        <img class="img" src="../images/logo.png" alt="">
                        <h3>主题：{{item.item}}</h3>
                        <span>描述：{{item.depic}}</span>
                        <div class="border"></div>
                        <div class="clearfix">
                            <p class="l">时间：{{date|date}}</p>
                            <div class="operation">
                                <p>进入学习</p>
                                <p>立即考试</p>
                            </div>
                        </div>
                        <hr>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import { Indicator } from 'mint-ui';
export default {
    data() {
        return {
            date: Date.now(),
            uncompletemsg: [
                { item: "危险品培训", depic: "这是一个真正的培训" },
                { item: "化妆品培训", depic: "这是一个真正的培训" },
                { item: "管制刀具-危险品培训", depic: "这是一个真正的培训" },
                { item: "管制刀具", depic: "这是一个真正的培训" }
            ],
            completemsg: [
                { item: "管制刀具-危险品培训", depic: "这也是一个靠谱的培训" },
                { item: "日常培训", depic: "这也是一个靠谱的培训" },
                { item: "管制刀具-化妆品培训", depic: "这也是一个靠谱的培训" },
                { item: "化妆品培训", depic: "这也是一个靠谱的培训" }
            ],
            active: "uncomplete",
            selected: "uncomplete"
        }
    },
    watch: {
        active: function(val, oldVal) {
            this.selected = this.active;
        }
    },
    methods: {
        tabmove() {
            this.active = this.selected;
        }
    }
}
</script>
<style scoped lang="less">
hr {
    color: #999999;
}

h3 {
    font-size: 16/30rem;
    margin-bottom: 8px;
}

p {
    font-size: 12px;
    text-align: left;
}

span {
    font-size: 12px;
}

.l {
    float: left;
}

.border {
    margin: 10px 0;
    border: 1px dashed #cccccc;
}

.operation {
    float: right;
    p {
        color: blue;
        font-size: 12px;
        line-height: 1.3rem;
    }
}

#mytask {
    padding: 0 1rem;
    margin-top: 50px;
    .tabletitle {
        position: relative;
    }
    .tablelist {
        margin-top: 20px;
        ul {
            li {
                margin: 5px 0;
                .img {
                    float: left;
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
}
</style>