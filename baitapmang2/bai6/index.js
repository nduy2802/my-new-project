let input = prompt(" nhập các ký tực cách nhau bởi dấu (,) :");
let arr = input.split(",");
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
        arr[i] = '_';
    }
}
document.write("Mảng sau khi thay thế " + arr.join(", "));