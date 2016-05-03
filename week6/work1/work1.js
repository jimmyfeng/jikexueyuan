// 定义了经常会用到的变量
var x, y, operator,
    bunSw = 0,
    clr = 0,
    screen = document.getElementById('screen');
// 计算器左上方清除按钮
function clearNum() {
    bunSw = 0,
        clr = 0,
        x = 0;
    y = 0;
    operator = 0;
    screen.innerHTML = 0;
}
// 计算机的撤销按钮
function numBack() {
    screen.innerHTML = screen.innerHTML.substr(0, screen.innerHTML.length - 1)
}
// 数字输入的要求，对小数点输入进行限制
function num(number) {
    if (clr == 1) {
        screen.innerHTML = 0;
        clr = 0;
    }
    var screenValue = screen.innerHTML,
        btnNum = number.innerHTML;
    if (screenValue === '0') {
        if (btnNum != 0 && btnNum != ".") {
            screen.innerHTML = btnNum;
        } else if (btnNum == ".") {
            screen.innerHTML = screen.innerHTML + btnNum;
        }
    } else if (screenValue !== '0') {
        if (btnNum == "." && screen.innerHTML.indexOf(".") != -1) {} else {
            screen.innerHTML = screen.innerHTML + btnNum;
        }
    }
}
// 等于按钮的运算
function equal() {
    clr = 1;
    y = parseFloat(screen.innerHTML);
    var n = 1000000;
    switch (operator) {
        case "+":
            screen.innerHTML = (x * n + y * n) / n;
            break;
        case "-":
            screen.innerHTML = (x * n - y * n) / n;
            break;
        case "*":
            screen.innerHTML = x * n * y / n;
            break;
        case "/":
            screen.innerHTML = x * n / y / n;
            break;
    }
}
// 等于运算
function dengyu1() {
    if (bunSw == 1&&clr == 0) {
        equal()
    }
    console.log(123)
}
// 四种运算
function numAdd() {
    if (clr == 0 ) {
        equal()
    }
    clr = 1;
    bunSw = 1;
    x = parseFloat(screen.innerHTML);
    operator = "+";
}

function numReduce() {
    if (clr == 0 ) {
        equal()
    }
    clr = 1;
    bunSw = 1;
    x = parseFloat(screen.innerHTML);
    operator = "-";
}

function numMultiply() {
    if (clr == 0 ) {
        equal()
    }
    clr = 1;
    bunSw = 1;
    x = parseFloat(screen.innerHTML);
    operator = "*";
}

function numDivide() {
    if (clr == 0 ) {
        equal()
    }
    clr = 1;
    bunSw = 1;
    x = parseFloat(screen.innerHTML);
    operator = "/";
}
function calSin(){
    screen.innerHTML = Math.sin(parseFloat(screen.innerHTML))
}
function calCos(){
    screen.innerHTML = Math.cos(parseFloat(screen.innerHTML))
}