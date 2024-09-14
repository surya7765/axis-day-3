const fetchAPI = async () => {

    const table_body = document.querySelector("tbody")
    const response =  await fetch("https://api.github.com/users");
    const users = await response.json()
    console.log(users);
    
    
    users.forEach(user => {
        const row = document.createElement("tr");
        const id  = document.createElement("td");
        id.textContent = user.id

        const username  = document.createElement("td");
        username.textContent = user.login


        const profile = document.createElement("td");
        const profile_avatar = document.createElement("img");
        profile_avatar.src = user.avatar_url
        profile_avatar.alt = "Avatar Url"
        profile_avatar.height = 50;
        profile_avatar.width = 50;
        profile_avatar.style.borderRadius = "50%";
        profile.appendChild(profile_avatar)

        const url = document.createElement("td");
        const anchor = document.createElement("a");
        anchor.href = user.html_url
        anchor.textContent = "View Profile"
        anchor.target = "_blank"
        url.appendChild(anchor)


        row.appendChild(id)
        row.appendChild(username)
        row.appendChild(profile)
        row.appendChild(url)

        table_body.appendChild(row);
    });

}

fetchAPI()