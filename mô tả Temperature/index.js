class Temperature {
    constructor(celsius) {
        if (celsius < -273) {
            throw new Error("Nhiệt độ không thể nhỏ hơn -273°C (điểm không tuyệt đối)");
        }
        this.celsius = celsius;
    }

    toFahrenheit() {
        return this.celsius * 9 / 5 + 32;
    }

    toKelvin() {
        return this.celsius + 273.15;
    }
}

// Khởi tạo đối tượng và gán nhiệt độ 25°C
try {
    const temp = new Temperature(25);

    // Hiển thị kết quả
    document.getElementById("output").innerHTML = `
      <strong>Nhiệt độ:</strong> ${temp.celsius} °C<br>
      <strong>Fahrenheit:</strong> ${temp.toFahrenheit().toFixed(2)} °F<br>
      <strong>Kelvin:</strong> ${temp.toKelvin().toFixed(2)} K
    `;
} catch (error) {
    document.getElementById("output").innerText = error.message;
}