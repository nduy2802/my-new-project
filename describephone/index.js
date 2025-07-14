class Mobile {
    constructor(name) {
        this.name = name;
        this.isOn = false;
        this.battery = 100;
        this.draftMessage = "";
        this.inbox = [];
        this.sentMessages = [];
    }

    // Kiểm tra trạng thái điện thoại
    checkStatus() {
        return this.isOn ? "Điện thoại đang bật" : "Điện thoại đang tắt";
    }

    // Bật điện thoại
    turnOn() {
        if (this.battery > 0) {
            this.isOn = true;
            this.useBattery();
        } else {
            console.log("Không thể bật. Hết pin!");
        }
    }

    // Tắt điện thoại
    turnOff() {
        this.isOn = false;
    }

    // Sạc pin
    charge() {
        this.battery = 100;
        console.log("Pin đã được sạc đầy.");
    }

    // Sử dụng pin (mỗi chức năng trừ 1 đơn vị)
    useBattery() {
        if (this.battery > 0) {
            this.battery--;
        } else {
            this.isOn = false;
            console.log("Pin yếu. Điện thoại tự tắt.");
        }
    }

    // Soạn tin nhắn
    composeMessage(message) {
        if (!this.isOn) return console.log("Điện thoại đang tắt.");
        this.draftMessage = message;
        this.useBattery();
    }

    // Gửi tin nhắn đến điện thoại khác
    sendMessage(receiver) {
        if (!this.isOn) return console.log("Điện thoại đang tắt.");
        if (!(receiver instanceof Mobile)) return console.log("Người nhận không hợp lệ.");

        receiver.receiveMessage(this.draftMessage, this.name);
        this.sentMessages.push(this.draftMessage);
        console.log(`Đã gửi: "${this.draftMessage}" đến ${receiver.name}`);
        this.draftMessage = "";
        this.useBattery();
    }

    // Nhận tin nhắn
    receiveMessage(message, senderName) {
        if (!this.isOn) return; // không nhận nếu đã tắt
        this.inbox.push(`Từ ${senderName}: ${message}`);
        this.useBattery();
    }

    // Xem tin nhắn đến
    viewInbox() {
        if (!this.isOn) return console.log("Điện thoại đang tắt.");
        console.log("=== Hộp thư đến ===");
        this.inbox.forEach((msg, i) => console.log(`${i + 1}. ${msg}`));
        this.useBattery();
    }

    // Xem tin nhắn đã gửi
    viewSentMessages() {
        if (!this.isOn) return console.log("Điện thoại đang tắt.");
        console.log("=== Tin nhắn đã gửi ===");
        this.sentMessages.forEach((msg, i) => console.log(`${i + 1}. ${msg}`));
        this.useBattery();
    }
}
let phoneA = new Mobile("A");
let phoneB = new Mobile("B");

phoneA.turnOn();
phoneB.turnOn();

phoneA.composeMessage("Chào bạn B!");
phoneA.sendMessage(phoneB);

phoneB.viewInbox();
phoneA.viewSentMessages();
phoneA.charge();
phoneA.useBattery();
phoneB.composeMessage(" xin chào a");
phoneB.sendMessage(phoneA);
phoneB.viewSentMessages();