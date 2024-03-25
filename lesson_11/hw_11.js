// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(value => {
        let carts = value.carts;
        let total = value.total;
        let carts_div = document.createElement("div");
        carts_div.innerText = `total: ${total} carts`;

        for (const cart of carts) {
            let cart_div = document.createElement("div");
            cart_div.innerHTML = `<br><b>CART</b>`;

            for (const cart_key in cart) {
                if (cart_key === "products") {
                    let products_div = document.createElement("div");
                    products_div.innerText = `${cart_key}:`;
                    let products = cart[cart_key];

                    for (const product of products) {
                        let product_ul = document.createElement("ul");

                        for (const key in product) {
                            if (key === "thumbnail") {
                                let img = document.createElement("img");
                                img.src = product[key];
                                product_ul.appendChild(img);
                            } else {
                                let li = document.createElement("li");
                                li.innerHTML = `${key}: ${product[key]}`
                                product_ul.appendChild(li);
                            }
                        }
                        products_div.appendChild(product_ul);
                        cart_div.appendChild(products_div);
                    }
                } else {
                    let div = document.createElement("div");
                    div.innerText = `${cart_key}: ${cart[cart_key]}`;
                    cart_div.appendChild(div);
                    if (cart_key === "id") {
                        div.classList.add("bold");
                    }
                }
            }
            carts_div.appendChild(cart_div);
        }
        document.body.appendChild(carts_div);
    });


//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch("https://dummyjson.com/recipes")
    .then(res => res.json())
    .then(value => {
        let gen_info = document.createElement("div");
        gen_info.innerText = `total: ${value.total} recipes`;
        show_recipes(value.recipes);
    })

function show_recipes(recipes) {
    let recipes_div = document.createElement("div");
    for (const recipe of recipes) {
        let recipe_div = document.createElement("div");
        recipe_div.innerHTML = `<b>RECIPE ${recipe.id}</b>`;

        for (const key in recipe) {
            let key_div = document.createElement("div");

            if (Array.isArray(recipe[key])) {
                let ol = document.createElement("ol");
                ol.innerHTML = `${key}:`;
                for (const item of recipe[key]) {
                    let li = document.createElement("li");
                    li.innerText = `${item}`;
                    ol.appendChild(li);
                }
                key_div.appendChild(ol);
            } else if (key === "image") {
                let img = document.createElement("img");
                img.src = `${recipe[key]}`;
                img.classList.add("img_30")
                key_div.appendChild(img);
            } else {
                key_div.innerText = `${key}: ${recipe[key]}`;
                if (key === "name") {
                    key_div.classList.add("bold");
                }
            }
            recipe_div.appendChild(key_div);
        }
        recipes_div.appendChild(recipe_div);
    }
    document.body.appendChild(recipes_div);
}


//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

// далі в users.html, users.js