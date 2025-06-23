function kiemtra(){
    let a = parseInt(document.getElementById('a').value);
    if (a >= 15){
        document.getElementById('result').innerHTML = " đủ điều kiện vào lớp 10";
    } else {
        document.getElementById("result").innerHTML = " không đủ điều kiện vào lớp 10 ";
    }
}