function kiemtra() {
    let a = parseInt(document.getElementById("a").value);
    if (a < 20000000) {
        document.getElementById("result").innerHTML = " hoa hồng của bạn là 3%";
    } else if (a < 50000000) {
        document.getElementById("result").innerHTML = " hoa hồng của bạn là 5%";
    } else if (a < 100000000) {
        document.getElementById("result").innerHTML = " hoa hồng của bạn là 7%";
    } else {
        document.getElementById("result").innerHTML = " hoa hồng của bạn là 10 %";
    }
}
