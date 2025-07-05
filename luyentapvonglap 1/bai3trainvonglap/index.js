let a = 0 ;
let b = 1 ;
document.write(" 20 số Fibonacci đầu tiên  là:");

for (let i = 0; i < 20; i++) {
    document.write(a + "<br>");
    let temp = a + b;
    a = b;
    b = temp;
}