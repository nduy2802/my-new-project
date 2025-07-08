let n =  parseInt(prompt("nhập kích thước mảng :"));
let arr = [];
let count = 0;

for (let i= 0; i < n; i++) {
    let ch = prompt("nhập ký tự thứ :" + (i+1) + " : ");
    arr.push(ch);
    if (ch >= "0" && ch <= "9") {
        count++;
    }
}
document.write(" số ký tự số ( 0- 9 ) trong mảng là : " + count + "");