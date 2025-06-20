function  tinhSoNgay() {
    var month = parseInt(document.getElementById("month").value);
    var result="";

    switch (month) {
        case 1: case 3: case 5: case 8: case 10: case 12:
            result =` thang ${month} có 31 ngày` ;
            break;
        case 4: case 6: case 9: case 11:
            result = ` thang ${month} có 30 ngày` ;
            break;
        case 2:
            result = " tháng 2 có 28 ngoặc 29 ngày " ;
            break;
        default:
            result = " tháng không hợp lệ. nhập lại từ tháng  1 dến 12" ;

    }
    document.getElementById("ketqua").innerHTML = result;
}