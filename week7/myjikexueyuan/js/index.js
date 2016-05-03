function lunbo(e) {
    // 寻找轮播div
    var $lun = $(e.find('.lunbo'));
    // 获得图片的宽度
    var oneWidth = $lun.children().eq(0).width();
    // 图片长度
    var allNum = $lun.children().length;
    // 容器宽度
    var contentWidth = parseFloat(e.width());
    // 一页显示图片数
    var showNum = contentWidth / oneWidth;
    var tailNum = allNum - showNum - 1;
    // 复制头部尾部添加到尾部头部
    var copyhead = $lun.children(":lt(" + showNum + ")");
    var copytail = $lun.children(":gt(" + tailNum + ")");
    $(copyhead.clone()).appendTo($lun)
    $(copytail.clone()).prependTo($lun)
    $lun.css('left', -showNum * oneWidth)
    var btnSwitch = 0;
    var pagediv = e.find('.pagination')
        // 设置页数
    function pagination(num) {
        if (pagediv) {
            pagediv.children().eq(num).addClass('swiper-active-switch').siblings().removeClass('swiper-active-switch');
        }
    }
    // 判断图片位置
    function panduan() {
        if ($lun.css('left') == '0px') {
            $lun.css('left', -allNum * oneWidth)
        }
        if ($lun.css('left') == -(showNum + allNum) * oneWidth + 'px') {
            $lun.css('left', -showNum * oneWidth)
        }
    }
    // 图片滚动函数
    function imgmove(leftNum) {
        if (btnSwitch == 0) {
            btnSwitch = 1;
            $lun.animate({ left: leftNum }, 500, "swing", function() {
                panduan();
                btnSwitch = 0;
                var page = -parseInt(($lun.css('left'))) / oneWidth - 1;
                pagination(page);
            });
        }
    }
    // 右边按钮事件绑定
    e.children('.right').click(function() {
            imgmove(parseInt($lun.css('left')) - oneWidth);
        })
        // 左边按钮时间绑定
    e.children('.left').click(function() {
            imgmove(parseInt($lun.css('left')) + oneWidth);
        })
        // 自动播放
    if (showNum == 1) {
        function autoplay() {
            imgmove(parseInt($lun.css('left')) - oneWidth);
        }
        var auto = setInterval(autoplay, 3000);
        e.mouseover(function() {
            clearInterval(auto);
        })
        e.mouseout(function() {
            auto = setInterval(autoplay, 3000);
        })
    }
}
