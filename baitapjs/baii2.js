function tinhdoC() {
    var doC = parseFloat(document.getElementById("doC").value);
    var doF = (doC * 9 / 5) + 32;

    document.getElementById("doF").innerText = "Nhiệt độ F= " + doF.toFixed(2) + "°F";
}