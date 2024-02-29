// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area_rectangle(a, b) {
    return a * b
}

document.write(`<div>${area_rectangle(10, 6)}</div>`);

// - створити функцію яка обчислює та повертає площу круга з радіусом r

function area_circle(r) {
    return 3.14159 * r * r
}

document.write(`<div>${area_circle(6)}</div>`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function area_cylinder(h, r) {
    return (3.14159 * r * r) * 2 + 2 * (3.14159 * r * h)
}

document.write(`<div>${area_cylinder(10, 6)}</div>`);

// - створити функцію яка приймає масив та виводить кожен його елемент

function iter_array(array) {
    for (let item of array) {
        document.write(`<div>${item}</div>`);
    }
}

let array_1 = ["hello", 846843, true, "2024", true];
iter_array(array_1);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function create_p(text) {
    document.write(`<p>${text}</p>`);
}

text_1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, consequatur deserunt dicta enim explicabo inventore minus modi reiciendis soluta unde. Et hic iste magni minima natus quos, sit voluptates voluptatum.";
create_p(text_1);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function create_short_ul(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

create_short_ul(text_1);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function create_ul(text, q) {
    document.write(`<ul>`);
    for (let i = 0; i < q; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

create_ul(text_1, 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function create_list(arr) {
    document.write(`<ol>`);
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ol>`);
}

create_list(array_1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function create_list_obj(arr) {
    for (let item of arr) {
        document.write(`<div>`);
        for (let itemKey in item) {
            document.write(`<p>${itemKey}: ${item[itemKey]}</p>`);
        }
        document.write(`***</div>`);
    }
}

let arr_obj = [
    {id: 1, name: "Hanna", age: 29},
    {id: 2, name: "Andrii", age: 35},
    {id: 3, name: "Oleksa", age: 40}
];

create_list_obj(arr_obj);

// - створити функцію яка повертає найменьше число з масиву

function min_num(arr) {
    let res = arr[0];
    for (let num of arr) {
        if (num < res) {
            res = num;
        }
    }
    return res;
}

arr_2 = [1, -10, 30, 0, 1.2, 399, -8];
document.write(`<div>${min_num(arr_2)}</div>`);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let res = 0;
    for (let num of arr) {
        res += num;
    }
    return res;
}

document.write(sum(arr_2));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250