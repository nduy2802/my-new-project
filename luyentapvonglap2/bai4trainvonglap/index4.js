let dai = parseInt(prompt("Nhập chiều dài hình chữ nhật:"));
let rong = parseInt(prompt("Nhập chiều rộng hình chữ nhật:"));

let hinh = "";

for (let i = 0; i < rong; i++) {
    if (i === 0 || i === rong - 1) {
        hinh += "*".repeat(dai) + "\n";
    } else {
        hinh += "*" + " ".repeat(dai - 2) + "*\n";
    }
}

document.getElementById("output").innerText = hinh;