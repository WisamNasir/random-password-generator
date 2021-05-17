function generatePassword() {
    var chars = "0123456789abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!£$%&/()=?^<>{}[]";
    var passwordText = "";
    var passwordLength = document.getElementById("pw-length").value;

    if (passwordLength < 8) {
        document.getElementById("pw-length").value = "8";
        passwordLength = "8";
    }
    if (passwordLength > 25) {
        document.getElementById("pw-length").value = "25";
        passwordLength = "25";
    }
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        passwordText += chars.substring(randomNumber, randomNumber+1);
    }

    document.getElementById("pw-generated").value = passwordText;
}

function sliderValue() {
    var slider = document.getElementById("pw-length").value;
    document.getElementById("value").innerHTML = slider;
}



