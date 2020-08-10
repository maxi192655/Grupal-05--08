var userArray = [];

function validateUser(array, userIn, passwordIn) {
    for (let i = 0; i < array.lenght; i++) {
        let usuario = array[i];
        if (usuario.email == userIn && usuario.password == passwordIn){
            return true;
        }
    }

    return false
}