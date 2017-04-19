function myFunction() {
    //var txt = "";

    if (document.getElementById("pass").validity.patternMismatch) {
        alert("Not valid pattern");
    }
    //document.getElementById("demo").innerHTML = txt;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
    //test method for RegEx expressions  
    return re.test(str);
}

function checkForm(form) {
    if (form.username.value == "") {
        alert("Error: Username cannot be blank!");
        form.username.focus();
        return false;
    }
    if (form.email.value == "") {
        alert("Error: Email cannot be blank!");
        form.email.focus();
        return false;
    } else {

        if (!validateEmail(form.email.value)) {

            alert("the email you have entered is not valid");
            form.email.focus();
            return false;

        }
    }

    re = /^\w+$/;
    if (!re.test(form.username.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        form.username.focus();
        return false;
    }
    if (form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
        if (!checkPassword(form.pwd1.value)) {
            alert("The password you have entered is not valid!");
            form.pwd1.focus();
            return false;
        }
    } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        form.pwd1.focus();
        return false;
    }
    return true;
}
