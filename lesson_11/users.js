
fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(value => {
        show_users(value);
    })

function show_users(users) {
    for (let user of users) {
        let div = document.createElement("div");
        div.innerText = `${user.id} ${user.name}`;
        div.addEventListener("click", () => {
            location.href = `user-details.html?id=${user.id}`;
        })
        document.body.appendChild(div);
    }
}