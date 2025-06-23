function kiemtra(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let max = a;
    if (b > max ){
        max = b;
    }if (c > max ){
        max = c;

    }
    document.getElementById("result").innerHTML = max + " là số lớn nhất";
}