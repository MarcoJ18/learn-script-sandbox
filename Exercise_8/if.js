// 1 Se mostrará el alert? [NO]
if ("0") {
  alert("Hello");
}

/* 2 Usando el constructor if..else, escribe el código que pregunta: ‘¿Cuál es el nombre “oficial” de JavaScript?’
Si el visitante escribe “ECMAScript”, entonces muestra: “¡Correcto!”, de lo contrario muestra: “¿No lo sabes? ¡ECMAScript!”
*/

let nameOffice = prompt("What's the name oficial of JavaScript ?", "");

if (nameOffice == "ECMAScript") {
  alert("Correcto");
} else {
  alert("No sabes? ECMAScript");
}

/* 3 Usando el constructor if..else, escribe un código que obtenga a través de un prompt un número y entonces muestre en un alert:

1, si el valor es mayor que cero,
-1, si es menor que cero,
0, si es igual a cero.
En la tarea asumimos que siempre el usuario introduce un número.
*/

let getNumberUser = prompt("Dame un numero :)", 0);

if (getNumberUser > 0) {
  alert(1);
} else if (getNumberUser < 0) {
  alert(-1);
} else {
  alert(0);
}

// 4 Reescriba esta condición if usando el operador ternario '?':
/*
let result;

if (a + b < 4) {
  result = 'Debajo';
} else {
  result = 'Encima';
}
*/

let result = a + b < 4 ? "Debajo" : "Encima";

/* 5 Reescriba el if..else utilizando operadores ternarios múltiples'?'.
Para legibilidad, es recomendad dividirlo en múltiples lineas de código.
*/
/* 
let message;

if (login == 'Empleado') {
  message = 'Hola';
} else if (login == 'Director') {
  message = 'Felicidades';
} else if (login == '') {
  message = 'Sin sesión';
} else {
  message = '';
}*/

let message =
  login == "Empleado"
    ? "Hola"
    : login == "Director"
    ? "Felicidades"
    : login == ""
    ? "Sin sesión"
    : "";
