let arr = [];
for ( let i = 0; i <10; i++){
    let value = parseInt(prompt("Nhập giá trị phần tử thứ " + (i+1) + ":"));
    arr.push(value);
}
let V = parseInt(prompt("Nhập số nguyên V cần kiểm tra  và xóa : "));
let index = arr.indexOf(V);
if (index === -1) {
    document.write("Không tìm thấy số nguyên V trong mảng");
} else {
    for ( let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    document.write("Mảng sau khi xóa: " + V + " là : " + arr.join(", "));
}


