// OR ||
alert(true || false);
alert(1 || 0);
alert(null || 0 || 1);

alert(false || false || false || "Anonymous");

true || alert("not printed");
false || alert("printed");

// AND &&

alert(1 && 2 && null && 3);
alert(1 && 2 && 3);

// !(NOT)

alert(!true); // false
alert(!0); // true

//Double !! use for converting to boolean

alert(!!"non-empty string");

// or

alert(Boolean("non-empty string"));
