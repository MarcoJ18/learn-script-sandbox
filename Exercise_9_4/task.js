/*
1 La siguiente función devuelve true si el parámetro age es mayor a 18.

De lo contrario, solicita una confirmación y devuelve su resultado:
*/

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('¿Tus padres te permitieron?');
  }
}

*/

/*
¿Funcionará la función de manera diferente si se borra else? 
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('¿Tus padres te permitieron?');
}

¿Hay alguna diferencia en el comportamiento de estas dos variantes?

Ninguna diferencia.
*/
/*
2 La siguiente función devuelve true si el parámetro age es mayor que 18.

De lo contrario, solicita una confirmación y devuelve su resultado.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('¿Tienes permiso de tus padres?');
  }
}

Reescríbela para realizar lo mismo, pero sin if, en una sola linea.

Haz dos variantes de checkAge:

Usando un operador de signo de interrogación ?
Usando OR ||

*/
/*
function checkAge(age) {
  return (age < 18) ? true : confirm('¿Tienes permiso de tus padres?');
}

function checkAge(age) {
  return (age < 18) || confirm('¿Tienes permiso de tus padres?');
}

*/
/*
3 Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.

Por ejemplo:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1


*/

/*
function min(a,b){
  if(a < b){
    return a;
   }
    return b;
}
alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));

*/


/*
4 Escriba la función pow(x,n) que devuelva x como potencia de n. O, en otras palabras, multiplique x por si mismo n veces y devuelva el resultado.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Cree una página web que solicite x y n, y luego muestre el resultado de pow(x,n).

PD: En esta tarea, la función solo debe admitir valores naturales de n: enteros desde 1.

*/

/*
function pow(x,n){
    return x ** n;
}

let x = prompt("Da un numero", 0);
let n = prompt("Eleva el numero", 0);

alert(pow(x, n));

*/
/*
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Potencia ${n} no soportada,
    use un entero mayor a 0`);
} else {
  alert( pow(x, n) );
}
*/





