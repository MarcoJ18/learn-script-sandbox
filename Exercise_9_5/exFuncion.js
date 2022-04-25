// Expresiones de función

let sayHi = function() {
  alert( "Hola" );
};//punto y coma porque [let hola = 5;]

//funcion = valor

//Funcion es un valor
function sayHi() {   // (1) crear
  alert( "Hola" );
}

let func = sayHi;    // (2) copiar

func(); // Hola          // (3) ejecuta la copia (funciona)!
sayHi(); // Hola         // esto también funciona (por qué no lo haría)


//Funciones Callback

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Estás de acuerdo." );
}

function showCancel() {
  alert( "Cancelaste la ejecución." );
}

// uso: las funciones showOk, showCancel son pasadas como argumentos de ask
ask("Estás de acuerdo?", showOk, showCancel);


//////

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Estás de acuerdo?",
  function() { alert("Estás de acuerdo"); },
  function() { alert("Cancelaste la ejecución."); }
);


// Expresión de Función vs Declaración de Función


sayHi("John"); // Hola, John

function sayHi(name) {
  alert( `Hola, ${name}` );
}


//

sayHi("John"); // error!

let sayHi = function(name) {  // (*) ya no hay magia
  alert( `Hola, ${name}` );
};







