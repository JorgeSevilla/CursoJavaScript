//Paso por referencia - tipo de dato complejo

let frutas = {
    fruta1: 'naranja'
}

let vegetales = frutas;
vegetales.fruta1 = 'brocoli';
console.log(frutas);

let ropa = {
    ropa1: 'blusa'
}

ropa.ropa2 = 'pantalon';

console.log(ropa);