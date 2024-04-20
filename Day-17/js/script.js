// Bài 1: Hoán vị 2 số không dùng biến trung gian
var a = 10;
var b = 5;

a = a + b; // 15
b = a - b; // 15 - 5
a = a - b; // 15 - 10

console.log(`a = ${a}, b = ${b}`);

// Bài 2: Viết chương trình tính toán

var s = 10 + 20 + 5 ** 10 / 2;

console.log(`s = ${s}`);

// Bài 3: Tìm số lớn nhất
var a = 30,
    b = 20,
    c = 45;
var max = a;

if (max <= b) {
    max = b;
} else if (max <= c) {
    max = c;
}

console.log(`Số lớn nhất là: ${max}`);

// Bài 4: Kiểm tra số cùng dấu
var a = -5,
    b = -10;

if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
    console.log("Cùng dấu");
} else {
    console.log("Khác dấu");
}

// Bài 5: Sắp xếp 3 số theo thứ tự tăng dần
var a = 10,
    b = 5,
    c = 4;

if (a > b) {
    var temp = a;
    a = b;
    b = temp;
}

if (a > c) {
    var temp = a;
    a = c;
    c = temp;
}

if (b > c) {
    var temp = b;
    b = c;
    c = temp;
}

console.log(`a = ${a}, b = ${b}, c = ${c}`);
