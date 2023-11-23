var ten = document.getElementById("tenInput");
ten.addEventListener('blur', function(){
    if (ten.value.length == 0) {
        alert("Cannot left blank ")
    }
})

var noi = document.getElementById("noiInput");
noi.addEventListener('blur', function(){
    if (noi.value.length == 0) {
        alert("Cannot left blank ")
    }
})


var mail = document.getElementById("mailInput");
mail.addEventListener('blur', function(){
    if (mail.value.length == 0) {
        alert("Cannot left blank ")
    }
})

var pass = document.getElementById("passInput");
pass.addEventListener('blur', function() {
    if (pass.value.length == 0) {
        alert("Cannot left blank ")
    } else if (isNaN(pass.value) == true) {
        alert("Password must be a number")
    }
})



