const player = document.getElementById('player'); // Lấy phần tử có id là "player"
let x = 0; // Biến lưu vị trí ngang của player
let y = 0; // Biến lưu vị trí dọc của player
const step = 20; // Giá trị bước di chuyển (10px mỗi lần).

// Lắng nghe sự kiện nhấn phím
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':        // Nếu nhấn phím "Mũi tên lên"
            y -= step;         // Di chuyển lên trên (giảm giá trị y)
            break;
        case 'ArrowDown':      // Nhấn phím "Mũi tên xuống"
            y += step;         // Di chuyển xuống dưới (tăng giá trị y)
            break;
        case 'ArrowLeft':      // Nhấn phím "Mũi tên trái"
            x -= step;         // Di chuyển sang trái (giảm giá trị x)
            break;
        case 'ArrowRight':     // Nhấn phím "Mũi tên phải"
            x += step;         // Di chuyển sang phải (tăng giá trị x)
            break;
    }

    // Giới hạn để player không ra ngoài khu vực chơi
    x = Math.max(0, Math.min(x, 560)); // `x` bị giữ trong khoảng từ 0 đến 560 (600px - 40px).
    y = Math.max(0, Math.min(y, 360)); // `y` bị giữ trong khoảng từ 0 đến 360 (400px - 40px).

    // Cập nhật vị trí của player trên trang
    player.style.left = x + 'px';      // Set vị trí ngang
    player.style.top = y + 'px';       // Set vị trí dọc
});