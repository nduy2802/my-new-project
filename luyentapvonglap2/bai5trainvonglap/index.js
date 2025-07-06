let p = parseFloat(prompt("Nhập số tiền ban đầu (VND):"));
let n = parseFloat(prompt("Nhập số tháng gửi :"));
let r = parseFloat(prompt("Nhập lãi suất hàng tháng:")) / 100;

let S = p * Math.pow((1 + r), n);

alert("Số tiền sau " + n + " tháng là: " + S.toFixed(2) + " VND");


