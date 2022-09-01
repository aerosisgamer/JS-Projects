let username = document.getElementById("email");
var password = document.getElementById("password");
var userEmailError = document.getElementById("email-error");
let passError = document.getElementById("password-error");
let submitBtn = document.getElementById("submit-btn");
let submit = true;

username.addEventListener("focus", function () {
  username.parentElement.classList.remove("has-error");
  userEmailError.innerHTML = "";
});
password.addEventListener("focus", function () {
  password.parentElement.classList.remove("has-error");
  passError.innerHTML = "";
});


function validateForm(e) {
  var regex =
    /([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})$/;

  if (username.value.trim() == "") {
    userEmailError.innerHTML = "Please enter a email ";
    username.parentElement.classList.add("has-error");
    submit = false;
  } else if (username.value.includes(" ")) {
    userEmailError.innerHTML = "Remove spaces before submit";
    username.parentElement.classList.add("has-error");
    submit = false;
  } else if (!regex.test(username.value)) {
    userEmailError.innerHTML = "Enter a valid email";
    username.parentElement.classList.add("has-error");
    submit = false;
  }

  validatePass();

  if (!submit) {
    e.preventDefault();
  }
}

// password validation

function validatePass() {
  passw(password.value.length > 6, "pass-length");

  passw(password.value.match(/[0-9]/), "one-num");

  passw(password.value.match(/[A-Z]/), "capital");

  passw(
    password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\<\>\.\,]/),
    "one-sym"
  );
}

function passw(condition, attribute) {
  document.getElementById(attribute).style =
    "color: " + (condition ? "green;" : " red;");
  condition
    ? password.parentElement.classList.remove("has-error")
    : password.parentElement.classList.add("has-error");
  condition ? true : false;
}
// show password function
let passwordCheckbox = document.getElementById("show-pass");
passwordCheckbox.addEventListener("click", function () {
  password.type = passwordCheckbox.checked ? "text" : "password";
});

password.addEventListener("keyup", function(){
  let loading = document.querySelector(".bar-loading");
  
  if(password.value.length < 6){
    loading.classList.add("weak-pass")
  }

  if (password.value.length >= 6 && password.value.match(/[0-9]/)) {
    loading.classList.add("strong-pass")    
  }

  if (password.value.match(/[A-Z]/) && password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\<\>\.\,]/)) {
    loading.classList.add("strong-pass")    
  }

});