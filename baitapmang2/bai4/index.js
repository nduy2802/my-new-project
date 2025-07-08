let str = prompt(" nhập một chuỗi:");
let words = str.trim().split(/\s+/);
let count = words.length;
document.write("Số từ trong chuỗi là: " + count);