function tinhdientich(){
    var r =parseFloat(document.getElementById("banKinh").value);
    var dientich= Math.PI * r * r;

    document.getElementById("dientich").innerHTML = " diện tích hình tròn =" + dientich.toFixed(2);

}
function tinhchuvi(){
    var r =parseFloat(document.getElementById("banKinh").value);
    var chuVi= 2 * Math.PI * r;
    document.getElementById("chuVi").innerHTML= " chu vi hình tròn = " + chuVi.toFixed(2);
}