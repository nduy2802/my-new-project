const fixedText = "Gõ gì mà ngu theeeeeee";
let index = 0;

document.addEventListener("keydown", function(e) {
    e.preventDefault(); // chặn ký tự thật

    const box = document.getElementById("textBox");

    // Nếu đến hết chuỗi rồi thì reset lại
    if (index >= fixedText.length) {
        box.value = "";   // xoá toàn bộ
        index = 0;        // bắt đầu lại từ đầu
    }

    box.value += fixedText[index];
    index++;
});