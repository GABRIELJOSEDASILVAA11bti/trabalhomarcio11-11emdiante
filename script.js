function init() {

    const navUl = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if(user) {

        navUl.innerHTML += `
        
        <h2>Usuários: ${user.name}</h2>
        <button>Sair</button>
        `
        return

    }


    navUl.innerHTML += `
    
    
    <li>
        <a href="./pages/login.html">login</a>
      </li>
    `
}


init()