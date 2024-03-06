// - Знайти та вивести довижину стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str_1 = "hello world";
let str_2 = "lorem ipsum";
let str_3 = "javascript is cool";

document.write(`<div>${str_1.length}, ${str_2.length}, ${str_3.length}</div>`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str_1_upper = str_1.toUpperCase();
let str_2_upper = str_2.toUpperCase();
let str_3_upper = str_3.toUpperCase();

document.write(`<div>${str_1_upper}</div>`);
document.write(`<div>${str_2_upper}</div>`);
document.write(`<div>${str_3_upper}</div>`);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

str_4 = "HELLO WORLD";
str_5 = "LOREM IPSUM";
str_6 = "JAVASCRIPT IS COOL";

str_4_lower = str_4.toLowerCase();
str_5_lower = str_5.toLowerCase();
str_6_lower = str_6.toLowerCase();

document.write(`<div>${str_4_lower}</div>`);
document.write(`<div>${str_5_lower}</div>`);
document.write(`<div>${str_6_lower}</div>`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = " dirty string   ";

const clean_space_str = str => {
    let str_split = str.split(" ");
    for (let item of str_split) {
        if (item.length >= 1) {
            str_split.join(" ");
        }
    }
    return str;
}

document.write(`<div>${clean_space_str(str)}</div>`);

// or

const clean_space_str_2 = str => {
    str.replaceAll("  ", " ");
    if (str.startsWith(" ")) {
        str.replace(str[0], "");
    }
    if (str.endsWith(" ")) {
        str.replace(str[-1], "");
    }
    return str;
}

document.write(`<div>${clean_space_str_2(str)}</div>`);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToArray = str => str.split(" ");

let str_x = "Ревуть воли як ясла повні";
let arr = stringToArray(str_x);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr_x = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
arr_x = arr_x.map(item => item.toString());
console.log(arr_x);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNums = (nums, direction) => {
    if (direction === "ascending") {
        nums.sort((a, b) => a - b);
    }
    if (direction === "descending") {
        nums.sort((a, b) => b - a);
    }
    return nums;
}

console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

new_coursesAndDurationArray = coursesAndDurationArray.map((course, index) => (
    {id: index + 1, title: course.title, monthDuration: course.monthDuration})
)

console.log(new_coursesAndDurationArray);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards_array = [
    {cardSuit: "spade", value: "6", color: "black"},
    {cardSuit: "spade", value: "7", color: "black"},
    {cardSuit: "spade", value: "8", color: "black"},
    {cardSuit: "spade", value: "9", color: "black"},
    {cardSuit: "spade", value: "10", color: "black"},
    {cardSuit: "spade", value: "ace", color: "black"},
    {cardSuit: "spade", value: "jack", color: "black"},
    {cardSuit: "spade", value: "queen", color: "black"},
    {cardSuit: "spade", value: "king", color: "black"},

    {cardSuit: "diamond", value: "6", color: "red"},
    {cardSuit: "diamond", value: "7", color: "red"},
    {cardSuit: "diamond", value: "8", color: "red"},
    {cardSuit: "diamond", value: "9", color: "red"},
    {cardSuit: "diamond", value: "10", color: "red"},
    {cardSuit: "diamond", value: "ace", color: "red"},
    {cardSuit: "diamond", value: "jack", color: "red"},
    {cardSuit: "diamond", value: "queen", color: "red"},
    {cardSuit: "diamond", value: "king", color: "red"},

    {cardSuit: "heart", value: "6", color: "red"},
    {cardSuit: "heart", value: "7", color: "red"},
    {cardSuit: "heart", value: "8", color: "red"},
    {cardSuit: "heart", value: "9", color: "red"},
    {cardSuit: "heart", value: "10", color: "red"},
    {cardSuit: "heart", value: "ace", color: "red"},
    {cardSuit: "heart", value: "jack", color: "red"},
    {cardSuit: "heart", value: "queen", color: "red"},
    {cardSuit: "heart", value: "king", color: "red"},

    {cardSuit: "clubs", value: "6", color: "black"},
    {cardSuit: "clubs", value: "7", color: "black"},
    {cardSuit: "clubs", value: "8", color: "black"},
    {cardSuit: "clubs", value: "9", color: "black"},
    {cardSuit: "clubs", value: "10", color: "black"},
    {cardSuit: "clubs", value: "ace", color: "black"},
    {cardSuit: "clubs", value: "jack", color: "black"},
    {cardSuit: "clubs", value: "queen", color: "black"},
    {cardSuit: "clubs", value: "king", color: "black"},

];

// - знайти піковий туз

let ace_spade = cards_array.filter(card => card.cardSuit === "spade" & card.value === "ace")[0];

console.log(ace_spade);

// - всі шістки

let sixes = cards_array.filter(card => card.value === "6");

console.log(sixes);

// - всі червоні карти

let red_cards = cards_array.filter(card => card.color === "red");

console.log(red_cards);

// - всі буби

let diamonds = cards_array.filter(card => card.cardSuit === "diamond");

console.log(diamonds);

// - всі трефи від 9 та більше

let clubs = cards_array.filter(card => card.cardSuit === "clubs" & (card.value >= 9 || card.value.length > 2));

console.log(clubs);

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

cards_array_reduced = cards_array.reduce(
    (accumulator, card) => {
        if (card.cardSuit === "spade") {
            accumulator[0].push(card);
        }
        if (card.cardSuit === "diamond") {
            accumulator[1].push(card);
        }
        if (card.cardSuit === "heart") {
            accumulator[2].push(card);
        }
        if (card.cardSuit === "clubs") {
            accumulator[3].push(card);
        }
        return accumulator;
    },
    [[], [], [], []]
);

let card_deck = {
    spades: cards_array_reduced[0],
    diamonds: cards_array_reduced[1],
    hearts: cards_array_reduced[2],
    clubs: cards_array_reduced[3]
};

console.log(card_deck);


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

const find_sass = arr => arr.filter(obj => obj.modules.includes("sass"));

console.log(find_sass(coursesArray));

// --написати пошук всіх об'єктів, в який в modules є docker

const find_docker = arr => arr.filter(obj => obj.modules.includes("docker"));

console.log(find_docker(coursesArray));

// or
const find_module = (arr, module) => arr.filter(obj => obj.modules.includes(module));

console.log(find_module(coursesArray, "sass"));
console.log(find_module(coursesArray, "docker"));
