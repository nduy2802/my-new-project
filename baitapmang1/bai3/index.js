let number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9] ;

let max =number[0] ;
for (let i = 1; i < number.length; i++) {
    if (number[i] > max) {
        max = number[i];
    }
}
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
let avg = sum / number.length;
document.write("Mảng: " + number.join(", ") + "<br>");
document.write("Giá trị lớn nhất: " + max + "<br>");
document.write("Giá trị trung bình: " + avg.toFixed(2));
