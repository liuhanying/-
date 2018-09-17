<template>
    <div id="health" class="center">

        <!--  -->
        <div class="nav_items_box">
            <div class="oNav_item_box">
                <div class="oNav_item_title_box">饮食资讯</div>
                <div class="oNav_item_content_box">
                    <a href="#" class="oNav_item_content">新鲜资讯</a>
                    <a href="#" class="oNav_item_content">食品安全</a>
                </div>
            </div>
            <div class="oNav_item_box">
                <div class="oNav_item_title_box">饮食文化</div>
                <div class="oNav_item_content_box">
                    <a href="#" class="oNav_item_content">没事典故</a>
                    <a href="#" class="oNav_item_content">茶文化</a>
                    <a href="#" class="oNav_item_content">外国饮食文化</a>
                    <a href="#" class="oNav_item_content">酒文化</a>
                    <a href="#" class="oNav_item_content">中国餐厅礼仪</a>
                </div>
            </div>
            <div class="oNav_item_box">
                <div class="oNav_item_title_box">专区</div>
                <div class="oNav_item_content_box">
                    <a href="#" class="oNav_item_content">孕妇专区</a>
                </div>
            </div>
            <div class="oNav_item_box">
                <div class="oNav_item_title_box">健康指南</div>
                <div class="oNav_item_content_box">
                    <a href="#" class="oNav_item_content">饮食小常识</a>
                    <a href="#" class="oNav_item_content">饮食禁忌</a>
                    <a href="#" class="oNav_item_content">养生妙方</a>
                    <a href="#" class="oNav_item_content">中医保健</a>
                    <a href="#" class="oNav_item_content">美容瘦身</a>
                    <a href="#" class="oNav_item_content">母婴健康饮食</a>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="health_box">
            <div class="title_box">
                合理的饮食，是身体健康的第一要素
                <span class="more_box">
                    <a href="#">最新</a>
                    <span>|</span>
                    <a href="#">最热</a>
                </span>
            </div>
            <!--  -->
            <div class="health_content_box">

                <div class="carousel_menu_item_content"  v-for="item in 40" :key="item">

                    <img src="http://images.meishij.net/p/20161219/2963f6c85b0bfff744f59b31073d944d_150x150.jpg" alt="">

                    <!-- 上下浮动框 -->
                    <div class="carousel_menu_item_content_shuoming_box">
                        <div class="carousel_menu_item_content_shuoming_box_all">
                            <div class="carousel_menu_item_content_shuoming_box_1">
                                <p class="carousel_menu_item_content_name">放调料的最佳时间你可知道？</p>
                                <span class="carousel_menu_item_content_sentiment">13评论5612人气</span>
                                <p class="carousel_menu_item_content_maker">诸葛白少侠</p>
                            </div>
                            <!-- <div class="carousel_menu_item_content_shuoming_box_2">
                                <div class="menu_item_power">17步 / 大概30分钟</div>
                                <div class="menu_item_kinds">烘焙 / 甜品</div>

                            </div> -->
                        </div>
                    </div>
                </div>

            </div>
        </div>




    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#health {
  .nav_items_box {
    width: 100%;
    background-color: white;
    display: flex;
    //   justify-content: space-between;
    flex-wrap: wrap;

    .oNav_item_box {
      box-sizing: border-box;
      padding: 10px 16px 14px;
      margin-right: 10px;
      // border: 0.1px solid rgb(238, 238, 238);

      .oNav_item_title_box {
        display: Block;
        height: 42px;
        line-height: 42px;
        font-size: 24px;
        color: #333;
        font-family: Microsoft Yahei;
      }

      .oNav_item_content_box {
        .oNav_item_content {
          display: inline-block;
          padding: 0px 8px;
          color: #666;
          font-size: 14px;
          height: 28px;
          line-height: 28px;
        }

        .oNav_item_content:hover {
          background: #ff3232;
          color: #fff;
        }
      }
    }
  }

  .health_content_box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .carousel_menu_item_content {
      width: 232px;
      height: 332px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    //   margin-left: 20px;

      .carousel_menu_item_content_shuoming_box {
        width: 232px;
        height: 100px;
        background-color: #ffffff;
        position: relative;
        overflow: hidden;

        .carousel_menu_item_content_shuoming_box_all {
          width: 100%;
          height: 200px;
          position: absolute;
          bottom: -100px;
          transition: bottom 0.5s;

          .carousel_menu_item_content_shuoming_box_1 {
            width: 100%;
            height: 100px;

            .carousel_menu_item_content_name {
              font-size: 14px;
              height: 24px;
              line-height: 24px;
              padding: 11px 14px 0;
              color: #333;
              font-weight: bold;
            }

            .carousel_menu_item_content_sentiment {
              height: 26px;
              line-height: 26px;
              font-size: 12px;
              color: #999;
              padding: 0 14px;
            }

            .carousel_menu_item_content_maker {
              height: 23px;
              line-height: 23px;
              padding: 0 14px;
              font-size: 12px;
              color: #ff3232;
            }
          }

          .carousel_menu_item_content_shuoming_box_2 {
            width: 100%;
            height: 100px;
            background-color: #eee;
            color: #666;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px;
            box-sizing: border-box;
            borderb

            .menu_item_power {
              height: 32px;
              line-height: 32px;
              color: #666;
              font-size: 14px;
              background-image: url("https://s1.c.meishij.net/n/images/list_style1_icons.png");
              background-repeat: no-repeat;
              background-position: -9px -126px;
              padding-left: 25px;
              box-sizing: border-box;
            }

            .menu_item_kinds {
              height: 32px;
              line-height: 32px;
              color: #666;
              font-size: 14px;
              background-image: url("https://s1.c.meishij.net/n/images/list_style1_icons.png");
              background-repeat: no-repeat;
              background-position: -9px -44px;
              padding-left: 25px;
              box-sizing: border-box;
            }
          }
        }
      }
    }
  }
}
</style>