// 定义了经常会用到的变量
var x, y, operator,
    sw = 0,
    screen = document.getElementById('screen');
// 计算器左上方清除按钮
function clearNum() {
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
    if (sw == 1) {
        screen.innerHTML = 0;
        sw = 0;
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
// 四种运算
function numAdd() {
    sw = 1;
    x = parseFloat(screen.innerHTML);
    operator = "+";
}

function numReduce() {
    sw = 1;
    x = parseFloat(screen.innerHTML);
    operator = "-";
}

function numMultiply() {
    sw = 1;
    x = parseFloat(screen.innerHTML);
    operator = "*";
}

function numDivide() {
    sw = 1;
    x = parseFloat(screen.innerHTML);
    operator = "/";
}
