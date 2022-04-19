// 1 Escribe el código utilizando if..else que corresponda al siguiente switch:

/**
 switch (navegador) {
  case 'Edge':
    alert( "¡Tienes Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Esta bien, soportamos estos navegadores también' );
    break;

  default:
    alert( '¡Esperamos que esta página se vea bien!' );
}
 */
/*
if (navegador == 'Edge'){
  alert("¡Tienes Edge!");
}else if(navegador == 'Chrome' || navegador == 'Firefox' || navegador == 'Safari' || navegador == 'Opera'){
  alert('Esta bien, soportamos estos navegadores también');
}else{
  alert("¡Esperamos que esta página se vea bien!");
}
*/

// 2 Reescribe el código debajo utilizando solo un argumento switch:

/*
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/
/**
let a = +prompt("a?", '');

switch (a){
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
  default:
    alert("No esta bien");
}
 */
