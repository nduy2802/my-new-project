function calculate(operator) {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var result;

    if (isNaN(a) || isNaN(b)) {
        result = "Vui lòng nhập số hợp lệ";
    } else {
        if (operator === '+') result = a + b;
        else if (operator === '-') result = a - b;
        else if (operator === '*') result = a * b;
        else if (operator === '/') {
            if (b === 0) result = "Không thể chia cho 0";
            else result = a / b;
        }
    }

    document.getElementById("result").innerText = "Kết quả: " + result;
}