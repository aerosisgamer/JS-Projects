function validateForm() {
  var password = document.getElementById("password");
  var userNameError = document.getElementById("username-error");
  let passError = document.getElementById("password-error");
  let username = document.getElementById("username");
  let btnMode = 1;
  var regex =
    /([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})$/;

  if (username.value.trim() == "") {
    userNameError.innerHTML = "Please enter a email or a phone no.";
    userNameError.style = "color: red; font-size: 14px;";

    username.addEventListener("focus", function () {
      userNameError.style.display = "none";
      username.style.border = "none"
    });

    username.addEventListener("focus", function () {
        passError.style.display = "none";
        password.style.border = "none"
      });

    username.style = "border: 1px solid red;"

    btnMode = 0;

  } else if (regex.test(username.value)) {
    userNameError.innerHTML = "";
    btnMode = 1;

  } else {
    userNameError.innerHTML = "Enter a valid email";
    userNameError.style = "color: red; font-size: 14px;";
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
        userNameError.style.display = "none";
      });
    password.style = "border: 1px solid red;"
    btnMode = 0;
  }else if(password.value.length < 8){
    passError.innerHTML = "Password must be atleast 8 characters"
    passError.style = "color: red; font-size: 14px;"
  }else if(password.value.length > 15){
    passError.innerHTML = "Password must not exceed 15 characters"
    passError.style = "color: red; font-size: 14px;"
  }

  if (btnMode) {
    return true;
  } else {
    return false;
  }
}
