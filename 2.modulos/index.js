/*Requerimos los numeros que vayamos a utilizar*/

/*Require => Requerir*/ 
/*Requerimos la funcion suma.js, resta.js, multiplicacion.js y division.js */
const funcionSuma = require('./suma.js');
const funcionSumaDos = require('./suma.js');
const funcionResta = require('./resta.js');
const funcionMultiplicacion = require('./multiplicacion.js');
const funcionDivision = require('./division.js');

/*Ejecutamos la funcion suma, resta, multiplicacion y division de sus correspondientes archivos.js*/
console.log(funcionSuma.suma(2,2));
console.log(funcionSuma.sumaDos(4,2));
console.log(funcionResta.resta(3,2));
console.log(funcionMultiplicacion.multiplicacion(2,7));
console.log(funcionDivision.division(15,5));