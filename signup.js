let signup = () => {
    let name = document.querySelectorAll(".inp1")[0].value
    let email = document.querySelectorAll(".inp2")[0].value
    let phone = document.querySelectorAll(".inp3")[0].value
    let password = document.querySelectorAll(".inp4")[0].value
    if(name === "" || email === "" || phone === "" || password === "") return
    let user = { name, email, phone, password }
    localStorage.setItem("userValues", JSON.stringify(user))
    localStorage.setItem("login", true)
    window.location.replace("Add-to-Cart-Functionality/home.html")
}

function verifyUser() {
    let loggedIn = localStorage.getItem("login")
    if (loggedIn === "true") {
        window.location.replace("home.html");
    }
}
window.addEventListener("load", function () {
    verifyUser();
})

let login1 = document.querySelectorAll("#login1")[0]
let login2 = document.querySelectorAll("#login2")[0]

function logIn() {
    let user = JSON.parse(localStorage.getItem("userValues"))
    if( login1.value === "" || login2.value === "") return
    let { email, password } = user;
    // console.log(email, password, login1.value, login2.value);
    // console.log(typeof login1.value, typeof login2.value, typeof email, typeof password);
    if (login1.value == email && login2.value == password) {
        localStorage.setItem("login", true);
        window.location.reload()
    } else if (login1.value !== email || login2.value !== password) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Email or Password is Incorrect 🤦‍♀️",
            showConfirmButton: false,
            timer: 1500
        });
    }
}
