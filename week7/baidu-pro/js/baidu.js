// 皮肤模块
var current_skin = "";
$('.skins-show > div').hover(function() {
    var url = $(this).children().attr('src');
    $('.now-skin').css({
        background: "url(" + url + ") 50% 100% no-repeat",
        backgroundSize: "100%"
    });
}, function() {
    $('.now-skin').css({
        background: "url(" + current_skin + ") 100% 100% no-repeat",
        backgroundSize: "100%"
    });
})
$('.skins-show > div').click(function() {
    var url = $(this).children().attr('src');
    $('.page-skin').css({
        background: "url(" + url + ") top center no-repeat",
        backgroundSize: "100%"
    })
    $('.baidu-search img').attr('src', 'images/logo_white.png')
    current_skin = url;
})
$('.close').on("click", function() {
    $('.skin-wrapper').slideUp();
})
$('.skin-btn').on("click", function() {
    $('.skin-wrapper').slideDown();
})
$('.no-skin').on("click", function() {
        $('.page-skin').css('background', "");
        $('.now-skin').css('background', "");
        $('.baidu-search img').attr('src', 'images/bd_logo1.png');
        current_skin = "";
    })
    // 右侧sidebar的js代码
$('.nav-li-more,.side-bar').hover(function() {
    $('.side-bar').show();
}, function() {
    $('.side-bar').hide();
})
//当页面向下滚动，页面的效果
$(window).scroll(function() {
    if (window.scrollY > 177) {
        $('.fixed-serach').show();
    } else {
        $('.fixed-serach').hide();
    }
    if (window.scrollY > 0) {
        $('.back-to-top').show();
    }else{
        $('.back-to-top').hide();

    }
})
// 用户卡片导航栏
$('.card-nav-content li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
})
// 用户页卡切换
$('.card-nav-content .my').click(function(){
    $('.card-nav').show().siblings().hide()
    $('.card-my').show();
})
$('.card-nav-content .push').click(function(){
    $('.card-nav').show().siblings().hide()
    $('.card-push').show();
})
$('.card-nav-content .daohang').click(function(){
    $('.card-nav').show().siblings().hide()
    $('.card-daohang').show();
})
// 回到顶部按钮
$('.back-to-top').click(function(){
    $('body,html').animate({ scrollTop: 0 }, 200);
})