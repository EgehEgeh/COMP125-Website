var age = document.getElementById("age");
var postal = document.getElementById("pCode");
var password = document.getElementById("password");
var confirm = document.getElementById("confirm");

function ageCheck() {
    if (age.value < 18) {
        age.setCustomValidity("You must be 18 years of age or older to register");
    } else if (isNaN(age.value)) {
        age.setCustomValidity("This field only accepts numeric input")
    } else {
        age.setCustomValidity("");
    }
}

function pCodeMatch() {
    var matcher = /^[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]$/;
    if (matcher.test(postal.value)) {
        postal.setCustomValidity("");
    } else {
        postal.setCustomValidity("Invalid postal code");
    }
}

function emailMatch() {
    var matcher = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (matcher.test(email.value)) {
        email.setCustomValidity("");
    } else {
        email.setCustomValidity("Invalid e-mail address");
    }
}

function passwordValidator() {
    if ((password.value).length < 6) {
        password.setCustomValidity("Your password must be 6 characters or longer")
    } else {
        password.setCustomValidity("");
    }
}

function passwordMatch() {
    if (confirm.value !== password.value) {
        confirm.setCustomValidity("Passwords must match");     
    } else {
        confirm.setCustomValidity("");
    }
}

function submitAlert() {
    alert("Thank you for registering!");
}

age.onkeyup = ageCheck;
postal.onkeyup = pCodeMatch;
email.onkeyup = emailMatch;
password.onblur = passwordValidator;
password.onkeyup = passwordMatch;
confirm.onkeyup = passwordMatch;

document.addEventListener("submit", submitAlert, false);