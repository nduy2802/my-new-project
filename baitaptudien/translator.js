let englishWords = ["hello", "cat", "dog", "book", "apple"];
let vietnameseWords = ["xin chào", "mèo", "chó", "sách", "táo"];

function translateWord() {
    let input = document.getElementById("inputWord").value.trim().toLowerCase();
    let index = englishWords.indexOf(input);

    if (index !== -1) {
        document.getElementById("result").textContent = "Nghĩa tiếng Việt: " + vietnameseWords[index];
    } else {
        document.getElementById("result").textContent = "Không tìm thấy.";
    }
}