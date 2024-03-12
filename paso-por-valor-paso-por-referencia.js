/*
10 tipos de datos 
Primitivos -> Inmutables -> se pasan por valor
Complejos -> Mutables -> se pasan por referencia
*/

//Paso por valor
let x = 1;
let y = "Hola";
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c);

a = 12;
b = "Jorge";
c = undefined;

//Paso por referencia -> se llega a la posición en memoria luego hacemos esa modificación del objeto
let frutas = ['peras'];
frutas.push('uvas');
console.log(frutas);

let panes = ['francés'];
let copiaPanes = panes;
panes.push('de trigo');
console.log(panes, copiaPanes);
