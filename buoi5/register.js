const registerForm = document.getElementById("registerForm");
let data = [];

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userInfo = {
        email: document.getElementById ("email").value,
        username: document.getElementById ("username").value,
        password: document.getElementById ("password").value,
    }

    data.push(userInfo);
    localStorage.setItem("data", JSON.stringify(data));
})