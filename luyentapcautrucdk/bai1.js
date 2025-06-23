function kiemtra() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let kq = document.getElementById('result').value;
    if (b === 0) {
        document.getElementById('result').innerHTML = 'không thể chia hết cho 0 '
        return;
    }
    if (a % b === 0) {
        document.getElementById("result").innerHTML = a + " chia hết cho " + b;
    } else {
        document.getElementById("result").innerHTML = a + " không chia hết cho " + b;
    }

}