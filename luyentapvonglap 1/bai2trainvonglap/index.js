let nhietdo = +prompt(" nhập nhiệt độ hiện tại");
if ( nhietdo > 100 ){
    alert("nhiệt độ quá cao vui lòng giảm nhiệt độ");
}
else if ( nhietdo < 20){
    alert(" nhiệt độ quá thấp vui lòng tăng nhiệt ");
} else {
    alert("nhiệt độ ổn định");
}