let username = document.getElementById("email");
var password = document.getElementById("password");
var userEmailError = document.getElementById("email-error");
let passError = document.getElementById("password-error");
let submitBtn = document.getElementById("submit-btn");
let btnMode = 1;

function validateForm() {

  var regex =
    /([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})$/;

  if (username.value.trim() == "") {
    userEmailError.innerHTML = "Please enter a email or a phone no.";
    userEmailError.style = "color: red; font-size: 14px;";

    username.addEventListener("focus", function () {
      userEmailError.style.display = "none";
      username.style.border = "none"
    });

    username.addEventListener("focus", function () {
        passError.style.display = "none";
        password.style.border = "none"
      });

    username.style = "border: 1px solid red;" 
    btnMode = 0;

  }else if(username.value.includes(" ")){
    userEmailError.innerHTML = "Remove spaces before submit";
    userEmailError.style = "color: red; font-size: 14px;"
    btnMode = 0;

  } else if (regex.test(username.value)) {
    userEmailError.innerHTML = "";
    btnMode = 1;

  } else {
    userEmailError.innerHTML = "Enter a valid email";
    userEmailError.style = "color: red; font-size: 14px;";
    username.style = "border: 1px solid red;";
    btnMode = 0;
  }

  if(password.value == ""){
    passError.innerHTML = "Please enter password"
    passError.style = "color: red; font-size: 14px;"
    password.addEventListener("focus", function () {
        passError.style.display = "none";
        username.style.border = "none";
        password.style.border = "none";
        userEmailError.style.display = "none";
      });
    password.style = "border: 1px solid red;"
    btnMode = 0;
    }

    if(password.value.length > 6){
      btnMode = 1;
    }else {
      btnMode = 0;
    }
  
    if(password.value.match(/[0-9]/)){
      btnMode = 1;
    }else {
      btnMode = 0;
    }
  
    if(password.value.match(/[A-Z]/)){
      btnMode = 1;
    }else {
      btnMode = 0;
    }
  
    if((/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\<\>\.\,]/).test(password.value)){
      btnMode = 1;
    }else {
      btnMode = 0;
    }
    
    if (btnMode) {
      return true;
    } else {
      return false;
    }
  }
  
// password validation 

function validatePass(){
  if(password.value.length > 6){
    document.getElementById("pass-length").style = "color: green;"
  }else {
    document.getElementById("pass-length").style = "color: red;"
  }

  if(password.value.match(/[0-9]/)){
    document.getElementById("one-num").style = "color: green;"
  }else {
    document.getElementById("one-num").style = "color: red;"
  }

  if(password.value.match(/[A-Z]/)){
    document.getElementById("capital").style = "color: green;"
  }else {
    document.getElementById("capital").style = "color: red;"
  }

  if(password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\<\>\.\,]/)){
    document.getElementById("one-sym").style = "color: green;"
  }else {
    document.getElementById("one-sym").style = "color: red;"
  }
}

// show password function 

function showPass(){
  let passwordSwitch = document.getElementById("show-pass");

  if(password.type == "password"){
    password.type = "text"
  }else {
    password.type = "password"
  }
}
