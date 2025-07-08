let arr = [ 1, 2, 5, 10, 12, 15, 16, 16, 122];

let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}
document.write("Mảng: [" + arr.join(", ") + "]<br>");
document.write("Số lượng phần tử ≥ 10 là: " + count);