
//Otengo el formulario a través de su ID
let validacion = document.getElementById("formValidation");

//Se arega un escuchadr de eventos, en este caso del submit del formulario que está en el botón
validacion.addEventListener("submit", function (event) {
    //previene comportamiento por default (que haga cosas raras, distintas a las que queremos)
    event.preventDefault();
    //Llamo a la función depurar errores antes de realizar las validaciones
    depurarErrores();
    //Obtengo a través de la clase el valor ingresado por el usuario en los campos respectivos
    let textNombre = document.querySelector("#validationName").value;
    let textAsunto = document.querySelector("#validationSubject").value;
    let textMensaje = document.querySelector("#validationMessage").value;

    //aquí estoy llamando la función y le signo los valores que traje previamente del HTML (estos argumentos se convertirán en los parámetros nombre, asunto y mensaje dentro de la función)
    let resultado = validar(textNombre, textAsunto, textMensaje);

    if (resultado == true) {
        exito();
    };
});

//La función limpia el mensaje de error al campo respectivo en el HTML, por clase (asignando "" o sea vacío)
function depurarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".error-nombre").innerHTML = "";
    document.querySelector(".error-asunto").innerHTML = "";
    document.querySelector(".error-mensaje").innerHTML = "";
};

//defino la función para un resultado exitoso, junto a su mensaje y al estilo de ese texto
function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario enviado con éxito!!!";
    document.getElementById("exitoResultado").setAttribute('style', 'color: limegreen; font-style: italic; font-weight: bold;');
};

//defino la función que validará los campos con las regexp permitidas (solo letras en este caso)
function validar(nombre, asunto, mensaje) {
    let validacionExitosa = true;

    let validacionNombre = /^[a-zA-Z]+$/gim;

    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".error-nombre").innerHTML = "El nombre es requerido"
        document.getElementById("spanErrorNombre").setAttribute('style', 'color: red; font-style: italic;');
        validacionExitosa = false;
    };

    let validacionAsunto = /^[a-zA-Z]+$/gim;

    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".error-asunto").innerHTML = "El asunto es requerido"
        document.getElementById("spanErrorAsunto").setAttribute('style', 'color: red; font-style: italic;');
        validacionExitosa = false;
    };

    let validacionMensaje = /^[a-zA-Z]+$/gim;

    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".error-mensaje").innerHTML = "El mensaje es requerido"
        document.getElementById("spanErrorMensaje").setAttribute('style', 'color: red; font-style: italic;');
        validacionExitosa = false;
    };

    return validacionExitosa;

};