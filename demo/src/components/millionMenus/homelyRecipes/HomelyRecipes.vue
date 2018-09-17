<template>
    <div id="homelyRecipes_bar" class="center">
        <!--  -->
        <div class="nav_items_box">
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
            </div>

            <!--  -->
        <div class="homelyRecipes_box center">
            <div class="title_box">印象中的那些妈妈的味道
                <span class="more_box">
                    <a href="#">最新</a>
                    <span>|</span>
                    <a href="#">最热</a>
                </span>
            </div>
            <!--  -->
            <div class="homelyRecipes_content_box">
                <div class="homelyRecipes_left_box">
                    <div class="left_nav">
                        <router-link class="left_nav_item" to="/millionMenus/homelyRecipes/leftNav1">普通食材</router-link>
                        <router-link class="left_nav_item" to="/millionMenus/homelyRecipes/leftNav2">食材筛选</router-link>
                    </div>
                    <router-view />
                </div>


                <div class="homelyRecipes_right_box">
                    <div class="carousel_menu_item_content_box">
                        <div class="carousel_menu_item_content" @mouseenter.stop="myEnter($event)" v-on:mouseleave.stop="myLeave($event)"
                            v-for="item in 40" :key="item">

                            <img src="https://s1.st.meishij.net/r/139/60/2827639/a2827639_153658087153171.jpg" alt="">

                            <!-- 上下浮动框 -->
                            <div class="carousel_menu_item_content_shuoming_box">
                                <div class="carousel_menu_item_content_shuoming_box_all">
                                    <div class="carousel_menu_item_content_shuoming_box_1">
                                        <p class="carousel_menu_item_content_name">桃花酥</p>
                                        <span class="carousel_menu_item_content_sentiment">3评论5364人气</span>
                                        <p class="carousel_menu_item_content_maker">悠哈厨房</p>
                                    </div>
                                    <div class="carousel_menu_item_content_shuoming_box_2">
                                        <div class="menu_item_power">17步 / 大概30分钟</div>
                                        <div class="menu_item_kinds">烘焙 / 甜品</div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    myEnter(e) {
      // console.log('xxxxxxx')
      $(e.target.children[1].children[0]).css("bottom", "0px");
      //  console.log(e.target)
    },
    myLeave(e) {
      // console.log('ccccccccccc')
      $(e.target.children[1].children[0]).css("bottom", "-100px");
    },

    newsEnter(e) {
      // console.log(e.target)
      $(e.target).addClass("text_big");
      $(e.target)
        .siblings()
        .removeClass("text_big");
    }
  },

  mounted() {
    $(".top_nav_item")
      .eq(1)
      .css({
        backgroundColor: "#fff",
        color: "#ff3232"
      });

    $(".top_nav_item")
      .toArray()
      .forEach((item, index) => {
        $(item).click(e => {
          // console.log(this)
          $(e.target).css({
            backgroundColor: "#fff",
            color: "#ff3232"
          });

          $(e.target)
            .siblings()
            .css({
              backgroundColor: "#fdf4e4",
              color: "#333"
            });
        });
      });
  }
};
</script>

<style lang="scss">
#homelyRecipes_bar {

  .nav_items_box {
      width: 100%;
      background-color: white;
      display: flex;
      // justify-content: space-between;
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



  .homelyRecipes_box {
    .homelyRecipes_content_box {
      display: flex;
      justify-content: space-between;

      .homelyRecipes_left_box {
        width: 232px;
        background-color: #f5f5f5;

        .left_nav {
          height: 50px;
          display: flex;

          .left_nav_item {
            width: 50%;
            height: 100%;
            display: block;
            color: #333;
            font-weight: bold;
            text-align: center;
            font-size: 14px;
            line-height: 50px;
          }
        }
      }

      .homelyRecipes_right_box {
        width: 756px;
        display: flex;
        flex-wrap: wrap;

        .carousel_menu_item_content_box {
          height: 704px;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          //   justify-content: space-between;

          overflow: hidden;

          .carousel_menu_item_content {
            width: 232px;
            height: 332px;
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            margin-left: 20px;

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
    }
  }
}
</style>