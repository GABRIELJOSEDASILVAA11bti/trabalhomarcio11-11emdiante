const button = document.querySelector("button")

button.onclick = (event) => {

    event.preventDefault()
    login()
}

async function sendUser() {


const email = document.querySelector("#email").value
const password = document.querySelector("#senha").value

const user = {
    email,
    password
       }


     const response = await fetch("https://backend02mb-bice.vercel.app//login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
}).then(response => response.json())

if (response.message) {

    alert(response.message)
    return
}

const { id, name } = response

sessionStorange.setItem("user", JSON.stringify({ id, name}))

alert("Login realizado com sucesso")




window.location.href = "../index.html"

}