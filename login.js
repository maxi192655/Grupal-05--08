var usersArray = [];

function validateUser(array, userIn, passwordIn) {
    for (let i = 0; i < array.lenght; i++) {
        let usuario = array[i];
        if (usuario.email == userIn && usuario.password == passwordIn) {
            return true;
        }
    }

    return false
}



document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("submitStemx").addEventListener("click", function (e) {
        let inputEmail = document.getElementById("inputEmail");
        let inputPassword = document.getElementById("inputPassword");
        let camposCompletos = true;

        if (inputEmail.value === '') {
            inputEmail.classList.add("invalid");
            camposCompletos = false;
        }
        if (inputPassword.value === '') {
            inputEmail.classList.add("invalid")
            camposCompletos = false
        }
        if (camposCompletos) {
            getJSONData(juegos_URL).then(function (resultObj) {
                if (resultObj.status === "ok") {
                    usersArray = resultObj.data;

                    if (validateUser(usersArray, inputEmail.value, inputPassword.value)) {
                        window.location = 'index.html';
                    } else {
                        alert("Usuario o contraseña incorrectas!")
                    }
                }
            });
        }else{
            alert("Debe ingresar los datos!")
        }
    })
});
