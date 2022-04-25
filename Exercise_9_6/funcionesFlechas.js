//
// let func = (arg1, arg2, ..., argN) => expression;

//Con dos argumentos

let sum = (a, b) => a + b;

/* Esta función de flecha es una forma más corta de:

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1, 2)); // 3

// Un argumento

let double = (n) => n * 2;
// Más o menos lo mismo que: let double = function(n) { return n * 2 }

alert(double(3)); // 6

// Sin parametros

let sayHi = () => alert("¡Hola!");

sayHi();

// Funciones de flecha multilínea

let sum = (a, b) => {
  // la llave abre una función multilínea
  let result = a + b;
  return result; // si usamos llaves, entonces necesitamos un "return" explícito
};

alert(sum(1, 2)); // 3
