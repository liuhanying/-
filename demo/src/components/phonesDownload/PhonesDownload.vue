<template>
    <div id="phone_download" class="center">

        <!--  -->
        <div class="title_box">美食杰移动应用让您的生活变简单</div>

        <div class="download_box center">
            <div class="download_item" v-for="item in 7" :key="item">
                <div class="icon_box">
                    <img src="https://s1.c.meishij.net/n/images/msjicon_72.png" alt="">
                </div>
                <div class="text_box">
                    <p class="text_big">美食杰家常菜谱大全</p>
                    <p class="text_small">美食烹饪手机必备</p>
                </div>
            </div>
        </div>


        <!--  -->
        <div class="app_download center">
            <div class="title_box">
                美食杰家常菜谱大全
            </div>
            <div class="app_contet_box">
                <div class="app_left">
                    <img src="https://s1.c.meishij.net/n/images/iphone6s_77.jpg" alt="">
                </div>

                <div class="app_right">
                    <p class="text_up">20万篇的菜谱软件如果您能拥有，您还会有找不到的菜谱吗? 每篇菜谱都有详细的制作过程图片及文字说明，您还会担心有学不会的菜吗?
                        只有【美食杰】才能让您体验到什么是独一无二的菜谱软件！！ 【美食杰】只有您想不到的菜谱，没有您找不到的菜谱！</p>
                    <p class="text_down">美食杰(http://www.Meishi.cc) -
                        中国最领先的美食菜谱网站，最新开发的【美食杰】菜谱软件，采用本地客户端和网站数据源相结合的方式，完美解决您遇到的美食烹饪中一切问题。</p>
                    <div class="app_icon_title">
                        软件下载
                    </div>

                    <div class="app_icon_box">
                        <a class="app_item app_item1" href="#" ></a>
                        <a class="app_item app_item2" href="#" ></a>
                        <a class="app_item app_item3" href="#" ></a>
                        <a class="app_item app_item4" href="#" ></a>
                        <a class="app_item app_item5" href="#" ></a>
                        <a class="app_item app_item6" href="#" ></a>
                        <a class="app_item app_item7" href="#" ></a>
                        <a class="app_item app_item8" href="#" ></a>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.download_box {
  background-color: white;
  height: 303px;
  display: flex;
  flex-wrap: wrap;
}

.download_item {
  width: 330px;
  height: 100px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 14px;
  box-sizing: border-box;
  display: flex;
}
.download_item:hover {
  background-color: #fcfcfc;
}

.icon_box {
  width: 72px;
  height: 72px;
  margin-right: 10px;
}

.text_big {
  color: #333;
  font-size: 18px;
  font-weight: bold;
  line-height: 36px;
  height: 36px;
  font-family: Microsoft Yahei, 黑体;
}

.text_small {
  color: #999;
  font-size: 14px;
  line-height: 18px;
}

.app_contet_box {
  background-color: white;
  /* height: 640px; */
  padding: 40px 20px 20px 10px;
  display: flex;
  margin-bottom: 40px;
}

.app_left {
  width: 339px;
  height: 600px;
  background-image: url("https://s1.c.meishij.net/n/images/iphone6s.png");
  box-sizing: border-box;
  padding: 63px 59px;
}

.app_right {
  width: 100%;
}

.text_up {
  font-size: 14px;
  line-height: 24px;
  color: #666;
  padding: 10px 0px;
}

.text_down {
  font-size: 14px;
  line-height: 24px;
  color: #666;
  padding: 10px 0px;
}

.app_icon_title {
  width: 100%;
  height: 80px;
  font-size: 24px;
  color: #333;
  line-height: 80px;
  font-family: Microsoft Yahei, 黑体;
}

.app_icon_box {
  display: flex;
  flex-wrap: wrap;
}

.app_item {
  display: inline-block;
  height: 64px;
  width: 160px;
  background-image: url("https://s1.c.meishij.net/n/images/msjad_btns.png");
  background-repeat: no-repeat;
  /* background-position: 0 0; */
  margin: 0 10px 10px 0;
}
.app_item1:hover {
  background-position: 0 -64px;
}

.app_item2 {
  background-position: -160px 0;
}
.app_item2:hover {
  background-position: -160px -64px;
}
.app_item3 {
  background-position: -320px 0;
}
.app_item3:hover {
  background-position: -320px -64px;
}

.app_item4 {
  background-position: 0 -128px;
}
.app_item4:hover {
  background-position: 0 -192px;
}

.app_item5 {
  background-position: -160px -128px;
}
.app_item5:hover {
  background-position: -160px -192px;
}

.app_item6 {
  background-position: -320px -128px;
}
.app_item6:hover {
  background-position: -320px -192px;
}

.app_item7 {
  background-position: 0px -256px;
}
.app_item7:hover {
  background-position: 0px -320px;
}

.app_item8 {
  background-position: -160px -256px;
}
.app_item8:hover {
  background-position: -160px -320px;
}
</style>