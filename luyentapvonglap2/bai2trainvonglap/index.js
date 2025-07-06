
let n = parseInt(prompt("Nhập một số nguyên dương:"));

if (isNaN(n) || n < 0) {
    alert("Vui lòng nhập một số nguyên dương hợp lệ!");
} else {

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    alert(`Giai thừa của ${n} là ${result}`);
}