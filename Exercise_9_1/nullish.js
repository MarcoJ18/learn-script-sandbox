// ??

// similar to  [result = (a !== null && a !== undefined) ? a : b;]

//Not defined
/*let user;

alert(user ?? "Anonymous");
*/
//Defined
/*
let user = "John";

alert(user ?? "Anonymous");
*/

//Example
let firstName = null;
let lastName = null;
let nickName = "null";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous");

// ?? AND ||
/*
|| returns the first truthy value.
?? returns the first defined value.
*/
/* 
EXAMPLE

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0


*/
