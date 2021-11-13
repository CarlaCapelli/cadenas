let nombreApellido: string = "Carla Capelli";
let inicialNombre: string = nombreApellido[0];
let inicialApellido: string = nombreApellido[6];
console.log(
  "nombre y apellido",
  nombreApellido,
  "iniciales",
  inicialNombre,
  inicialApellido
);
let cadena: string = "ABCDE";
console.log(cadena.length);

let caden: string = "tengo que hacer muchos ejercicios";
console.log(caden.indexOf("hacer"));

let cad: string = "Tengo que hacer y hacer y hacer muchos ejercicios";
console.log(cad.lastIndexOf("hacer"));
console.log(cad.substring(10, 15));
console.log(cad.substr(10, 15));
console.log(cad.toLocaleUpperCase());
console.log(cad.toLocaleLowerCase());

let numero: number = 2021;
console.log(typeof numero.toString());

let num: string = "2021";
console.log(parseInt(num));

let n: string = "3.14159";
console.log(parseFloat(n));
