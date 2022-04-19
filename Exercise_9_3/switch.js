/*
switch(x) {
  case 'valor1':  // if (x === 'valor1')
    ...
    [break]

  case 'valor2':  // if (x === 'valor2')
    ...
    [break]

  default:
    ...
    [break]
} 
*/

let arg = prompt("Ingrese un valor");
switch (arg) {
  case "0":
  case "1":
    alert("Uno o cero");
    break;

  case "2":
    alert("Dos");
    break;

  case 3:
    alert("¡Nunca ejecuta!");
    break;
  default:
    alert("Un valor desconocido");
}
