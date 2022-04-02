// 1 ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?
/*
let a = 1,
  b = 1;

let c = ++a; // 2
let d = b++; // 1

alert(a);
alert(b);
alert(c);
alert(d);

*/
// 2 ¿Cuáles son los valores de ‘a’ y ‘x’ después del código a continuación?
/*
let a = 2;

let x = 1 + (a *= 2);

alert(a); // 4
alert(x); // 5
*/
// 3 ¿Cuáles son los resultados de estas expresiones?

alert("" + 1 + 0); // "10"
alert("" - 1 + 0); // -1
alert(true + false); // 1
alert(6 / "3"); // 2
alert("2" * "3"); // 6
alert(4 + 5 + "px"); // "9px"
alert("$" + 4 + 5); // "$45"
alert("4" - 2); // 2
alert("4px" - 2); // NaN
alert("  -9  " + 5); // "-9  5"
alert("  -9  " - 5); // -14
alert(null + 1); // 1
alert(undefined + 1); // NaN
alert(" \t \n" - 2); // -2

/* 4 Aquí hay un código que le pide al usuario dos números y muestra su suma.

Funciona incorrectamente. El resultado en el ejemplo a continuación es 12 (para valores de captura predeterminados).

¿Por qué? Arreglalo. El resultado debería ser 3.
*/

//Por que los convierte en string

let a = prompt("¿Primer número?", 1);
let b = prompt("¿Segundo número?", 2);

alert(+a + +b); //3

/*
let a = +prompt("¿Primer número?", 1);
let b = +prompt("¿Segundo número?", 2);

alert(a + b); //3
 */
