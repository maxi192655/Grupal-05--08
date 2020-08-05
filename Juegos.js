var juegosArray = [];

function showJuego(array) {

    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let juego = array[i];
        contenido += 'id' + juego.id + '<br>'
        contenido += 'name' + juego.name + '<br>'
        contenido += 'pegi' + juego.pegi + '<br>'
        contenido += 'precio' + juego.precio + '<br>'

        document.getElementById("lista").innerHTML = contenido;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(LIST_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showJuegos(juegosArray);
        }
    });
});