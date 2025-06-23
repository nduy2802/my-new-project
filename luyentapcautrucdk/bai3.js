function kiemtra(){
    let a = parseInt(document.getElementById('a').value);
    if (a > 0){
        document.getElementById("result").innerHTML = a + " lớn hơn 0";
    } else  if (a < 0){
        document.getElementById("result").innerHTML = a + " nhỏ hơn 0";
    }else {
        document.getElementById("result").innerHTML = a + " bằng 0";
    }
}