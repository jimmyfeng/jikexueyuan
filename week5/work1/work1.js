// 定义常用变量
var btn = document.getElementById('btn1'),
    input = document.getElementById('input1'),
    grade;
// 检查函数,用switch语句，对每一种情况都做了case
function check() {
    switch (parseInt((input.value) / 10)) {
        case 10:
            grade = 1;
            break;
        case 9:
            grade = 1;
            break;
        case 8:
            grade = 2;
            break;
        case 7:
            grade = 3;
            break;
        case 6:
            grade = 4;
            break;
        case 5:
            grade = 5;
            break;
        case 4:
            grade = 6;
            break;
        case 3:
            grade = 7;
            break;
        case 2:
            grade = 8;
            break;
        case 1:
            grade = 9;
            break;
        default:
            grade = 10;
            break;
    }
    // 输出结果,对结果进行筛选，汉字和超过数值的值无效
    if (isNaN(input.value) || input.value > 100 || input.value < 0) {
        alert("输入的成绩无效！请输入0-100的数值。");
    } else {
        alert("该生为" + grade + "等生");
    }
}
