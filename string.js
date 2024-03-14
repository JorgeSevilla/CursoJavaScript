//Creación de strings
const comillasSimples = 'Comillas simples';
const comillasDobles = "Comillas dobles";
const templatesLiteral = `Templates literal`;

//Concatenación de strings
const direccion = 'Avenida siempre viva';
const ciudad = 'En algún lugar del mundo';
const ciudadYDireccon = 'La dirección completa es: ' + direccion + ' ' + ciudad;
console.log(ciudadYDireccon);

//Concatenación templates literal
const nombre = 'Jorge';
const pais = 'Brasil';
const concatenacionTemplatesLiteral = `Hola mi nombre es: ${nombre} y soy de ${pais}`;
console.log(concatenacionTemplatesLiteral);

//Concatenación con join()
const primaeraFrase = 'Primera frase';
const segundaFrase = 'Segunda frase';
const terceraFrase = 'Tercera frase';
const concatenandoConJoin = [primaeraFrase, segundaFrase, terceraFrase];
console.log(concatenandoConJoin.join(" $ "));

const letras = ['H', 'o', 'l', 'a'];
console.log(letras.join(''));

//Concatenación con concat()
//Concatenación de strings
const hobbie1 = 'Calistenia';
const hobbie2 = 'Tocar guitarra';
const hobbie3 = 'Programar';
const hobbies = 'Mis hobbies son: ' .concat(hobbie1, ', ', hobbie2, ', ', hobbie3);
console.log(hobbies);

//Concatenación de arrays
let frutas = ['Uvas', 'peras', 'manzanas'];
let vegetales = ['Zanahoria', 'brócoli', 'pepino'];

let ensalada = frutas.concat(vegetales);
console.log(ensalada);

//Caracteres de escape


//Escape alternativo
const caracteresEscapeAlternativo = "I'm Software Engineer";

//Barra invertida
const caracteresEscapeBarraInvertida = 'I\'m Software Engineer'

//Template literals
const caracteresEscapeTemplateLiterals = `I'm Software Engineer`;
//Escritura de string largos

const poema = 'Sol naciente asoma,\n' + 
              'Tiñe el cielo de naranja,\n' +
              'Despierta el nuevo día.';
console.log(poema);

const poema2 = 'Sol naciente asoma,\n\
Tiñe el cielo de naranja,\n\
Despierta el nuevo día.';
console.log(poema2);

const poema3 = `Sol naciente asoma,
Tiñe el cielo de naranja,
Despierta el nuevo día.`
console.log(poema3);