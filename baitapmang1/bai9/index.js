let a = [];
let b = [];

for ( let i = 0; i < 10; i++){
    let valueA = parseInt(prompt("Nhập giá trị phần tử thứ " + (i+1) + " của mảng A:"));
    a.push(valueA);
}
for ( let i = 0; i < 10; i++){
    let valueB = parseInt(prompt("Nhập giá trị phần tử thứ " + (i+1) + " của mảng B:"));
    b.push(valueB);
}
let c = a.concat(b);
document.write("Mảng C: [ " + c.join(", ") + "]");
