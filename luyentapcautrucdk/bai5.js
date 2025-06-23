//Điểm trung bình = (Điểm kiểm tra × 1 + Điểm giữa kỳ × 2 + Điểm cuối kỳ × 3) / 6
function kiemtra(){
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    let tb = (a*1 + b*2 + c*3)/6;
    if (tb > 8){
        document.getElementById('result').innerHTML = tb + " xếp loại giỏi";
}  else if (tb > 5 ) {
    document.getElementById("result").innerHTML = tb + " xếp loại khá";
    }else {
        document.getElementById("result").innerHTML= tb + " xếp loại trung bình";
    }
}