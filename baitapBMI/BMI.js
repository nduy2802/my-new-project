function tinhBMI(){
    var weight = parseFloat(document.getElementById("weight").value);
    var heightCm = parseFloat(document.getElementById("height").value);
    var height = heightCm / 100;
    if (isNaN(weight) || isNaN(height) || heightCm <= 0) {
        document.getElementById("result").innerHTML = "Vui lòng nhập đúng cân nặng và chiều cao!";
        return;
    }
    var bmi = weight / (height * height);
    var kq="";
    if (bmi< 18.5) {
        kq =" underweight";
    } else if (bmi< 25) {
        kq =" normal";
    } else if (bmi< 30) {
        kq =" overweight";
    } else {
        kq =" obese";
    }
    document.getElementById("result").innerHTML = " chỉ số BMI của bạn là : " + bmi + kq;
}
