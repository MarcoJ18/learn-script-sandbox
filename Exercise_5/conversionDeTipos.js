//Conversion a string

let number = 5;
alert(typeof number);

number = String(number);
alert(typeof number);

//Conversion a numberico

let string = "123";
alert(typeof string);

string = Number(string);

alert(typeof string);

alert(Number("   123   "));
alert(Number("123n"));
alert(Number(true));
alert(Number(false));
alert(Number(undefined));
alert(Number(null));
alert(1 + "2"); //concatenacion

//Conversion a boolean

alert(Boolean(1));
alert(Boolean(0));

alert(Boolean("Hola"));
alert(Boolean(""));

alert(Boolean(null));
alert(Boolean(undefined));
alert(Boolean(NaN));

alert(Boolean("0"));
