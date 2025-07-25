function soSanhPhanSo(tu1, mau1, tu2, mau2) {
    return tu1 * mau2 === tu2 * mau1;
}

let tu1 = parseInt(prompt("Nhập tử số phân số thứ nhất:"));
let mau1 = parseInt(prompt("Nhập mẫu số phân số thứ nhất (khác 0):"));
while (mau1 === 0) {
    mau1 = parseInt(prompt("Mẫu số phải khác 0. Nhập lại mẫu số phân số thứ nhất:"));
}

let tu2 = parseInt(prompt("Nhập tử số phân số thứ hai:"));
let mau2 = parseInt(prompt("Nhập mẫu số phân số thứ hai (khác 0):"));
while (mau2 === 0) {
    mau2 = parseInt(prompt("Mẫu số phải khác 0. Nhập lại mẫu số phân số thứ hai:"));
}

if (soSanhPhanSo(tu1, mau1, tu2, mau2)) {
    document.write(`Phân số ${tu1}/${mau1} bằng ${tu2}/${mau2}`);
} else {
    document.write(`Phân số ${tu1}/${mau1} KHÔNG bằng ${tu2}/${mau2}`);
}   