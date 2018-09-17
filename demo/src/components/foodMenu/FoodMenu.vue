<template>
    <div id="foodMenu" class="center">
        <div class="title_box">
            菜单是你的一桌饭
            <span class="more_box">
                <a href="#">最新</a>
                <span>|</span>
                <a href="#">最热</a>
            </span>
        </div>

        <!--  -->
        <div class="foodMenu_content_box" v-for="item in 20" :key="item">
            <div class="foodMenu_item_box">
                <div class="user_title">
                    <a class="user_name" href="#">我的菜单</a>
                    <a class="user_number" href="#"><span class="red_text">11</span>篇来搞</a>
                </div>
                <div class="user_content">
                    <div class="user_content_item">
                        <span class="user_time">2018-09-09&#x3000;21:19</span>

                        <div class="avatar_box">
                            <img class="avatar" src="https://s1.c.meishij.net/images/default/tx2_8.png" alt="">
                            <span class="username">XXX(来自微信)</span>
                        </div>
                    </div>
                    <div class="user_content_item" v-for="item in 5" :key="item">
                        <img src="https://s1.st.meishij.net/r/80/133/5970830/a5970830_153623629799347.jpg" alt="">
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
#foodMenu {
  .foodMenu_content_box {
    width: 100%;

    .foodMenu_item_box {
      width: 100%;
      height: 240px;
      margin-bottom: 20px;
      background-color: white;
      padding: 0 20px 20px 20px;

      .user_title {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .user_name {
          color: #333;
          font-size: 18px;
          font-family: Microsoft Yahei;
          font-weight: bold;
        }

        .user_number {
          line-height: 60px;
          color: #999;
          font-size: 12px;

          .red_text {
            color: #ff3232;
          }
        }
      }
      .user_content {
        width: 100%;
        height: 160px;
        overflow: hidden;
        display: flex;

        .user_content_item {
          width: 160px;
          height: 160px;
          // background: #333;
          margin-right: 1px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .user_time {
            color: #999;
            padding-right: 10px;
            line-height: 18px;
            text-indent: 0px;
            height: 18px;
            font-size: 12px;
          }

          .avatar_box {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;


            .avatar {
              width: 40px;
              height: 40px;
              margin-right: 10px;
            }

            .username {
              color: #999;
              padding-right: 10px;
              line-height: 18px;
              text-indent: 0px;
              height: 18px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>

