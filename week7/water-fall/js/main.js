$(document).ready(function() {
    // 滚动加载更多
    $(window).on('load', function() {
        picLocation();
        imgData = {"data":[{"src":"img1.jpg"},{"src":"img2.jpg"},{"src":"img3.jpg"},{"src":"img4.jpg"},{"src":"img5.jpg"},{"src":"img6.jpg"},{"src":"img7.jpg"},{"src":"img8.jpg"},{"src":"img9.jpg"},{"src":"img10.jpg"},{"src":"img11.jpg"},{"src":"img12.jpg"}]}
        window.onscroll = function(){
        	if (scroll()) {
        		$.each(imgData.data,function(index,url){
        			var onePic = $('<div>').addClass("one-pic").appendTo($('.container'));
        			var picimg = $('<img>').attr("src","images/"+url.src).appendTo(onePic);
        			picLocation();
        			console.log(url.src)
        		})
        	}
        }
        // 窗口自适应
        window.onresize = function(){
            window.location.reload();
        } 
    })
})
// 实现图片瀑布流
function picLocation() {
    var pic = $('.one-pic');
    var picWidth = pic.eq(0).width();
    var num = Math.floor($('.container').width() / (picWidth + 42));
    var picHeight = [];
    pic.each(function(index, pic) {
        var thisHeight = $(pic).height() + 20;
        if (index < num) {
            picHeight[index] = thisHeight ;
        } else {
            var minHeight = Math.min.apply(null, picHeight);
            var minIndex = $.inArray(minHeight, picHeight);
            $(pic).css({
                position: "absolute",
                left: minIndex * 220 ,
                top: 20 + minHeight
            })
            picHeight[minIndex] += (thisHeight + 20);
        }
    })
}
// 监听滚动
function scroll(){
	var pic = $('.one-pic');
	var scrollPosition = pic.last()[0].offsetTop;
	var docheight = $(document).width();
	var nowScroll = $(window).scrollTop();
	return (scrollPosition<docheight+nowScroll)
}