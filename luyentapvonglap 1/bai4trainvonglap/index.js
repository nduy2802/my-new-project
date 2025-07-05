let a = 0;
let b = 1;

while (true) {
    let temp = a + b;
    a = b;
    b = temp;

    if ( temp % 5 === 0){
        alert(" số đầu tiên trong dãy Fibonacci chia hết cho 5 là : " + temp + "");
        break;
    }
}