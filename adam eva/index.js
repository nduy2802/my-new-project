// Lớp Apple
class Apple {
    #weight = 10; // private field

    getWeight() {
        return this.#weight;
    }

    decrease() {
        if (this.#weight > 0) {
            this.#weight--;
        }
    }

    isEmpty() {
        return this.#weight <= 0;
    }
}

// Lớp Human
class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    say(words) {
        console.log(`${this.name} says: "${words}"`);
    }

    eat(apple) {
        if (!apple.isEmpty()) {
            apple.decrease();
            this.weight++;
            console.log(`${this.name} ăn một miếng táo `);
        } else {
            console.log(`${this.name} muốn ăn nhưng quả táo đã hết.`);
        }
    }

    getInfo() {
        return `${this.name} (${this.gender}) - Cân nặng: ${this.weight}`;
    }
}

// Khởi tạo
const apple = new Apple();
const adam = new Human("Adam", "Nam", 60);
const eva = new Human("Eva", "Nữ", 50);

// Mô phỏng câu chuyện
let turn = 0;
console.log(" Câu chuyện bắt đầu: Adam và Eva ăn táo...\n");

while (!apple.isEmpty()) {
    if (turn % 2 === 0) {
        adam.eat(apple);
    } else {
        eva.eat(apple);
    }

    console.log(` Táo còn lại: ${apple.getWeight()}`);
    console.log(`  ${adam.getInfo()}`);
    console.log(`  ${eva.getInfo()}`);
    console.log("---");

    turn++;
}

console.log(" Quả táo đã hết! Câu chuyện kết thúc.");
