

const botonRojo = document.getElementById("cuadradoRojo");
botonRojo.addEventListener('click', pintarRojo);

const botonNaranjo = document.getElementById("cuadradoNaranjo");
botonNaranjo.addEventListener('click', pintarNaranjo);

const botonAmarillo = document.getElementById("cuadradoAmarillo");
botonAmarillo.addEventListener('click', pintarAmarillo);

const botonVerde = document.getElementById("cuadradoVerde");
botonVerde.addEventListener('click', pintarVerde);

const botonCeleste = document.getElementById("cuadradoCeleste");
botonCeleste.addEventListener('click', pintarCeleste);

const botonRosado = document.getElementById("cuadradoRosado");
botonRosado.addEventListener('click', pintarRosado);

const botonReset = document.getElementById("botonReset");
botonReset.addEventListener('click', reset);

function pintarRojo(){
    document.getElementById("cuadradoBlanco").setAttribute('style', 'background-color: #f85d5d')
}

function pintarNaranjo(){
    document.getElementById("cuadradoBlanco").setAttribute('style', 'background-color: #ff9811')
}

function pintarAmarillo(){
    document.getElementById("cuadradoBlanco").setAttribute('style', 'background-color: #f9fc36')
}

function pintarVerde(){
    document.getElementById("cuadradoBlanco").setAttribute('style', 'background-color: #04ff0c')
}

function pintarCeleste(){
    document.getElementById("cuadradoBlanco").setAttribute('style', 'background-color: #16fffb')
}

function pintarRosado(){
    document.getElementById("cuadradoBlanco").setAttribute('style', 'background-color: #ff02e6')
}

function reset(){
    document.getElementById("cuadradoBlanco").setAttribute('style', 'background-color: #ffffff')
}