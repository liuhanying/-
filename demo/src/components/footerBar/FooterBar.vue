<template>
    <div id="footer_bar">
        <!--  -->
        <div class="footer_box center">

            <!-- 上半部分 -->
            <div class="footer_up_box">
                <div class="text_box">
                    <p class="text_box_p">
                        <a href="#" class="footer_homelink"></a>
                        中国，最大的菜谱库
                        <strong> 800,000 篇</strong>
                        <br>
                        每月，用户访问数量
                        <strong> 20,000,000 次</strong>
                        <br>
                        每年，菜谱被浏览量
                        <strong> 36,000,000,000 次</strong>
                        <br>
                        现在，这些数字还在不断的增长着，欢迎您来一起使用美食杰
                    </p>
                </div>
                <div class="img_box">
                    <div class="img_content">
                        <div class="footer_img_box">
                            <div class="footer_img_up footer_img_up1"><span class="footer_img_text">关注:49万</span></div>
                            <p><a class="footer_img_down" href="#">点击进入<br>美食杰官方微博</a></p>
                        </div>
                        <div class="footer_img_box">
                            <div class="footer_img_up footer_img_up2"><span class="footer_img_text">关注:10.9万</span></div>
                            <p><a class="footer_img_down" href="#">点击进入<br>美食杰QQ空间</a></p>
                        </div>
                        <div class="footer_img_box">
                            <div class="footer_img_up footer_img_up3"></div>
                            <p><a class="footer_img_down" href="#">扫描二维码添加<br>美食杰为微信好友</a></p>
                        </div>
                        <div class="footer_img_box">
                            <div class="footer_img_up footer_img_up4"></div>
                            <p><a class="footer_img_down" href="#">扫描二维码添加<br>美食杰手机客户端</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 下半部分 -->
            <div class="footer_down_box">
                <div class="footer_down_box_1">
                    <p class="footer_down_box_1_title">友情链接</p>
                    <a href="#" class="footer1_item">美食</a>
                    <a href="#" class="footer1_item">体质测试</a>
                    <a href="#" class="footer1_item">伊特</a>
                    <a href="#" class="footer1_item">大粤网美食</a>
                    <a href="#" class="footer1_item">9酷音乐网</a>
                    <a href="#" class="footer1_item">
                        爱奇艺生活</a>
                    <a href="#" class="footer1_item">
                        365音乐网</a>
                    <a href="#" class="footer1_item">
                        图吧</a>
                    <a href="#" class="footer1_item">
                        汽车论坛</a>
                    <a href="#" class="footer1_item">
                        39健康饮食</a>
                    <a href="#" class="footer1_item">QQ下载</a>
                    <a href="#" class="footer1_item">
                        家具网</a>
                    <a href="#" class="footer1_item">
                        搜狐美食</a>
                    <a href="#" class="footer1_item">
                        美食天下</a>
                    <a href="#" class="footer1_item">
                        中华美食网</a>
                    <a href="#" class="footer1_item">
                        合肥公交网</a>
                    <a href="#" class="footer1_item">苹果园</a>
                    <a href="#" class="footer1_item">红餐微杂志</a>
                    <a href="#" class="footer1_item">
                        北京搜房网</a>
                    <a href="#" class="footer1_item">
                        更多友情链接</a>
                </div>
                <div class="footer_down_box_2">
                    <div class="down_box_2_up">
                        <a href="#">公司简介</a>
                        <a href="#">企业文化</a>
                        <a href="#">公司动态</a>
                        <a href="#">免责声明</a>
                        <a href="#">联系我们</a>
                        <a href="#">招贤纳士</a>
                        <a href="#">商务合作</a>
                        <a href="#">网站地图</a>
                        <a href="#">友情链接</a>
                        <a href="#">美食杰移动APP</a>
                    </div>
                    <div class="down_box_2_dowm">
                        <a target="_blank" href="http://www.miibeian.gov.cn" class="gray_a">京ICP备14030359号</a>/<a
                            target="_blank" href="http://beian.gov.cn/" class="gray_a"><img src="http://s1.st.meishij.net/p2/20180208/20180208111357_93713.png">京公网安备11010802026928</a>
                        Copyright © 2003-2018 MEISHIJ CO.,LTD.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterBar",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    #footer_bar {
        width: 100%;
        height: 407px;
        background-image: url('https://s1.c.meishij.net/n/images/black75.png')
    }

    .footer_box {
        height: 100%;
    }

    .footer_up_box {
        width: 100%;
        height: 199px;
        /* background-color: red; */
        display: flex;
    }

    .text_box {
        display: inline-block;
        height: 199px;
        width: 50%;
        display: flex;
        align-items: flex-end;
        padding: 20px 0;
        box-sizing: border-box;
        background-image: url('https://s1.c.meishij.net/n/images/logo_f.png?ver=123');
        background-repeat: no-repeat;
        background-position-y: 20px;

    }

    .text_box_p {
        color: #fff;
        font-size: 12px;
        line-height: 24px;
    }

    .text_box_p>strong {
        font-size: 16px;
        padding: 0px 4px;
        color: #ff3232;
        font-weight: bold;
        font-family: arial;
    }

    .img_box {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        padding: 30px 0 20px 0;
    }

    .img_content {
        width: 100%;
        height: 160px;
        display: flex;

    }

    .footer_img_box {
        width: 105px;
        height: 100%;
        margin-left: 15px;
    }

    .footer_img_box>p {
        text-align: center;
        font-size: 12px;
        margin-top: 10px;
    }

    .footer_img_up {
        width: 105px;
        height: 105px;
        background-image: url('https://s1.c.meishij.net/n/images/footerlinks.png');
    }

    .footer_img_text {
        font-size: 12px;
        height: 26px;
        line-height: 26px;
        display: block;
        width: 105px;
        color: #fff;
        text-align: center;
        padding-top: 79px;
    }

    .footer_img_up2 {
        background-position-x: -105px;
    }

    .footer_img_up3 {
        background-position-x: -211px;
    }

    .footer_img_up4 {
        background-position-x: 105px;
    }

    .footer_img_down {
        color: #999;
    }

    .footer_img_down:hover {
        color: #fff;
    }

    .footer_down_box {
        width: 100%;
        height: 210px;
        /* background-color: #ff3232; */
    }

    .footer_down_box_1 {
        width: 100%;
        height: 120px;
        /* background-color: paleturquoise; */
        border-bottom: 1px solid #444;
    }

    .footer_down_box_1_title {
        color: #fff;
        font-size: 12px;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #444;
        line-height: 40px;
        float: left;
        display: block;
        margin-bottom: 8px;
    }

    .footer1_item {
        font-size: 12px;
        float: left;
        height: 25px;
        line-height: 25px;
        color: #999;
        width: 99px;
    }

    .footer1_item:hover {
        color: #ff3232;
    }

    .footer_down_box_2 {
        width: 100%;
        height: 90px;
        box-sizing: border-box;
        /* background-color: pink; */
        padding: 10px 0 30px;
        border-top: 1px solid #444;
        text-align: center;
    }

    .down_box_2_up {
        width: 100%;
        height: 24px;
    }

    .down_box_2_up>a {
        display: inline-block;
        height: 24px;
        font-size: 12px;
        color: rgb(153, 153, 153);
        padding: 0 10px;
    }

    .down_box_2_dowm {
        height: 24px;
        line-height: 24px;
        color: #666666;
        font-size: 12px;
    }
    .down_box_2_dowm>a{
        color: #666666;
        font-size: 12px;
    }
</style>