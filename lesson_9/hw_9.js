//
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let block_1 = document.createElement(`div`);
block_1.innerText = "Hello";
block_1.classList.add("wrap", "collapse", "alpha", "beta");
block_1.style.backgroundColor = "green";
block_1.style.color = "white";
block_1.style.fontSize = "25px";

document.body.append(block_1);

let block_2 = block_1.cloneNode(true)
document.body.append(block_2);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement("ul");
for (let item of arr) {
    let li = document.createElement("li");
    li.innerText = `${item}`;
    ul.append(li);
}
document.body.append(ul);


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let courses = document.createElement("div")
for (let course of coursesAndDurationArray) {
    let course_info = document.createElement("div");
    //
    // course_info.innerHTML = `${course.title}: ${course.monthDuration} months`;
    // courses.append(course_info);
    // or
    for (let key in course) {
        let key_info = document.createElement("p");
        key_info.innerHTML = `${key}: ${course[key]}`;
        course_info.append(key_info);
    }
    courses.append(course_info);
}

document.body.append(courses);


// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
for (const course of coursesAndDurationArray) {
    let course_info = document.createElement("div");
    course_info.classList.add("item");
    for (let key in course) {
        if (key === "title") {
            let title = document.createElement("h1");
            title.classList.add("heading");
            title.innerHTML = `${course[key]}`;
            course_info.append(title);
        }
        if (key === "monthDuration") {
            let duration = document.createElement("p");
            duration.classList.add("description");
            duration.innerHTML = `duration: ${course[key]} months`;
            course_info.append(duration);
        }
    }
    courses.append(course_info);
}


// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Марджорі Жаклін "Мардж" Сімпсон (у дівочості Був\'є) (англ. Marjorie Jacqueline "Marge" Simpson) - постійний персонаж мультиплікаційного серіалу "Сімпсони", її озвучує Джулія Кавнер. Зазвичай носить зелену сукню, червоні балетки, на шиї — намисто зі штучних перлів і їздить помаранчевим універсалом. У неї шикарне синє волосся, яке вона зазвичай збирає в дуже високу зачіску. Очі кольору горіха (19s6e). Основне заняття — домогосподарка, більшу частину часу проводить у турботі про будинок, дітей та Гомера. Мардж копіює стереотип провінційної американської домогосподарки 50-х років. Мардж – єдиний член сім\'ї, який відвідує церкву добровільно. Намагається підтримувати моральність як своєї сім\'ї, а й усього міста. Відмінно готує, особливо славляться її свинячі відбивні та зефір. Улюблена страва – локшина з олією.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ліза Марі Сімпсон (англ. Lisa Marie Simpson) - героїня мультиплікаційного серіалу "Сімпсони". Середня дитина в сім\'ї, восьмирічна дівчинка, що виділяється серед інших Сімпсонів насамперед своїм розумом і розважливістю.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Маргарет Евелін "Меґгі" Сімпсон (англ. Margaret Evelyn "Maggie" Simpson) - персонаж мультсеріалу "Сімпсони". Вперше з\'явилася на телебаченні в шоу Трейсі Ульман, в короткометражці Good Night (англ.) рос. 19 квітня 1987 року. Меггі була придумана і розроблена карикатуристом Меттом Грейнінгом, поки він чекав на зустріч з Джеймсом Л. Бруксом. Названа на честь молодшої сестри Грейнінга. Після появи у шоу Трейсі Ульман, через три роки сім\'я Сімпсонів здобула власний серіал на телеканалі Fox, дебют відбувся 17 грудня 1989 року.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
    let member_info = document.createElement("div");
    member_info.classList.add("member");
    for (const key in simpson) {
        let key_info = document.createElement("p");
        if (key === "photo") {
            let image = document.createElement("img");
            key_info.append(image);
            image.src = `${simpson[key]}`;
        } else {
            key_info.innerHTML = `<b>${key}:</b> ${simpson[key]}`;
        }
        member_info.append(key_info);
    }
    document.body.append(member_info);
}


// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
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