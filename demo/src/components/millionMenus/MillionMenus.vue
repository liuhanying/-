<template>
    <div id="millionMenus">
        <div id="top_nav_bar" class="center">
            <div class="top_nav">
                <router-link class="top_nav_item" to="/millionMenus/homelyRecipes">我的美食属性（未开放）</router-link>
                <router-link class="top_nav_item" to="/millionMenus/homelyRecipes">家常菜谱</router-link>
                <router-link class="top_nav_item" to="/millionMenus/ChineseFood">中华菜系</router-link>
                <router-link class="top_nav_item" to="#">各地小吃</router-link>
                <router-link class="top_nav_item" to="#">外国菜谱</router-link>
                <router-link class="top_nav_item" to="#">烘焙</router-link>
                <router-link class="top_nav_item" to="#">厨房百科</router-link>
                <router-link class="top_nav_item" to="#">食材百科</router-link>
            </div>


            <!--  -->
            <!-- <div class="nav_items_box">
                <div class="oNav_item_box">
                    <div class="oNav_item_title_box">家常菜谱</div>
                    <div class="oNav_item_content_box">
                        <a href="#" class="oNav_item_content">家常菜</a>
                        <a href="#" class="oNav_item_content">私家菜</a>
                        <a href="#" class="oNav_item_content">凉菜</a>
                        <a href="#" class="oNav_item_content">海鲜</a>
                        <a href="#" class="oNav_item_content">热菜</a>
                        <a href="#" class="oNav_item_content">汤粥</a>
                        <a href="#" class="oNav_item_content">素食</a>
                        <a href="#" class="oNav_item_content">酱料蘸料</a>
                        <a href="#" class="oNav_item_content">微波炉</a>
                        <a href="#" class="oNav_item_content">火锅底料</a>
                        <a href="#" class="oNav_item_content">甜品点心</a>
                        <a href="#" class="oNav_item_content">糕点主食</a>
                        <a href="#" class="oNav_item_content">干果制作</a>
                        <a href="#" class="oNav_item_content">卤酱</a>
                        <a href="#" class="oNav_item_content">时尚饮品</a>
                    </div>
                </div>
                <div class="oNav_item_box">
                    <div class="oNav_item_title_box">每日三餐</div>
                    <div class="oNav_item_content_box">
                        <a href="#" class="oNav_item_content">早餐</a>
                        <a href="#" class="oNav_item_content">午餐</a>
                        <a href="#" class="oNav_item_content">晚餐</a>
                        <a href="#" class="oNav_item_content">下午茶</a>
                        <a href="#" class="oNav_item_content">夜宵</a>
                    </div>
                </div>
                <div class="oNav_item_box">
                    <div class="oNav_item_title_box">人群</div>
                    <div class="oNav_item_content_box">
                        <a href="#" class="oNav_item_content">老年人</a>
                        <a href="#" class="oNav_item_content">产妇</a>
                        <a href="#" class="oNav_item_content">宝宝食谱-婴儿食谱</a>
                    </div>
                </div>
                <div class="oNav_item_box">
                    <div class="oNav_item_title_box">功效</div>
                    <div class="oNav_item_content_box">
                        <a href="#" class="oNav_item_content">疾病调理</a>
                        <a href="#" class="oNav_item_content">功能性调理</a>
                        <a href="#" class="oNav_item_content">脏腑调理</a>
                        <a href="#" class="oNav_item_content">人群膳食</a>
                    </div>
                </div>
            </div> -->

            <!--  -->
        </div>

        <router-view/>
    </div>
</template>

<script>

export default {};
</script>

<style lang="scss">
#millionMenus {
  #top_nav_bar {
    // height: 239px;
    margin-top: 20px;
    background-color: #fdf4e4;

    .top_nav {
      width: 100%;
      height: 50px;
      background-color: rgba(0, 0, 0, 0);

      .top_nav_item:hover {
        background-color: #fafafa !important;
        color:#ff3232 !important;
      }

      .top_nav_item {
        display: inline-block;
        padding: 0 24px;
        color: rgb(51, 51, 51);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 700;
        height: 50px;
        line-height: 50px;
      }
    }

    // .nav_items_box {
    //   width: 100%;
    //   background-color: white;
    //   display: flex;
    //   justify-content: space-between;
    //   flex-wrap: wrap;

    //   .oNav_item_box {
    //     box-sizing: border-box;
    //     padding: 10px 16px 14px;
    //     // border: 0.1px solid rgb(238, 238, 238);

    //     .oNav_item_title_box {
    //       display: Block;
    //       height: 42px;
    //       line-height: 42px;
    //       font-size: 24px;
    //       color: #333;
    //       font-family: Microsoft Yahei;
    //     }

    //     .oNav_item_content_box {
    //       .oNav_item_content {
    //         display: inline-block;
    //         padding: 0px 8px;
    //         color: #666;
    //         font-size: 14px;
    //         height: 28px;
    //         line-height: 28px;
    //       }

    //       .oNav_item_content:hover {
    //         background: #ff3232;
    //         color: #fff;
    //       }
    //     }
    //   }
    // }
  }
}
</style>