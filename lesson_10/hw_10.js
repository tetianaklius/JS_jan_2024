// Створити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.forms["form1"];
let obj_div = document.getElementById("obj");

form1.onsubmit = function (e) {
    e.preventDefault();
    let object = {
        name: this.name.value,
        surname: this.surname.value,
        age: this.age.value
    }
    obj_div.innerText = `name: ${object.name}\nsurname: ${object.surname}\nage: ${object.age}`;
};

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let num_div = document.getElementById("number");

let number = +localStorage.getItem("number") || num_div.innerText;
number += 1;
num_div.innerText = number;
localStorage.setItem("number", number);

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сесію

function saveVisit() {
    let sessions = JSON.parse(localStorage.getItem("sessions")) || [];

    let date = new Date();
    sessions.push({
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ms: date.getTime()
    });

    localStorage.setItem("sessions", JSON.stringify(sessions));
}

saveVisit();

let session_block = document.getElementById("session");

function show_sessions(HTML_elem) {
    let sessions = JSON.parse(localStorage.getItem("sessions"));
    let ol = document.createElement("ol");

    for (const session of sessions) {
        let li = document.createElement("li");
        li.innerText = `session: year ${session.year}, month ${session.month}, day ${session.day}, ${session.hour}:${session.minutes}:${session.seconds}`

        ol.appendChild(li);
    }
    HTML_elem.appendChild(ol);
}

show_sessions(session_block);

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push(i);
}
let arr_block = document.getElementById("array");

let prev_button = document.createElement("button");
let next_button = document.createElement("button");
prev_button.classList.add("prev");
next_button.classList.add("next");
prev_button.innerText = "prev";
next_button.innerText = "next";

// v1 ---------------------------------

// arr_block.append(prev_button, next_button);
//
// window.onload = function () {                                                                         // !
//     localStorage.clear()
// };
//
// function prev(length) {
//     let last_elem_index = +localStorage.getItem("last_elem_index");
//     if (last_elem_index === 0) {
//         return
//     } else if (last_elem_index === length) {
//         last_elem_index -= 20;
//         localStorage.setItem("last_elem_index", last_elem_index.toString());
//     } else {
//         last_elem_index -= 10;
//         localStorage.setItem("last_elem_index", last_elem_index.toString());
//     }
//     return last_elem_index;
// }
//
// function next(length) {
//     let last_elem_index = +localStorage.getItem("last_elem_index");
//     if (last_elem_index < length) {
//         last_elem_index += 10;
//         localStorage.setItem("last_elem_index", last_elem_index.toString());
//     }
//     return last_elem_index;
// }
//
// let arr_slice = arr.slice(0, 10);
//
// show_elem(start, arr_slice, arr_block);
//
// function start() {
//     return 0;
// }
//
// function show_elem(func, arr, HTML_elem) {
//
//     let i = func(arr.length);
//     let arr_new_slice = arr.slice(i, i + 10)
//
//
//     for (const elem of arr_new_slice) {
//         let elem_div = document.createElement("div");
//         elem_div.innerText = `${elem}`
//         HTML_elem.appendChild(elem_div);
//     }
// }
//
// next_button.onclick = function () {
//     show_elem(next, arr, arr_block)
// };
//
// prev_button.onclick = function () {
//     show_elem(prev, arr, arr_block)
// };

// v2 ---------------------------------

// let start_ = 0;
// let step = 10;
// let limit = start_ + step;
//
// let arr_slice = arr.slice(0, 10);
// let arr_start = document.createElement("div");
// arr_start.innerText = `${arr_slice.join("\n")}`;
//
// arr_block.append(prev_button, next_button);
// arr_block.appendChild(arr_start);
//
//
// next_button.onclick = function () {
//     if (limit < arr.length) {
//         start_ = limit;
//         limit = limit + step;
//         for (let i = start_; i < limit; i++) {
//             if (i < arr.length) {
//                 let elem_div = document.createElement("div");
//                 elem_div.innerText = `${arr[i]}`
//                 arr_block.appendChild(elem_div);
//             }
//         }
//     }
// }
//
// prev_button.onclick = function () {
//     if (start_ > 0) {
//         limit = limit - step;
//         start_ = start_ - step;
//
//         for (let i = start_; i < limit; i++) {
//             if (start_ >= 0) {
//                 let elem_div = document.createElement("div");
//                 elem_div.innerText = `${arr[i]}`
//                 arr_block.appendChild(elem_div);
//             }
//         }
//     }
// }

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let button_1 = document.getElementsByClassName("to_text")[0];
let text = document.getElementById("text");

function eventAction(domElement, eventType, action, subj) {
    domElement.addEventListener(eventType, () => action(subj));
}

function invisible(subj) {
    subj.classList.add("invisible");
}

eventAction(button_1, "click", invisible, text);


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let button_2 = document.getElementsByClassName("confirm")[0];
button_2.classList.add("button_2");
let message_block = document.getElementsByClassName("age")[0];
message_block.classList.add("bold");
let age_input = document.getElementById("age");

eventAction(button_2, "click", age_confirm);

function age_confirm() {
    if (age_input.value >= 18) {
        message_block.innerText = "Вам є 18 років";
    } else if (age_input.value < 18 && age_input.value > 0) {
        message_block.innerText = "Вам немає 18 років";
    } else {
        message_block.innerText = "Спробуйте ще раз, будь ласка";
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let button = document.getElementsByClassName("button_3")[0];
let input_1 = document.getElementById("input_1");
let input_2 = document.getElementById("input_2");
let input_3 = document.getElementById("input_3");
button.onclick = () => {
    create_table(input_1, input_2, input_3)
};
let table = document.getElementsByClassName("table")[0];
let container = document.getElementsByClassName("container")[0];

function create_table(input_1, input_2, input_3) {
    let objs_quantity = input_1.value;
    let keys_quantity = input_2.value;
    let values = input_3.value.split(";");
    let obj_array = [];

    for (let i = 1; i <= objs_quantity; i++) {
        let obj = {};
        obj_array.push(obj);
    }

    let v_index = 0;
    for (const obj of obj_array) {
        let row = document.createElement("div");
        let o_index = 0;

        for (let i = 0; i < keys_quantity; i++) {
            if (values[v_index] === "") {
                obj[o_index] = "empty";
            } else {
                obj[o_index] = values[v_index];
            }
            v_index++;

            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerText = `${obj[o_index]}`;
            row.appendChild(cell);
            row.classList.add("row");
        }
        container.appendChild(row);
        table.appendChild(container);
    }
}

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let price_div = document.getElementsByClassName("price")[0];
let price = +localStorage.getItem("price") || 100;
price_div.innerText = `${price}грн`;

window.onload = function () {
    let now = new Date().getTime();
    let last = +localStorage.getItem("last") || +JSON.parse(localStorage.getItem("sessions"))[-1]["ms"];
    localStorage.setItem("last", JSON.stringify(now));
    if (now - last > 10000) {
        localStorage.setItem("price", (price += 10).toString());
    }
    price_div.innerText = `${price}грн`;
};
