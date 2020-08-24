const ORDER_ASC_BY_PRECIO = "0 => 5000";
const ORDER_DESC_BY_PRECIO = "5000 <= 0";
const ORDER_DESC_BY_ID = "ID -> id";

var juegosArray = [];
var minPrice = undefined;
var maxPrice = undefined;

function sortPrecio(criterio, array) {
    let result = [];

    if (criterio === ORDER_ASC_BY_PRECIO) {
        result = array.sort(function (a, b) {
            if (a.precio < b.precio) { return -1; }
            if (a.precio > b.precio) { return 1; }
            return 0;
        });

    } else if (criterio === ORDER_DESC_BY_PRECIO) {
        result = array.sort(function (a, b) {
            if (a.precio > b.precio) { return -1; }
            if (a.precio < b.precio) { return 1; }
            return 0;
        });

    } else if (criterio === ORDER_DESC_BY_ID) {
        result = array.sort(function (a, b) {
            if (a.id > b.id) { return -1; }
            if (a.id < b.id) { return 1; }
            return 0;
        });
    }

    return result;
}

function showJuegos(array) {

    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let juego = array[i];

        if (((minPrice == undefined) || (minPrice != undefined && parseInt(juego.precio) >= minPrice))
            && ((maxPrice == undefined) || (maxPrice != undefined && parseInt(juego.precio) <= maxPrice))) {

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


            juegosArray = sortPrecio(ORDER_ASC_BY_PRECIO, juegosArray)


            showJuegos(juegosArray);
        }
    });
});

document.getElementById("sortPriceAsc").addEventListener("click", function () {
    juegosArray = sortPrecio(ORDER_ASC_BY_PRECIO, juegosArray)

    showJuegos(juegosArray);
});

document.getElementById("sortPriceDesc").addEventListener("click", function () {
    juegosArray = sortPrecio(ORDER_DESC_BY_PRECIO, juegosArray)

    showJuegos(juegosArray);
});

document.getElementById("sortIdDesc").addEventListener("click", function () {
    juegosArray = sortPrecio(ORDER_DESC_BY_ID, juegosArray)

    showJuegos(juegosArray);
});

document.getElementById("filtrar").addEventListener("click", function () {

    minPrice = document.getElementById("rango-min").value;
    maxPrice = document.getElementById("rango-max").value;

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
    minPrice = undefined;
    maxPrice = undefined;

    showJuegos(juegosArray);
});
