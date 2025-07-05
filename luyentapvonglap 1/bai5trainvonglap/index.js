let a = 0;
let b = 1;
let sum = 0;

for ( let i = 1; i <= 20; i++){
    sum = sum + a ;
    let temp = a + b;
    a = b;
    b = temp;
}
    alert("Tổng số Fibonacci từ 1 đến 20 là: " + sum);