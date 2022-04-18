// loop

// While when the contidion is truthy then executed
/*
let i = 0;
while (i < 3) { 
  alert( i );
  i++;
}
*/

// do | because you can execute once the loop becuase firts the do or body and after the condition
/*
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
*/

//for
/*
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}


begin	let i = 0	Executes once upon entering the loop.
condition	i < 3	Checked before every loop iteration. If false, the loop stops.
body	alert(i)	Runs again and again while the condition is truthy.
step	i++	Executes after the body on each iteration.

Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...


let i = 0
if (i < 3) { alert(i); i++ }
if (i < 3) { alert(i); i++ }
if (i < 3) { alert(i); i++ }


let i = 0;

for (; i < 3;) {
  alert( i++ );
}


for (;;) {
  // repeats without limits
}

*/

//Break
/*
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

*/

//continue
/*
for (let i = 0; i < 10; i++) {

  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
*/
/* Break in for in for


outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
alert('Done!');

*/
