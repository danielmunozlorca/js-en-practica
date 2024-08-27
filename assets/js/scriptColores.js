
let cuadradoGrande = document.getElementById("cuadradoGrande");
let rojo = document.getElementById("cuadradoRojo");
let naranjo = document.getElementById("cuadradoNaranjo");
let amarillo = document.getElementById("cuadradoAmarillo");
let verde = document.getElementById("cuadradoVerde");
let calipso = document.getElementById("cuadradoCalipso");
let magenta = document.getElementById("cuadradoMagenta");


//con esta función cambio el color del cuadradoGrande
function cambiarColor(newColor) {
    document.getElementById("cuadradoGrande").style.backgroundColor = newColor;
}

//luego con el escuchador de click, cambio el color invocando la función y definiendo el color para cada caso
rojo.addEventListener('click', () => {
    cambiarColor('#e53e3e');
});

naranjo.addEventListener('click', () => {
    cambiarColor('#dd6b20');
});

amarillo.addEventListener('click', () => {
    cambiarColor('#faf089');
});

verde.addEventListener('click', () => {
    cambiarColor('#48bb78');
});

calipso.addEventListener('click', () => {
    cambiarColor('#81e6d9');
});

magenta.addEventListener('click', () => {
    cambiarColor('#d53f8c');
});
