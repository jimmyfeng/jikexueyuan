var newsData, append_string, content_page = 0;
// 拼接英文字符串
function pingjie(jsondata) {
    append_string = "";
    for (var i = 0 + content_page * 5; i < jsondata.length && i < content_page * 5 + 5; i++) {
        append_string += '<div class="index-list-item"><div class="index-list-main   showleft"><div class="index-list-image"><i class="ivideoplay"></i><img src="' + jsondata[i].pic_url + '"></div><div class="index-list-main-text"><div class="index-list-main-title">' + jsondata[i].title + '</div><div class="index-list-main-abs">' + jsondata[i].detail + '</div></div><div class="index-list-bottom"><div class="index-list-main-time"><b class="tip-time">' + jsondata[i].date + '</b></div></div></div></div>';
    }
    checkpagemore(newsData, content_page);
    content_page++;
}
// 设置是否可以点击更多
function checkpagemore(pagecon, content_page) {
    if (pagecon.length <= content_page * 5 + 5) {
        $('.ui-refresh').html('没有更多了');
    }
}
// 将拼接的字符串放到页面中
function addnew() {
    $(".index-list").append($(append_string));
}
// 页面ajax请求
function pageAjax(type) {
    $.ajax({
        url: "./php/search.php",
        dataType: 'json',
        type: "post",
        data: { "news_type": type },
        success: function(msg) {
            // console.log(msg);
            // 加载动画效果
            newsData = msg;
            pingjie(newsData);
            addnew();
        },
        error: function(error) {
            // console.log(error);
        }
    })
}
// 页面加载进来就执行一次获取新闻
pageAjax('推荐');
// 各类不同新闻按钮事件绑定
$('#index_view_navigator td').click(function() {
    content_page = 0;
    $(".index-list").text("");
    newsData = "";
    $('.ui-refresh').html('点击加载更多');
    var this1 = $(this);
    this1.addClass('on').siblings().removeClass('on');
    pageAjax(this1.find('span').html());
})
// 加载更多按钮事件绑定
$('.ui-refresh').click(function(){
    pingjie(newsData);
    addnew();
})