let name = prompt("Dame tu nombre", "");

alert(`Tu nombre es ${name}`);

let confirmName = confirm("Seguro que es ese tu nombre");

if (confirmName == true) {
  alert("Bien por ti");
} else {
  alert("Me mentistes...");
}
