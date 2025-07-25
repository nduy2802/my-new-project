function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let n = parseInt(prompt("Nhập số lượng phần tử của mảng (n <= 50):"));
while (isNaN(n) || n <= 0 || n > 50) {
    n = parseInt(prompt("Vui lòng nhập số nguyên từ 1 đến 50:"));
}

let a = [];
for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    a.push(num);
}

document.write("Mảng a vừa nhập: [" + a.join(", ") + "]<br>");

let b = a.filter(isPrime);
document.write("Mảng b (các số nguyên tố trong a): [" + b.join(", ") + "]");
