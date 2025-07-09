function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    return result;
}
result = 0;
alert("giá trị của result trc khi gọi hàm là: " + result + "");

result = addNumbers();
alert("Giá trị của result sau khi gọi hàm: " + result);
