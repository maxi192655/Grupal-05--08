var juegosArray = [];

var minPrice = undefined;
var maxPrice = undefined;

function showJuegos(array) {

    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let juego = array[i];

        if (((minPrice == undefined) || (minPrice != undefined && JSON.parse(juego.precio) >= minPrice))
            && ((maxPrice == undefined) || (maxPrice != undefined && JSON.parse(juego.precio) <= maxPrice))) {

            contenido += 'Nombre: ' + juego.name + '<br>'
            contenido += 'pegi: ' + juego.pegi + '<br>'
            contenido += 'precio: ' + juego.precio + '<br>'
            contenido += '<img src="' + juego.imgSrc + '" class="img-thumbnail"/>  <br><br>'
            contenido += '<br><hr><br>';

        }



        document.getElementById("Listado").innerHTML = contenido;
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

    if ((maxPrice != undefined) && (maxPrice != "") && (parseInt(maxPrice)) >= 0) {
        maxPrice = parseInt(maxPrice);
    }
    else {
        maxPrice = undefined
    }

    showJuegos(juegosArray)
});

document.getElementById("limpiar").addEventListener("click", function () {
    document.getElementById("rango-min").value = "";
    document.getElementById("rango-max").value = "";
    minAlt = undefined;
    maxAlt = undefined;

    showJuegos(juegosArray);
});
