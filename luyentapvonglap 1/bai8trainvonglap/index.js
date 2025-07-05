function startGame() {
    let min = parseInt(prompt("Nhập số nhỏ nhất trong khoảng đoán:"));
    let max = parseInt(prompt("Nhập số lớn nhất trong khoảng đoán:"));
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Khoảng nhập không hợp lệ. Vui lòng thử lại!");
        return;
    }
    let answer = Math.floor(Math.random() * (max - min + 1)) + min;
    let attempts = 3;
    while (attempts > 0) {
        let guess = parseInt(prompt(`Bạn còn ${attempts} lần. Đoán một số từ ${min} đến ${max}:`));
        if (isNaN(guess)) {
            alert("Vui lòng nhập một số!");
            continue;
        }
        if (guess === answer) {
            alert("🎉 Chúc mừng! Bạn đã đoán đúng!");
            return;
        } else if (guess < answer) {
            alert("Sai rồi! Số bạn đoán nhỏ hơn.");
        } else {
            alert("Sai rồi! Số bạn đoán lớn hơn.");
        }

        attempts--;
    }
    alert(` Hết lượt! Số đúng là: ${answer}`);
}
