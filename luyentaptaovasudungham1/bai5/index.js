let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let constellations = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function printStars(tenngoisao) {
    let tennhap = tenngoisao.trim().toLowerCase();
    for (let i=0; i<stars.length; i++) {
        if (stars[i].toLowerCase() === tennhap) {
            return constellations[i];
        }
    }
    return null;
}
let ten = prompt("Nhập tên ngôi sao:");

if (ten !== null && ten.trim() !== "") {
    let ketQua = printStars(ten);
    if (ketQua !== null) {
        alert("Ngôi sao " + ten + " thuộc chòm sao: " + ketQua);
    } else {
        alert("Không tìm thấy ngôi sao có tên '" + ten + "'.");
    }
} else {
    alert("Bạn chưa nhập tên ngôi sao.");
}