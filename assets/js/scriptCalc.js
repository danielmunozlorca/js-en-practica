//Obtengo cada uno de los "elementos" de la calculadora y los dejo en variables
let calculadora = document.getElementById("table-calc");
let uno = document.getElementById("numUno");
let dos = document.getElementById("numDos");
let tres = document.getElementById("numTres");
let cuatro = document.getElementById("numCuatro");
let cinco = document.getElementById("numCinco");
let seis = document.getElementById("numSeis");
let siete = document.getElementById("numSiete");
let ocho = document.getElementById("numOcho");
let nueve = document.getElementById("numNueve");
let cero = document.getElementById("numCero");
let pantalla = document.getElementById("pantallaID");
let mas = document.getElementById("signoMas");
let menos = document.getElementById("signoMenos");
let igual = document.getElementById("signoIgual");
let clear = document.getElementById("clear");


//Ocupo función eval para determinar el cálculo a aplicar y try catch para detectar errores
function calcular() {
    try {
        let resultado = eval(pantalla.value);
        if (resultado < 0) {
            resultado = 0;
        }

        pantalla.value = resultado;
    } catch (error) {
        pantalla.value = "Error";
    }
}

//Cuando hago click en la variable uno, agrega un 1 a la pantalla a través del evento click
uno.addEventListener("click", () => {
    pantalla.value += "1";
});

//Cuando hago click en la variable dos, agrega un 2 a la pantalla, y así sucesivamente
dos.addEventListener("click", () => {
    pantalla.value += "2";
});

tres.addEventListener("click", () => {
    pantalla.value += "3";
});

cuatro.addEventListener("click", () => {
    pantalla.value += "4";
});

cinco.addEventListener("click", () => {
    pantalla.value += "5";
});

seis.addEventListener("click", () => {
    pantalla.value += "6";
});

siete.addEventListener("click", () => {
    pantalla.value += "7";
});

ocho.addEventListener("click", () => {
    pantalla.value += "8";
});

nueve.addEventListener("click", () => {
    pantalla.value += "9";
});

cero.addEventListener("click", () => {
    pantalla.value += "0";
});

mas.addEventListener("click", () => {
    pantalla.value += "+";
});

menos.addEventListener("click", () => {
    pantalla.value += "-";
});

//cuando presiono el signo = se ejecuta la función de calcular donde esta eval y try catch
igual.addEventListener("click", calcular);

//al "boton" C de clear le asigno un vacío para que limpie la pantalla después de hacer los cálculos, a través del clic
clear.addEventListener("click", () => {
    pantalla.value = "";
});
