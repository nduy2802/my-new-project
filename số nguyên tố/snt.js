function kiemTraSoNguyenTo() {
    let n = parseInt(document.getElementById("numberInput").value);
    let result = document.getElementById("result");
    if (n < 2) {
        result.innerText = n + " không phải là số nguyên tố.";
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        result.innerText = n + " là số nguyên tố.";
    } else {
        result.innerText = n + " không phải là số nguyên tố.";
    }
}