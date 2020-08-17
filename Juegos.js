var juegosArray = [];

function showJuegos(array) {

    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let juego = array[i];

        contenido += 'id' + juego.id + '<br>'
        contenido += 'name' + juego.name + '<br>'
        contenido += 'pegi' + juego.pegi + '<br>'
        contenido += 'precio' + juego.precio + '<br>'
        contenido += 'img' + juego.imgSrc + '<br>'
        contenido += '<br><hr><br>';

        document.getElementById("lista").innerHTML = contenido;
    }
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(juegos_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            juegosArray = resultObj.data;
            showJuegos(juegosArray);
        }
    });
});