var name = 'color',
    value;
// 获取cookie的函数
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
// 设置主题颜色
function setColor(color) {
    document.getElementsByClassName('menu first')[0].style.background = color;
    document.getElementsByClassName('menus')[0].style.borderTopColor = color;
}
// 读取cookie中存储的颜色变量，如果没有，则设置
function load() {
    if (!document.cookie.match('color')) {
        document.cookie = name + "=" + '#0AA770';
        value = '#0AA770';
    } else {
        value = getCookie('color')
    }
    setColor(value);
}
// 设置颜色的点击事件
function clickcheck(e) {
    setColor(e)
    document.cookie = name + "=" + e;
}
