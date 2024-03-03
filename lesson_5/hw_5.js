// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const area_rectangle = (a, b) => a * b;

document.write(`<div>${area_rectangle(20, 16)}</div>`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const area_circle = r => 3.14159 * (r ** 2);

document.write(`<div>${area_circle(16)}</div>`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const area_cylinder = (h, r) => (3.14159 * (r ** 2)) * 2 + 2 * (3.14159 * r * h);

document.write(`<div>${area_cylinder(10, 6)}</div>`);

// - створити функцію яка приймає масив та виводить кожен його елемент
document.write(`<br>`);
const iter_array = array => {
    for (let item of array) {
        document.write(`<div>${item}</div>`);
    }
}

let array_1 = ["hello", 846843, true, "2024", true];
iter_array(array_1);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const create_p = text => document.write(`<p>${text}</p>`);

text_1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur cumque debitis deleniti, doloremque, enim fugit nihil nisi obcaecati omnis perferendis quae quibusdam reiciendis, sint soluta unde velit voluptates. Ab, accusamus aliquid dicta dolorum, eos eveniet ex facere itaque molestias nesciunt officia optio possimus quae soluta tempore! A ab accusantium aperiam, atque aut corporis culpa delectus deleniti distinctio eaque eius, molestias nemo nesciunt nostrum odit pariatur quos, repellat saepe vero. Ab, accusamus aliquid dicta dolorum, eos eveniet ex facere itaque molestias nesciunt officia optio possimus quae soluta tempore!";

create_p(text_1);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const create_short_ul = text => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
let text_2 = "Lorem ipsum consectetur adipisicing elit";
create_short_ul(text_2);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const create_ul = (text, q) => {
    document.write(`<ol>`);
    for (let i = 0; i < q; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ol>`);
}

create_ul(text_2, 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const create_list = arr => {
    document.write(`<ol>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ol>`);
}

create_list(array_1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const create_list_obj = arr => {
    for (let item of arr) {
        document.write(`<div>`);
        for (let itemKey in item) {
            document.write(`<text>${itemKey}: ${item[itemKey]}</text>; `);
        }
        document.write(`</div>`);
    }
}

let arr_obj = [
    {id: 1, name: "Hanna", age: 29},
    {id: 2, name: "Andrii", age: 35},
    {id: 3, name: "Oleksa", age: 40},
    {id: 3, name: "Olena", age: 38}
];

create_list_obj(arr_obj);

// - створити функцію яка повертає найменше число з масиву

const min_num = arr => {
    let res = arr[0];
    for (let num of arr) {
        if (num < res) {
            res = num;
        }
    }
    return res;
}

arr_2 = [-100, -200, -300, 0, 300];
document.write(`<div>${min_num(arr_2)}</div>`);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = arr => {
    let res = 0;
    for (let num of arr) {
        res += num;
    }
    return res;
}

document.write(`<div>${sum(arr_2)}</div>`);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
    let cur = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = cur;
    return arr;
}

arr_3 = [1, 2, 3, 4, 5];
document.write(`<div>${swap(arr_3, 0, 1)}`);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            let value = item.value;
            return sumUAH / value;
        }
    }
}

let currencyValuesArr = [{currency: "USD", value: 40}, {currency: "EUR", value: 42}, {currency: "GBP", value: 47}];
document.write(`<div>${exchange(100000, currencyValuesArr, 'USD')}</div>`);
document.write(`<div>${exchange(470000, currencyValuesArr, 'GBP')}</div>`);