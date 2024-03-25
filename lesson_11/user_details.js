
let userId = new URL(location.href).searchParams.get("id");

fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
        show_user_info(user);
    })

function show_user_info(user) {
    let user_div = document.createElement("div");
    for (const key in user) {
        let div = document.createElement("div");
        if (typeof user[key] === "object") {
            let subheader = document.createElement("div");
            subheader.innerText = `${key}:`;
            div.appendChild(subheader);
            for (const key2 in user[key]) {
                let div2 = document.createElement("div");
                if (typeof user[key][key2] === "object") {
                    div2.innerText = `${key2}:`;
                    for (const key3 in user[key][key2]) {
                        let div3 = document.createElement("div");
                        div3.innerText = `${key3}: ${user[key][key2][key3]}`;
                        div2.appendChild(div3);
                    }
                } else {
                    div2.innerText = `${key2}: ${user[key][key2]}`;
                }
                div.appendChild(div2);
            }
        } else {
            div.innerText = `${key}: ${user[key]}`;
        }
        user_div.appendChild(div);
    }
    document.body.appendChild(user_div);
}
