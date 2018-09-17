<template>
  <div id="header_box">

    <!-- 顶部红色header -->
    <div class="header_search_box">
      <div class="center">
        <div id="logo_box"></div>

        <!-- 输入框 -->
        <div id="search_input_box">
          <div id="header_search_input_box">
            <form class="search" action="">
              <input class="text" name="q" placeholder="请输入菜谱/食材/菜单/作者" x-webkit-speech="" autocomplete="off" href="/ajax/ajaxtitle.php"
                id="inputString" type="text">

              <input class="submit" value="搜 索" type="submit">
            </form>
          </div>

        </div>

        <!-- 登录板块 -->
        <div id="login_box">
          <a href="#" class="header_qqlogin">QQ登录</a>
          <a href="#" class="header_wblogin">微博登录</a>
          <a href="#" class="header_register">注册</a>
          <a href="#" class="header_login">登录</a>
        </div>
      </div>
    </div>

    <!-- 顶部header导航栏 -->
    <div class="header_nav_box">
      <div class="center">
        <div class="header_nav_item" ><strong><router-link class="header_nav_item_a" to='/'>首页</router-link></strong></div>

        <div class="header_nav_item" @mouseenter="myEnter1($event)" @mouseleave="myLeave1($event)"><strong><router-link class="header_nav_item_a" to='/millionMenus'>菜谱大全</router-link></strong> <span class="down_icon1"></span>
          <!-- 菜谱大全下拉框 -->
          <div class="dropdown_box dropdown_box1">
            <div class="header_dropdown_box center">
              <div class="dropdown_item_box">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱11111</a>
                </div>
                <div class="dropdown_item_content">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                  <a href="#" class="dropdown_item_content_a">海鲜</a>
                  <a href="#" class="dropdown_item_content_a">孕妇</a>
                  <a href="#" class="dropdown_item_content_a">早餐</a>
                  <a href="#" class="dropdown_item_content_a">午餐</a>
                  <a href="#" class="dropdown_item_content_a">甜品点心</a>
                  <a href="#" class="dropdown_item_content_a">汤粥</a>
                  <a href="#" class="dropdown_item_content_a">宝宝食谱-婴儿食谱</a>
                  <a href="#" class="dropdown_item_content_a">糕点主食</a>
                  <a href="#" class="dropdown_item_content_a">微波炉</a>
                </div>
              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                </div>

              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>

                </div>
              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                </div>

              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                </div>

              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                </div>

              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                  <a href="#" class="dropdown_item_content_a">海鲜</a>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div class="header_nav_item" @mouseenter="myEnter2($event)" @mouseleave="myLeave2($event)"><strong><router-link class="header_nav_item_a" to='/healthyDiet/health'>饮食健康</router-link></strong> <span class="down_icon2"></span>
          <!-- 饮食健康下拉框 -->
          <div class="dropdown_box dropdown_box2">
            <div class="header_dropdown_box center">

              <div class="dropdown_item_box">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱222222</a>
                </div>
                <div class="dropdown_item_content">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                  <a href="#" class="dropdown_item_content_a">海鲜</a>
                  <a href="#" class="dropdown_item_content_a">孕妇</a>
                  <a href="#" class="dropdown_item_content_a">早餐</a>
                  <a href="#" class="dropdown_item_content_a">午餐</a>
                  <a href="#" class="dropdown_item_content_a">甜品点心</a>
                  <a href="#" class="dropdown_item_content_a">汤粥</a>
                  <a href="#" class="dropdown_item_content_a">宝宝食谱-婴儿食谱</a>
                  <a href="#" class="dropdown_item_content_a">糕点主食</a>
                  <a href="#" class="dropdown_item_content_a">微波炉</a>
                </div>
              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                </div>

              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>

                </div>
              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                </div>

              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                </div>

              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                </div>

              </div>

              <div class="dropdown_item_box2">
                <div class="dropdown_item_title">
                  <a href="#" class="dropdown_item_title_a">家常菜谱</a>
                </div>
                <div class="dropdown_item_content2">
                  <a href="#" class="dropdown_item_content_a">家常菜</a>
                  <a href="#" class="dropdown_item_content_a">凉菜</a>
                  <a href="#" class="dropdown_item_content_a">素食</a>
                  <a href="#" class="dropdown_item_content_a">晚餐</a>
                  <a href="#" class="dropdown_item_content_a">私家菜</a>
                  <a href="#" class="dropdown_item_content_a">热菜</a>
                  <a href="#" class="dropdown_item_content_a">海鲜</a>
                </div>

              </div>

            </div>
          </div>

        </div>
        <div class="header_nav_item"><strong><router-link class="header_nav_item_a" to='/foodMenu'>美食菜单</router-link></strong></div>
        <div class="header_nav_item"><strong><router-link class="header_nav_item_a" to='/homeGallery'>居家管</router-link></strong></div>
        <div class="header_nav_item"><strong><router-link class="header_nav_item_a" to='/foodMania'>美食达人</router-link></strong></div>
        <div class="header_nav_item"><strong><router-link class="header_nav_item_a" to='/discussionGroup'>讨论组</router-link></strong></div>
        <div class="header_nav_item"><strong><router-link class="header_nav_item_a" to='/phonesDownload'>手机版下载</router-link></strong></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",

  data() {
    return {};
  },

  mounted() {
    

    var headerNav = $(".header_nav_item_a");
    headerNav[0].style.borderBottom = "4px solid #ff3232";
    // alert(headerNav)
    for (var i = 0; i < headerNav.length; i++) {
      var oHeaderNav = headerNav[i];
      oHeaderNav.indexNumber = i;
      var lastNumber = 0;
      // alert(oHeaderNav)
      $(oHeaderNav).click(e => {
        // alert(e.target);
        
        var last_header_nav = headerNav[lastNumber];

        last_header_nav.style.borderBottom = "none";
        var x = e.target.indexNumber;
        // alert(that)
        e.target.style.borderBottom = "4px solid #ff3232";
        // $(that).css("border-bottom","4px solid #ff3232" );
        lastNumber = x; 
      });
    }
  },

  methods: {
    myEnter1(e) {
      $(".dropdown_box1").css("display", "block");
      $('.down_icon1').css('backgroundImage','url(" ")');
      // console.log(event.currentTarget)
    },

    myLeave1(e) {
      $(".dropdown_box1").css("display", "none");
       $('.down_icon1').css('backgroundImage','url("https://s1.c.meishij.net/n/images/msj_menuarrow.gif?v=3")');
    },
    myEnter2(e) {
      $(".dropdown_box2").css("display", "block");
       $('.down_icon2').css('backgroundImage','url("")');
      // console.log(event.currentTarget)
    },

    myLeave2(e) {
      $(".dropdown_box2").css("display", "none");
       $('.down_icon2').css('backgroundImage','url("https://s1.c.meishij.net/n/images/msj_menuarrow.gif?v=3")');
    }
  }
};
</script>

<style lang="scss">
#header_box {
  width: 100%;
  height: 205px;
  background-color: green;
  .header_search_box {
    width: 100%;
    height: 129px;
    background-color: #c90000;
  }
  .header_nav_box {
    width: 100%;
    height: 76px;
    background-color: #ffffff;
  }
}

#logo_box {
  height: 129px;
  width: 184px;
  float: left;
  background-image: url("https://s1.c.meishij.net/n/images/logo2.png");
  background-repeat: no-repeat;
  background-position: -15px 9px;
}

#search_input_box {
  height: 129px;
  width: 430px;
  float: left;
  margin-left: 68px;
  display: flex;
  align-items: center;

  #header_search_input_box {
    width: 100%;
    height: 36px;
    background-color: whitesmoke;
    border-radius: 5px;
    display: flex;
    overflow: hidden;

    .search {
      display: flex;
      border-radius: 5px;
      overflow: hidden;
      padding: 3px;
      box-sizing: border-box;

      input {
        width: 344px;
        height: 100%;
        border: none;
        padding: 5px;
        box-sizing: border-box;
      }
      .submit {
        width: 86px;
        height: 100%;
        background-color: #a8000f;
        color: #ffffff;
      }
      .submit:hover {
        background-color: #660505;
      }
    }
  }
}

#login_box {
  height: 129px;
  float: right;
  font-size: 12px;
  display: flex;
  align-items: center;

  a {
    color: #fff;
    margin: 0 3px;
    // display: block;
    height: 28px;
    line-height: 28px;
    border-radius: 5px;
  }

  a:hover {
    background-color: #660505;
  }

  a.header_qqlogin {
    padding: 2px 10px 2px 35px;
    background-image: url("https://s1.c.meishij.net/n/images/topdsflogin_icon.gif");
    background-repeat: no-repeat;
    background-position: 8px 0;
  }
  a.header_wblogin {
    padding: 2px 10px 2px 35px;
    background-image: url("https://s1.c.meishij.net/n/images/topdsflogin_icon.gif");
    background-repeat: no-repeat;
    background-position: 8px -28px;
  }

  a.header_register,
  a.header_login {
    padding: 2px 10px;
  }
}

.header_nav_box {
  box-shadow: rgba(0, 0, 0, 0.3) 10px 0px 10px 0px;

  .center {
    display: flex;
    justify-content: space-between;

    .header_nav_item {
      padding: 0 24px;
      position: relative;
      z-index: 100;

      .header_nav_item_a {
        height: 72px;
        overflow: hidden;
        font-weight: 700;
        display: inline-block;
        vertical-align: top;
        font-size: 18px;
        font-family: Microsoft Yahei, 黑体;
        line-height: 76px;
        // padding: 0 24px;
        color: #444460;
        // border-bottom: 4px solid #ff3232;
      }

      span {
        display: inline-block;
        width: 10px;
        height: 100%;
        // background-color: #c90000;
        background-image: url("https://s1.c.meishij.net/n/images/msj_menuarrow.gif?v=3");
        background-repeat: no-repeat;
        background-position: 0 center;
      }

      .header_dropdown_box {
        height: 282px;
        background-color: #e6e3e6;
        padding: 18px 24px 30px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;

        .dropdown_item_box {
          width: 722px;
          height: 48px;
          margin-bottom: 12px;

          .dropdown_item_title {
            width: 100%;
            height: 50%;

            a.dropdown_item_title_a {
              display: inline-block;
              font-size: 17px;
              line-height: 24px;
              width: 68px;
              height: 23px;
              border: none;
              color: #ff0606;
            }

            a.dropdown_item_title_a:hover {
              color: #fff;
              background-color: #ff0606;
            }
          }

          .dropdown_item_content {
            width: 722px;
            height: 24px;
            display: flex;
            // justify-content: space-between;
            align-items: center;

            .dropdown_item_content_a {
              color: rgb(153, 153, 153);
              font-size: 12px;
              display: block;
              height: 14px;
              line-height: 14px;
              border: none;
              margin-right: 10px;
            }

            .dropdown_item_content_a:hover {
              background-color: #ff3232;
              color: white;
            }
          }
        }

        .dropdown_item_box2 {
          width: 350px;
          height: 48px;
          margin-bottom: 12px;

          .dropdown_item_title {
            width: 350px;
            height: 24px;

            a.dropdown_item_title_a {
              display: inline-block;
              font-size: 17px;
              line-height: 24px;
              width: 68px;
              height: 23px;
              border: none;
              color: #ff0606;
            }

            a.dropdown_item_title_a:hover {
              color: #fff;
              background-color: #ff0606;
            }
          }

          .dropdown_item_content2 {
            width: 350px;
            height: 24px;
            display: flex;
            // justify-content: space-between;
            align-items: center;

            .dropdown_item_content_a {
              color: rgb(153, 153, 153);
              font-size: 12px;
              display: block;
              height: 14px;
              line-height: 14px;
              border: none;
              margin-right: 10px;
            }

            .dropdown_item_content_a:hover {
              background-color: #ff3232;
              color: white;
            }
          }
        }
      }
      .dropdown_box1 {
        position: absolute;
        top: 76px;
        left: -90px;
        display: none;
      }
      .dropdown_box2 {
        position: absolute;
        top: 76px;
        left: -233px;
        display: none;
      }
    }

    .header_nav_item:hover {
      background: #e6e3e6;
    }
  }
}
</style>