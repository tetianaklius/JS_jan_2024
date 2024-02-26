// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, true, 10, "arr", 25, true, "post", 299, 0, 300];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book_1 = {title: "Book 1", pageCount: 299, genre: "fantasy"};
let book_2 = {title: "Book 2", pageCount: 899, genre: "history"};
let book_3 = {title: "Book 3", pageCount: 39, genre: "fairytale"};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book_4 = {
    title: "Book 4",
    pageCount: 299,
    genre: "fantasy",
    authors: [{name: "Hanna", age: 29}, {name: "Andrii", age: 35}]
};
let book_5 = {
    title: "Book 5",
    pageCount: 899,
    genre: "history",
    authors: [{name: "Lesia", age: 49}, {name: "Pavlo", age: 55}]
};
let book_6 = {
    title: "Book 6",
    pageCount: 79,
    genre: "fairytale",
    authors: [{name: "Nazar", age: 41}, {name: "Olia", age: 35}]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user_array = [
    {name: "Anton", username: "anton", password: "vjsvhskdjvj"},
    {name: "Hanna", username: "hanna", password: "fwegek"},
    {name: "Yurii", username: "yura5", password: "3rf32"},
    {name: "Olia", username: "oliaaa", password: "glege"},
    {name: "Petro", username: "ppp555", password: "wffww"},
    {name: "Marta", username: "marta", password: "fwfwf"},
    {name: "Lina", username: "lina", password: "2244567ggh"},
    {name: "Ivan", username: "ivan", password: "ivan93918912"},
    {name: "Olena", username: "olena", password: "ol232"},
    {name: "Oksana", username: "oksana", password: "3yrgf3ifq"},
];

console.log(user_array[0].password);
console.log(user_array[1].password);
console.log(user_array[2].password);
console.log(user_array[3].password);
console.log(user_array[4].password);
console.log(user_array[5].password);
console.log(user_array[6].password);
console.log(user_array[7].password);
console.log(user_array[8].password);
console.log(user_array[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;

if (x === 0) {
    console.log("Невірно");
} else {
    console.log("Вірно");
}

// or

if (x < 0 || x > 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

// or

if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно")
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 56;

if (time >= 0 && time <= 15) {
    console.log("first quarter")
} else if (time >= 16 && time <= 30) {
    console.log("second quarter")
} else if (time >= 31 && time <= 45) {
    console.log("third quarter")
} else {
    console.log("fourth quarter")
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 1;
if (day >= 1 && day <= 10) {
    console.log("the first decade of the month")
} else if (day >= 11 && day <= 20) {
    console.log("the second decade of the month")
} else {
    console.log("the third decade of the month")
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day_number = 6;
//
// switch (day_number) {
//     case 1:
//         document.write(`<h2>Monday</h2>`);
//         break;
//     case 2:
//         document.write(`<h2>Tuesday</h2>`);
//         break;
//     case 3:
//         document.write(`<h2>Wednesday</h2>`);
//         break;
//     case 4:
//         document.write(`<h2>Thursday</h2>`);
//         break;
//     case 5:
//         document.write(`<h2>Friday</h2>`);
//         break;
//     case 6:
//         document.write(`<h2>Saturday</h2>`);
//         break;
//     case 7:
//         document.write(`<h2>Sunday</h2>`);
//         break;
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let t = 20;
let c = 25;

if (t > c) {
    console.log(t);
} else if (t === c) {
    console.log("The numbers are equal");
} else {
    console.log(c);
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
let xx = 0;

if (xx === 0 || xx === false || xx === undefined || xx === null || xx === NaN || xx === "") {
    xx = "default";
}
console.log(xx);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер")
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}