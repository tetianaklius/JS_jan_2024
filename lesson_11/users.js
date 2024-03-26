fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(value => {
        show_users(value);
    })

function show_users(users) {
    for (let user of users) {
        let div = document.createElement("div");
        div.classList.add("users_list");
        div.innerHTML = `<a>${user.id} ${user.name}</a>`;

        div.addEventListener("click", () => {
            location.href = `user-details.html?id=${user.id}`;
        })
        div.addEventListener("mouseover", () => {
            div.style.background = "rgba(168,110,194,0.36)";
            div.style.fontWeight = "bolder";
            div.style.cursor = "pointer";
        })
        div.addEventListener("mouseout", () => {
            div.style.background = "white";
            div.style.fontWeight = "normal";
        });
        document.body.appendChild(div);
    }
}