function  kiemtra(){
    let a = parseInt(document.getElementById("a").value);
    let cuoc =0 ;
    if ( a <= 50){
        cuoc = a * 600;
    }else  if ( a <=100){
        cuoc = a * 600 + ( a - 50) * 400;
    } else {
        cuoc = 50 * 600 + 50 * 400 + (a - 100) * 200;
    }
    document.getElementById("result").innerHTML = "tổng cước điện thoại là " + cuoc + " đồng ";

}