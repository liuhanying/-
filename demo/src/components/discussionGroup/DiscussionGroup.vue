<template>
    <div id="discussionGroup_box">
        <div class="center">
            <div class="title_box">有人的地方才有力量</div>

            <div class="top_input_box">
                <div class="top_input_left">
                    <a class="top_input_left_item" href="#">餐桌时光</a>
                    <a class="top_input_left_item" href="#">玩转烘焙</a>
                    <a class="top_input_left_item" href="#">美食课堂</a>
                    <a class="top_input_left_item" href="#">最IN活动</a>
                </div>

                <div class="top_input_right">
                    <div class="input_border">
                        <div class="input_box">
                            <input class="myInput" type="text" placeholder="索索话题">
                        </div>
                        <span class="submit_icon"></span>
                    </div>
                </div>
            </div>

            <div class="content_box">

                <div class="content_left">
                    <div class="content_left_top_box">
                        <img src="http://images.meishij.net/p/20160519/88080455cda54207f68541b1161b6660.jpg" alt="">
                        <div class="content_left_bottom_box">
                            <div class="content_left_bottom_big">
                                不“变态”怎能成就美味
                            </div>
                            <div class="content_left_bottom_small">
                                美味『地下变态茎』大盘点
                            </div>
                        </div>
                    </div>

                    <div class="content_left_down_box">
                        <div class="content_left_down_box_title">
                            推荐话题
                        </div>
                        <div class="content_left_down_item" v-for="item in 20" :key="item">
                            <div class="left_down_item_left">
                                <span>17845<br>浏览</span>
                            </div>
                            <div class="left_down_item_right">
                                <a class="item_right_text_shang" href="#">当“世界那么大”遇上“美食那么多”</a>
                                <a class="item_right_text_zhong" href="#">
                                    船舶驶过的影子有笛声附和，河畔人声熙攘，这是小编在2016河马生活节上于黄...</a>
                                <a class="item_right_text_xia" href="#">
                                    <span>发帖人：美食小编</span>
                                    <span>最后回复：Vivian美食薇</span>
                                    <span>发布时间：2016-09-29 10:17</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="content_aside">
                    <div class="fbxt">
                        发布新帖
                    </div>

                    <div class="gfhd_box">
                        <div class="gfhd aside_title">
                            官方活动
                        </div>
                        <div class="gfhd_item" v-for="item in 5" :key="item">
                            <img src="https://s1.st.meishij.net/user/41/203/q113291_86576.jpg" alt="">
                            <a href="#">家乐【炆炖系列浓汤宝...</a>
                        </div>
                    </div>

                    <div class="jfph_box">
                        <div class="aside_title">
                            积分排行
                        </div>

                        <div class="jfph_box_item" v-for="item in 10" :key="item">
                            <div class="ran1">1</div>
                            <div class="ran_avatar_box">
                                <img src="https://s1.st.meishij.net/user/83/142/t410583_65960.jpg" alt="">
                            </div>
                            <div class="ran_name">18LS28xgl零...</div>
                            <div class="ran_fen">525245分</div>
                        </div>

                    </div>


                </div>

            </div>














        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .top_input_box {
        height: 70px;
        background-color: white;
        display: flex;
    }

    .top_input_left {
        width: 655px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .top_input_left_item {
        display: inline-block;
        text-align: center;
        width: 100px;
        height: 36px;
        color: #666;
        font-size: 18px;
        font-family: Microsoft Yahei;
        line-height: 36px;
        border-radius: 6px;
        margin-left: 10px;
    }

    .top_input_left_item:hover {
        background-color: #eee;
    }

    .top_input_right {
        width: 300px;
        height: 70px;
        display: flex;
        align-items: center;
        /* background-color: pink; */

        /* text-align: right; */
    }

    .myInput {
        width: 240px;
        height: 40px;
        border: none;
        padding: 0 10px;

        /* float: right; */
    }

    .submit_icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        background-image: url('https://s1.c.meishij.net/n/images/searchbtn1.png');
        background-repeat: no-repeat;
        background-position: 0px 0px;
        /* float: right; */
    }

    .input_border {
        border: 1px solid #eee;
        display: flex;
    }

    .input_box {

        /* width: 250px; */
        height: 40px;
    }

    .content_box {
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }

    .content_left {
        width: 720px;
        margin-bottom: 20px;
    }

    .content_left_top_box {
        width: 100%;
        height: 388px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .content_left_bottom_box {
        width: 630px;
        height: 88px;
        padding: 10px 20px 10px 20px;
        box-sizing: border-box;
    }

    .content_left_bottom_big {
        width: 100%;
        height: 42px;
        font-size: 24px;
        line-height: 42px;
    }

    .content_left_bottom_small {
        width: 100%;
        height: 18px;
        color: rgb(102, 102, 102);
        font-size: 12px;
        line-height: 18px;
    }

    .content_left_down_box {
        width: 100%;
        background-color: white;
    }

    .content_left_down_box_title {
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        font-weight: bold;
        color: #ff3232;
        font-family: Microsoft Yahei, 黑体;
        padding-left: 20px;
        border-bottom: 1px solid #ddd;
    }

    .content_left_down_item {
        width: 100%;
        height: 113px;
        /* background-color: pink; */
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        display: flex;

    }

    .left_down_item_left {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 1px solid #60a531;
        padding: 6px 0px;
        color: #60a531;
        text-align: center;
        box-sizing: border-box;
        margin: 20px;
        font-size: 12px;
    }

    .left_down_item_right {
        width: 630px;
    }

    .item_right_text_shang {
        display: inline-block;
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        color: #333;
        font-size: 18px;
        font-family: Microsoft Yahei;
    }

    .item_right_text_zhong {
        display: inline-block;
        width: 100%;
        color: #999;
        line-height: 20px;
        font-size: 14px;

    }

    .item_right_text_xia {
        display: inline-block;
        width: 100%;
        color: #999;
        font-size: 12px;
        height: 40px;
        margin-bottom: 2px;
        display: flex;
        align-items: center;
    }

    .item_right_text_xia>span {
        margin-right: 40px;
    }

    .content_aside {
        width: 250px;
        background-color: white;
        padding: 20px;
        box-sizing: border-box;
    }

    .content_aside>* {
        margin-top: 10px;
    }

    .fbxt {
        width: 210px;
        height: 44px;
        background: #ff3232;
        margin: 20px auto 0px;
        color: #fff;
        font-size: 14px;
        line-height: 44px;
        text-align: center;
    }

    .gfhd_box{
        width: 100%;
    }

    .gfhd,.aside_title  {
        line-height: 50px;
        height: 50px;
        font-size: 18px;
        color: #ff3232;
        font-family: Microsoft Yahei;
    }

    .gfhd_item,.jfph_box_item {
        width: 100%;
        height: 56px;
        padding: 10px 0px;
        box-sizing: border-box;
        display: flex;
    }

    .gfhd_item>a {
        color: #666;
        display: block;
        height: 36px;
        overflow: hidden;
        font-size: 14px;
        margin-left: 10px;
    }

    .jfph_box{
        width: 100%;


    }

    .ran1{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        color: white;
        background-color: rgb(255, 50, 50);
        border-radius: 50%;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        font-weight: 400;
    }
    .ran_avatar_box{
        width: 36px;
        height: 36px;
    }
    .ran_avatar_box>img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .jfph_box_item{
        font-size: 12px;
        justify-content: space-between;
        align-items: center;
    }
    .ran_name{
        color: #333;
        line-height: 36px;
    }
    .ran_fen{
        color: #666;
        line-height: 36px;
    }
</style>