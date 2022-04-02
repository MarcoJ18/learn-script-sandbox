alert("1" + 2);
alert(2 + "1");
alert(2 + 2 + "1");
alert("1" + 2 + 2);

// +  Es el unico que concatena

alert(2 - "1");
alert("6" / "2");

// + Los convierte a numero

alert(+true);
alert(+"");

let test = "123";
alert(typeof test);

alert(typeof +test);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a);
alert(c);

let n = 2;

n *= 3 + 5;

alert(n);

//Incremento |  Decremento

let counter = 0;
counter++;
++counter;
alert(counter);

counter = 0;
alert(++counter);

counter = 0;
alert(counter++);

//Mejor forma de usarlo

counter = 1;
alert(2 * counter);
counter++;

/*Operadores a nivel de bit

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )


https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Bitwise_Operators#Bitwise_AND
*/

//Coma

let coma = (1 + 2, 3 + 4);

alert(coma);
