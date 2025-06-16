var rates = {
    USD: { VND: 25000 },
    VND: { USD: 1 / 25000 }
};

function chuyendoi() {
    var amount = parseFloat(document.getElementById('amount').value);
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    if (from === to) {
        document.getElementById('result').innerHTML = `Result: ${amount} ${to}`;
        return;
    }

    var rate = rates[from]?.[to];
    if (!rate) {
        document.getElementById('result').innerHTML = "Error: Không tìm thấy tỷ giá.";
        return;
    }

    var result = amount * rate;
    document.getElementById("result").innerHTML = `Result: `+ result;
}
