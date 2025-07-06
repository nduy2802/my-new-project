let heart = "";
let n = 4;

for (let i = n / 2; i < n; i += 1) {
    for (let j = 1; j < n - i; j++) {
        heart += " ";
    }
    for (let j = 1; j <= i * 2 + 1; j++) {
        heart += "*";
    }
    for (let j = 1; j <= (n - i) * 2 - 1; j++) {
        heart += " ";
    }
    for (let j = 1; j <= i * 2 + 1; j++) {
        heart += "*";
    }
    heart += "\n";
}



document.getElementById("output").innerText = heart;