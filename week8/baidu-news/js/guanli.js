// <!-- 为页面添加导航栏与左侧导航的按钮js效果 -->
$('.leftmnu a').click(function(e) {
        $(this).addClass("active").siblings().removeClass("active");
        console.log($(this).data("div"));
        $("." + $(this).data("div")).show().siblings().hide();
    })
    // 加载新闻信息
function lookdata() {
    $.ajax({
        url: "./php/guanli.php",
        dataType: 'json',
        type: "post",
        success: function(jsondata) {
            var append_string = "";
            for (var i = 0; i < jsondata.length; i++) {
                append_string += '<tr><td>' + jsondata[i].id + '</td><td>' + jsondata[i].title + '</td><td>' + jsondata[i].detail + '</td><td>' + jsondata[i].date + '</td><td>' + jsondata[i].pic_url + '</td><td>' + jsondata[i].news_type + '</td></tr>';
            }
            // 将拼接的字符串放到页面中
            $(".look").append($(append_string));
        }
    })
}
// 加载可以删除的内容
function deleteNews() {
    $.ajax({
        url: "./php/guanli.php",
        dataType: 'json',
        type: "post",
        success: function(jsondata) {
            var append_string = "";
            for (var i = 0; i < jsondata.length; i++) {
                append_string += '<tr><td>' + jsondata[i].id + '</td><td>' + jsondata[i].title + '</td><td>' + jsondata[i].detail + '</td><td>' + jsondata[i].date + '</td><td>' + jsondata[i].pic_url + '</td><td>' + jsondata[i].news_type + '</td><td><button class="btn btn-danger">删除</button></td></tr>';
            }
            // 将拼接的字符串放到页面中
            $(".delete-news table").append($(append_string));
            deleteBtn();
        }
    })
}
// 加载可以修改的内容
function changeNews() {
    $.ajax({
        url: "./php/guanli.php",
        dataType: 'json',
        type: "post",
        success: function(jsondata) {
            var append_string = "";
            for (var i = 0; i < jsondata.length; i++) {
                append_string += '<tr><td>' + jsondata[i].id + '</td><td>' + jsondata[i].title + '</td><td>' + jsondata[i].detail + '</td><td>' + jsondata[i].date + '</td><td>' + jsondata[i].pic_url + '</td><td>' + jsondata[i].news_type + '</td><td><button class="btn btn-waring">修改</button></td></tr>';
            }
            // 将拼接的字符串放到页面中
            $(".change-news table").append($(append_string));
            changeBtn();
        }
    })
}
// 删除按钮事件绑定
function deleteBtn() {
    $('.btn-danger').on("click", function() {
        var deleteThis = $(this);
        var deleteId = deleteThis.parent().siblings().first().html();
        window.location.href = "./php/delete.php?id=" + deleteId;
    })
}
// 修改按钮时间绑定
function changeBtn() {
    $('.btn-waring').on("click", function() {
        var changeThis = $(this);
        var changeId = changeThis.parent().siblings().first().html();
        $.ajax({
            url: "./php/check.php?id="+changeId,
            dataType: 'json',
            type: "post",
            success: function(jsondata) {
            	console.log(jsondata);
            	$('.change').show().siblings().hide();
            	$('.change #id').val(jsondata[0].id);
            	$('.change #title').val(jsondata[0].title);
            	$('.change #detail').val(jsondata[0].detail);
            	$('.change #type').val(jsondata[0].news_type);
            },
            error:function(e){
            	console.log(e);
            }
        })
    })
}
lookdata();
deleteNews();
changeNews();
