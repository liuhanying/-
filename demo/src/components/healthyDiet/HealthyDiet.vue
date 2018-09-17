<template>
    <div id="healthyDiet" class="center">
        <div class="title_box" id="health_title">
            申时是调养膀胱的好时机,宜多喝水，有尿就尿
        </div>

        <div id="top_nav_bar" class="center">
            <div class="top_nav">
                <router-link class="top_nav_item" to="#">我的体质（未开放）</router-link>
                <router-link class="top_nav_item" to="/healthyDiet/health">饮食健康</router-link>
                <router-link class="top_nav_item" to="/healthyDiet/people">人群膳食</router-link>
                <router-link class="top_nav_item" to="#">疾病调理</router-link>
                <router-link class="top_nav_item" to="#">功能性调理</router-link>
                <router-link class="top_nav_item" to="#">脏腑调理</router-link>
            </div>
            
        </div>

       <router-view></router-view>
    </div>
    
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},

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
#healthyDiet {
  #health_title {
    background-image: url("https://s1.c.meishij.net/n/images/Icon-Small.png");
    background-position: 215px center;
    background-repeat: no-repeat;
  }

  #top_nav_bar {
    // height: 239px;
    margin-top: 20px;
    background-color: #fdf4e4;

    .top_nav {
      width: 100%;
      height: 50px;
      background-color: rgba(0, 0, 0, 0);

      .top_nav_item:hover {
        background-color: #fafafa;
        color: #ff3232;
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

    .nav_items_box {
      width: 100%;
      background-color: white;
      display: flex;
      //   justify-content: space-between;
      flex-wrap: wrap;

      .oNav_item_box {
        box-sizing: border-box;
        padding: 10px 16px 14px;
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
  }
}
</style>