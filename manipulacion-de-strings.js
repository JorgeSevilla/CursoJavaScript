//Primitivos
const stringPrimitivo = 'String primitivo';
console.log(typeof stringPrimitivo);
const otroStringPrimitivo = String('Otra manera de declara strings primitivos');
console.log(typeof otroStringPrimitivo);

//Objetos
const stringObjeto = new String('String objeto');
console.log(typeof stringObjeto);

//Acceder a caractéres
const accedeACaracteres = 'Hola como estás?';
console.log(accedeACaracteres[1]);
console.log(accedeACaracteres.charAt(2));
console.log(accedeACaracteres.indexOf('o'));
console.log(accedeACaracteres.indexOf('Cómo'));
console.log(accedeACaracteres.lastIndexOf('á'));
console.log(accedeACaracteres.slice(3, 13));
console.log(accedeACaracteres.length);
console.log(accedeACaracteres.toLocaleLowerCase());
console.log(accedeACaracteres.toLocaleUpperCase());
console.log(accedeACaracteres.split(' '));
console.log(accedeACaracteres.split(' ')[1]);

const caracteresConSplit = accedeACaracteres.split(' ');
console.log(caracteresConSplit);
console.log(caracteresConSplit[0]);

const caracteresConEspacios = ' Hola Mundo ';
const caracteresSinEspacios = caracteresConEspacios.trim();
console.log(caracteresConEspacios.trim());
console.log(caracteresSinEspacios);

const caractersConReplace = 'Hola Mundo!';
const caractersConReplace2 = caractersConReplace.replace('Hola', 'Uno');
console.log(caractersConReplace2);
console.log(caractersConReplace.replace('Mundo', 'Dos'));
