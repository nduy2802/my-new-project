function tinhDiem() {
    var vatLy = parseFloat(document.getElementById("vatLy").value);
    var hoaHoc = parseFloat(document.getElementById("hoaHoc").value);
    var sinhHoc = parseFloat(document.getElementById("sinhHoc").value);

    var tong = vatLy + hoaHoc + sinhHoc;
    var trungBinh = tong / 3;

    document.getElementById("tongDiem").innerHTML = "Tổng điểm= " + tong.toFixed(2);
    document.getElementById("diemTrungBinh").innerHTML = "Điểm trung bình= " + trungBinh.toFixed(2);
}


