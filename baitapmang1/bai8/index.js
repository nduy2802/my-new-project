let arr = [];
 for (let i = 0; i < 10; i++) {
     let value = parseInt(prompt("Nhập giá trị phần tử thứ " + (i+1) + ":"));
     arr.push(value);
 }
 arr.sort(function (a, b) {
     return b - a;
 });
 document.write("Mảng sau khi sắp xếp giảm dần: [" + arr.join(", ") + "]");