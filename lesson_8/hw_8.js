// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, "Hanna", "Kruk", "fwkejfwekf@gmail.com", "0676776767"),
    new User(2, "Inna", "Denys", "pwekf@gmail.com", "0676776557"),
    new User(3, "Andrii", "Kruk", "fwkejfwekf@gmail.com", "0676776997"),
    new User(4, "Oksana", "Bus", "oks@gmail.com", "0676776767"),
    new User(5, "Olena", "Kruk", "12345@gmail.com", "0676776767"),
    new User(6, "Hanna", "Soroka", "12345@gmail.com", "0676006767"),
    new User(7, "Oksana", "Synytsia", "oks12345@gmail.com", "0675676767"),
    new User(8, "Olia", "Synytsia", "synytsia@gmail.com", "0672226767"),
    new User(9, "Ostap", "Soroka", "oks12345@gmail.com", "0676776767"),
    new User(10, "Serhii", "Synytsia", "synytsia@gmail.com", "0777756767"),
];


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let users_even = users.filter(user => !(user.id % 2));
console.log(users_even);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users_even.sort((a, b) => a.id - b.id));

// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    };
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [
    new Client(1, "Hanna", "Kruk", "fwkejfwekf@gmail.com", "0676776767", ["milk", "apples", "bread", "peaches"]),
    new Client(2, "Inna", "Denys", "pwekf@gmail.com", "0676776557", ["milk"]),
    new Client(3, "Andrii", "Kruk", "fwkejfwekf@gmail.com", "0676776997", ["juice", "water"]),
    new Client(4, "Oksana", "Bus", "oks@gmail.com", "0676776767", ["sweets"]),
    new Client(5, "Olena", "Kruk", "12345@gmail.com", "0676776767", ["milk", "bread", "water", "yogurt", "cheese", "bananas"]),
    new Client(6, "Hanna", "Soroka", "12345@gmail.com", "0676006767", ["cheese"]),
    new Client(7, "Oksana", "Synytsia", "oks12345@gmail.com", "0675676767", ["milk", "bread", "water"]),
    new Client(8, "Olia", "Synytsia", "synytsia@gmail.com", "0672226767", ["bread"]),
    new Client(9, "Ostap", "Soroka", "oks12345@gmail.com", "0676776767", []),
    new Client(10, "Serhii", "Synytsia", "synytsia@gmail.com", "0777756767", ["berry juice", "ice cream"]),
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((a, b) => b.order.length - a.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, brand, year, max_speed, engine_capacity) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_capacity = engine_capacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] === "function") continue;
            if (typeof this[key] === "object") continue;
            console.log(`${key} : ${this[key]}`)
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver = {}) {
        this.driver = driver;
    }
};

let car1 = new Car("austral", "renault", 2019, 250, 2);
car1.info();
car1.drive();
car1.increaseMaxSpeed(260);
car1.changeYear(2023);
car1.addDriver({name: "Andrii", age: 35});
console.log("-------")
car1.info();
console.log("-------")


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, brand, year, max_speed, engine_capacity) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_capacity = engine_capacity;
    };

    drive() {
        console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)

    };

    info() {
        for (const key in this) {
            if (typeof this[key] === "function") continue;
            if (typeof this[key] === "object") continue;
            console.log(`${key} : ${this[key]}`)
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.max_speed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver = {}) {
        this.driver = driver;
    }
};

let car2 = new Car2("smth", "renault", 2019, 250, 1.5);
car2.info();
car2.drive();
car2.increaseMaxSpeed(280);
car2.changeYear(2024);
car2.addDriver({name: "Hanna", age: 36});
console.log("-------")
car2.info();


// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
};

let cinderellas = [
    new Cinderella("Oksana", 26, 38),
    new Cinderella("Olena", 30, 37),
    new Cinderella("Lesia", 29, 41),
    new Cinderella("Olia", 32, 42),
    new Cinderella("Ira", 31, 36),
    new Cinderella("Hanna", 25, 40),
    new Cinderella("Ivanka", 36, 40.5),
    new Cinderella("Nataliia", 28, 39),
    new Cinderella("Lilia", 36, 38.5),
    new Cinderella("Olha", 36, 39.5)
]

class Prince {
    constructor(name, age, shoes_size) {
        this.name = name;
        this.age = age;
        this.shoes_size = shoes_size;
    }
}

let prince1 = new Prince("Andrii", 35, 40);

let corresponding_cinderella = {};
for (let cinderella of cinderellas) {
    if (cinderella.foot_size === prince1.shoes_size) {
        corresponding_cinderella = cinderella;
    }
}
console.log(corresponding_cinderella);

console.log(cinderellas.find(cinderella => cinderella.foot_size === prince1.shoes_size));

