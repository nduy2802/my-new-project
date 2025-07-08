let input = prompt(" nhập chuỗi chứa các số: ");
let numbers = input.match(/-\d+/g);
let countNegative = 0;
if (numbers) {
    for ( let i = 0; i < numbers.length; i++) {
        let num = parseInt(numbers[i]);
        if (num < 0){
            countNegative++;
        }
    }
}
document.write("Số nguyen âm trong chuỗi là: " + countNegative);
