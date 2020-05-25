// JavaScript source code
window.addEventListener('load', empezar);
// Dificultades que se pueden seleccionar
const dificultad = {
    facil: 7 ,
    intermedio: 5,
    dificil: 3
};
//Creacion de dificultad y cambio de dificultad
const dificEmpezada = dificultad.facil;
//creacion de variables 
let Tiempo = dificEmpezada;  
let Jugando; 
const todasPalabras = [ //Creamos todas las palabras que puedan salir 
    'gorra', 
    'rio', 
    'suerte', 
    'goma', 
    'sandwich', 
    'bruja', 
    'arena', 
    'roca', 
    'joker', 
    'developer', 
    'comidas',  
    'hero', 
    'javascript',
    'ojos', 
    'jugar', 
    'echo', 
    'eduardo', 
    'investigacion', 
    'amarillo',  
    'estrella', 
    'reir', 
    'vista', 
    'maestria', 
    'espacio', 
    'no'  
]; 
function Start() { 
    if (startTodasPalabras()) { //Funcion para que empiece el juego dandole al usuario 1 segundo mas de lo que esta en su dificiultad y haciendo que el valor jugando sea true para que las demas funciones sigan
        Jugando = true;  
        Tiempo = dificEmpezada + 1; 
        mostrarPalabras(todasPalabras);  
        document.getElementById('Escribir').value = ''; 
    } 
} 
function startTodasPalabras() { //Funcion para que empiecen a salir todas las palabras 
    if (document.getElementById('Escribir').value === document.getElementById('Palabra').innerHTML) { //igualamos las palabras del usuario con la palabra del html 
        document.getElementById('Alerta').innerHTML = 'Bien, sigue asi!'; 
        return true; //si sale bien te dice que bien, sigue asi sino te da falso hasta que lo haga bien 
    } else { 
        document.getElementById('Alerta').innerHTML = ''; 
        return false; 
    } 
} 
function mostrarPalabras(todasPalabras) { 
    const random = Math.floor(Math.random() * todasPalabras.length); //Hacemos que la compu agarre un numero random poniendole un limite 
    document.getElementById('Palabra').innerHTML = todasPalabras[random]; //Mostramos la palabra que salio  
} 
function temporizador() { //Tiempo que se muestra en 
    if (Tiempo > 0) { //Si tiempo es mayo a 0 este se resta uno y si el tiempo es igual a 0 este hace que la variable jugando se vuelva falsa para que deje de jugar 
        Tiempo--;  
    } else if (Tiempo === 0) { 
        Jugando = false; 
    } 
    document.getElementById('Tiempo').innerHTML = Tiempo; //Mostramos el tiempo en la pantalla 
} 
function estado() { //Funcion para poder checar el estado del juego viendo si la variable jugando es true y si el tiempo no es igual a 0 
    if (!Jugando && Tiempo === 0) { 
        document.getElementById('Alerta').innerHTML = 'Perdiste!!!'; 
    } 
} 
function empezar() { //Hacemos que el programa empiece haciendo que este empiece con los segundos u se aplique el evento de start 
    document.getElementById('Tiempo').innerHTML = dificEmpezada; 
    mostrarPalabras(todasPalabras); 
    document.getElementById('Escribir').addEventListener('input', Start); 
    setInterval(temporizador, 1000); 
    setInterval(estado, 50); 
} 