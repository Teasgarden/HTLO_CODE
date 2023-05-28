const loginForm = document.getElementById ("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"));
    if (data == null) {
        alert("Chua co thong tin dang ky, Vui long dang ky truoc");
    } else {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        for (let i = 0; i < data.length; i++) {
            if (data[i].username == username && password) {
                alert("Dang nhap thanh cong");
                return;
            } 
        }
        alert("username hoac password khong dung !!!");
    }
})