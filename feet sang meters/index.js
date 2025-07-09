function feetToMeters(f) { return f * 0.3048; }
function metersToFeet(m) { return m * 3.2808; }

let c = prompt("1: Feet → Meters\n2: Meters → Feet");
let v = parseFloat(prompt("Nhập giá trị:"));

let r = (c === "1") ? feetToMeters(v) : metersToFeet(v);
alert(`Kết quả: ${r.toFixed(4)}`);