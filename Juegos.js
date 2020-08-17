var juegosArray = [];

var minPrice = undefined;
var maxPrice = undefined;

function showJuegos(array) {

    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let juego = array[i];

        if (((minPrice == undefined) || (minPrice != undefined && parseInt(juego.precio) >= minPrice)) &&
            ((maxPrice == undefined) || (maxPrice != undefined && parseInt(juego.precio) <= maxPrice))) {

            contenido += 'Nombre: ' + juego.id + '<br>'
            contenido += 'name: ' + juego.name + '<br>'
            contenido += 'pegi: ' + juego.pegi + '<br>'
            contenido += 'precio: ' + juego.precio 
            contenido += + juego.currency + '<br>' 
            contenido += '<img src="' + juego.imgSrc + '" class="img-thumbnail"/>  <br><br>'
            contenido += '<br><hr><br>';

        }



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

document.getElementById("filtrar").addEventListener("click", function () {

    minPag = document.getElementById("rango-min").value;
    maxPag = document.getElementById("rango-max").value;

    if ((minPrice != undefined) && (minPrice != "") && (parseInt(minPrice)) >= 0) {
        minPrice = parseInt(minPrice);
    }
    else {
        minPrice = undefined;
    }

    if ((maxPrice != undefined) && (minPrice != "") && (parseInt(maxPrice)) >= 0) {
        maxPrice = parseInt(maxPrice);
    }
    else{
        maxPrice = undefined
    }

    showJuegos(juegosArray)
})