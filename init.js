const juegos_URL = "https://maxi192655.github.io/Grupal-05--08/Juegos.json";
const USUARIOS_URL ="https://danielk2020.github.io/biblioteca/usuarios.json"

var getJSONData = function (url) {
    var result = {};
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function (response) {
            result.status = 'ok';
            result.data = response;
            return result;
        })
        .catch(function (error) {
            result.status = 'error';
            result.data = error;
            return result;
        });
}

document.addEventListener("DOMContentLoaded", function(e) {
    let userLogged = localStorage.getItem('User-Logged');
    let infoUser = document.getElementById("info-user");
    let user = document.getElementById("user");

    if(userLogged){
        userLogged = JSON.parse(userLogged);
        user.innerText = user.innerText + 'Usuario logueado: ' + userLogged.email;
        infoUser.style = "display: inline-block";
    }

    document.getElementById("salir").addEventListener("click", function(e){
        localStorage.removeItem('User-logged');
        window.location = 'login.html';
    })
})