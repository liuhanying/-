<template>
    <div id="health" class="center">

        <!--  -->
        <div class="nav_items_box">
            <div class="oNav_item_box">
                <div class="oNav_item_title_box">人群膳食</div>
                <div class="oNav_item_content_box">
                    <a href="#" class="oNav_item_content">孕妇</a>
                    <a href="#" class="oNav_item_content">产妇</a>
                    <a href="#" class="oNav_item_content">幼儿</a>
                    <a href="#" class="oNav_item_content">哺乳期</a>
                    <a href="#" class="oNav_item_content">婴儿</a>
                    <a href="#" class="oNav_item_content">学龄前儿童</a>
                    <a href="#" class="oNav_item_content">学龄期儿童</a>
                    <a href="#" class="oNav_item_content">青少年</a>
                    <a href="#" class="oNav_item_content">老人</a>
                    <a href="#" class="oNav_item_content">高温环境作业人群</a>
                    <a href="#" class="oNav_item_content">低温环境作业人群</a>
                    <a href="#" class="oNav_item_content">接触电离辐射人员</a>
                    <a href="#" class="oNav_item_content">接触化学毒素人员</a>
                    <a href="#" class="oNav_item_content">运动员</a>
                    <a href="#" class="oNav_item_content">围孕期</a>

                </div>
            </div>
            
        </div>
        <!--  -->
        <div class="health_box">
            <div class="title_box" id="health_box_title_box">
                <a class="health_box_title_item" href="#">人群膳食菜谱</a>
                <a class="health_box_title_item" href="#">人群膳食中医保健</a>
                <a class="health_box_title_item" href="#">人群膳食养生妙方</a>
                <span class="more_box">
                    <a href="#">最新</a>
                    <span>|</span>
                    <a href="#">最热</a>
                </span>
            </div>
            <!--  -->
            <div class="health_content_box">

                <div class="carousel_menu_item_content" @mouseenter.stop="myEnter($event)" v-on:mouseleave.stop="myLeave($event)"  v-for="item in 40" :key="item">

                    <img src="http://site.meishij.net/r/62/30/8882562/a8882562_148653467621131.jpg" alt="">

                    <!-- 上下浮动框 -->
                    <div class="carousel_menu_item_content_shuoming_box">
                        <div class="carousel_menu_item_content_shuoming_box_all">
                            <div class="carousel_menu_item_content_shuoming_box_1">
                                <p class="carousel_menu_item_content_name">鳕鱼蒸糕</p>
                                <span class="carousel_menu_item_content_sentiment">33评论5803人气</span>
                                <p class="carousel_menu_item_content_maker">宝宝营养辅食</p>
                            </div>
                            <div class="carousel_menu_item_content_shuoming_box_2">
                                <div class="menu_item_power">17步 / 大概60分钟</div>
                                <div class="menu_item_kinds">蒸 / 家常味</div>

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

    // newsEnter(e) {
    //   // console.log(e.target)
    //   $(e.target).addClass("text_big");
    //   $(e.target)
    //     .siblings()
    //     .removeClass("text_big");
    // }
  },

  mounted() {
    $(".health_box_title_item")
      .eq(0)
      .css({
        backgroundColor: "#ff3232",
        color: "#fff"
      });

    $(".health_box_title_item")
      .toArray()
      .forEach((item, index) => {
        $(item).click(e => {
          // console.log(this)
          $(e.target).css({
            backgroundColor: "#ff3232",
            color: "#fff"
          });

          $(e.target)
            .siblings()
            .css({
              backgroundColor: "#fae8c8",
              color: "#333"
            });
        });
      });
  }
};
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

  #health_box_title_box {
    text-align: left;

    .health_box_title_item {
      display: inline-block;
      height: 46px;
      line-height: 46px;
      font-weight: normal;
      padding: 0 22px;
      color: #333;
      margin-right: 10px;
    }
    .health_box_title_item:hover {

      background-color: #ff3232;
      color: #fff;
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
            borderb .menu_item_power {
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