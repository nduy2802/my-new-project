function triangleBottomLeft(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += "*".repeat(i) + "\n";
    }
    return result;
}

function triangleBottomRight(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += " ".repeat(n - i) + "*".repeat(i) + "\n";
    }
    return result;
}

function triangleTopLeft(n) {
    let result = "";
    for (let i = n; i >= 1; i--) {
        result += "*".repeat(i) + "\n";
    }
    return result;
}

function triangleTopRight(n) {
    let result = "";
    for (let i = n; i >= 1; i--) {
        result += " ".repeat(n - i) + "*".repeat(i) + "\n";
    }
    return result;
}

const size = 5; // Chiều cao tam giác
let output = "";

output += "1. Góc vuông dưới-trái:\n" + triangleBottomLeft(size) + "\n";
output += "2. Góc vuông dưới-phải:\n" + triangleBottomRight(size) + "\n";
output += "3. Góc vuông trên-trái:\n" + triangleTopLeft(size) + "\n";
output += "4. Góc vuông trên-phải:\n" + triangleTopRight(size) + "\n";

document.getElementById("output").innerText = output;