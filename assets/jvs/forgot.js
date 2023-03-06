let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnSignup = document.querySelector(".btn-signup");
let btnLogin = document.querySelector(".btn-login");
let btnForgot = document.querySelector(".btn-forgot");

btnForgot.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  let json = JSON.stringify(user);
  if (!username.value || !email.value || !password.value) {
    alert("Vui lòng nhập đầy đủ thông tin!");
  } else {
    localStorage.setItem(username.value, json);
    alert("Đổi mật khẩu thành công");
  }
});
