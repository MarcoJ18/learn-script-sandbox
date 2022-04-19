/*
function name(parameter1, parameter2, ... parameterN) {
  ...body...
}

name()
name()
name()

//Variables dentro de funcion solo visibles para esa funcion
*/

//Variables externas
/*
let userName = 'Juan';

function showMessage() {
  let message = 'Hola, ' + userName;
  alert(message);
}

showMessage();
*/

/*
let userName = 'Juan';

function showMessage() {
  userName = "Bob"; // (1) Cambió la variable externa

  let message = 'Hola, ' + userName;
  alert(message);
}

alert( userName ); // Juan antes de llamar la función

showMessage();

alert( userName ); // Bob, el valor fué modificado por la función
*/

/*Parametros
function showMessage(from, text) { [parametros declarados]

  from = '*' + from + '*'; // hace que "from" se vea mejor

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hola"); // *Ann*: Hola [argumento pasado]

// el valor de "from" es el mismo, la función modificó una copia local
alert( from ); // Ann


*/

//Valores predeterminados
/*
function showMessage(from, text) {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: undefined
*/
/*
function showMessage(from, text = "sin texto") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: sin texto
*/
/*
Tambien posible:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() solo se ejecuta si text no fue asignado
  // su resultado se convierte en el valor de texto
}
*/

// Parámetros predeterminados alternativos
/*
function showMessage(text) {
  // ...

  if (text === undefined) { // si falta el parámetro
    text = 'mensaje vacío';
  }

  alert(text);
}

showMessage(); // mensaje vacío
*/
/* 
function showMessage(text) {
  // si text es indefinida o falsa, la establece a 'vacío'
  text = text || 'vacío';
  ...
}
*/
/*
function showCount(count) {
  // si count es undefined o null, muestra "desconocido"
  alert(count ?? "desconocido");
}

showCount(0); // 0
showCount(null); // desconocido
showCount(); // desconocido 
*/


//Devolviendo un valor
/* 
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
*/
/*
function doNothing() { /* empty */ }
/*
alert( doNothing() === undefined ); // true 
*/
/*
function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true 
*/


//Nomenclatura de funciones

/*
Entonces su nombre suele ser un verbo

Ejemplos:
showMessage(..)     // muestra un mensaje
getAge(..)          // devuelve la edad (la obtiene de alguna manera)
calcSum(..)         // calcula una suma y devuelve el resultado
createForm(..)      // crea un formulario (y usualmente lo devuelve)
checkPermission(..) // revisa permisos, y devuelve true/false


Mal:
getAge – está mal que muestre una alert con la edad (solo debe obtenerla).
createForm – está mal que modifique el documento agregándole el form (solo debe crearlo y devolverlo).
checkPermission – está mal que muestre el mensaje acceso otorgado/denegado(solo debe realizar la verificación y devolver el resultado).

*/


//Funciones == Comentarios

/*
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
*/