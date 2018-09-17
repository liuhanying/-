<template>
    <div id="foodMania_box">
        <div class="top"></div>

        <!-- 轮播图 -->
        <div class="f_carousel_box">

        </div>

        <!-- 品类 -->
        <div class="kinds_box">
            <div class="kinds_item" @mouseenter="myEnter($event)" @mouseleave="myLeave" v-for="item in 11" :key="item">
                <a class="kinds_icon" href="#"><img src="https://s1.st.meishij.net/user/123/106/t9651623_152359212776319.jpg"
                        alt=""></a>
                <a class="kinds_name" href="#">中式菜</a>
            </div>

        </div>
        <!--  -->
        <div class="top"></div>
        <!--  -->

        <div class="title_box">
            内容精选
        </div>

        <div class="jingxuan">
            <div class="jingxuan_item_box" v-for="item in 6" :key="item">
                <img src="https://s1.st.meishij.net/p2/small/20180810/623fe7bd9f5bbb01f7ee9a8e5c718168.jpeg" alt="">
                <div class="jingxuan_content">
                    <a class="jingxuan_name" href="#">别有一番滋味的蒜香面包</a>
                    <p class="jingxuan_data"> 251704浏览 · 28评论 · 11228赞</p>
                    <a class="maker_name" href="#">开心豆ht</a>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {


        methods: {
            myEnter(e) {
                $(e.target).css("background-color", "#ff7c7c")
                $(e.target).find('a.kinds_name').css({
                    "background-color": "#fff",
                    color: '#ff7c7c'
                })
            },

            myLeave() {
                $('.kinds_item').css("background-color", "#fff")
                $('.kinds_name').css({
                    "background-color": "#ff7c7c",
                    color: '#fff'
                })
            }
        }

    }
</script>

<style scoped>
    #foodMania_box {
        width: 100%;
        background-color: #f5f5f5;
    }

    .top {
        height: 20px;
    }

    .f_carousel_box {
        width: 1030px;
        height: 344px;
        background-color: antiquewhite;
        margin: 0 auto;

    }

    .kinds_item {
        width: 92px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
        border: 0.5px solid #fafafa;
    }

    .kinds_box {
        width: 1012px;
        height: 140px;
        margin: 0 auto;
        margin-top: 40px;
        display: flex;
        background-color: white;
    }

    .kinds_box>a {
        display: inline-block;
    }

    .kinds_icon {
        width: 64px;
        height: 64px;

    }

    .kinds_icon>img {
        width: 100%;
        border-radius: 50%;
    }

    .kinds_name {
        text-align: center;
        width: 52px;
        height: 24px;
        background: #ff7c7c;
        color: #fff;
        font-size: 12px;
        border-radius: 2px;
        line-height: 24px;
    }

    .jingxuan {
        margin: 0 auto;
        width: 1050px;
        height: 616px;
        display: flex;
        flex-wrap: wrap;
    }

    .jingxuan_item_box {
        width: 330px;
        height: 288px;
        margin: 0 10px 20px 10px;
        font-size: 0;

    }

    .jingxuan_content {
        widows: 330px;
        height: 102px;
        padding: 12px 20px 16px 20px;
        box-sizing: border-box;
        background-color: white;
    }

    .jingxuan_name {
        font-size: 18px;
        color: #333;
        line-height: 30px;
        height: 30px;
        display: block;
    }

    .jingxuan_data {
        font-size: 12px;
        color: #999;
        line-height: 22px;
        height: 22px;
    }

    .maker_name {
        font-size: 12px;
        height: 22px;
        line-height: 22px;
        color: #ff4c35;
    }
</style>