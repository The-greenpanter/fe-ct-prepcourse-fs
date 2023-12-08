/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   let cuadrado = num**2;
   return cuadrado;
}

function elevarAlCubo(num) {
   let cuadrado = num**3;
   return cuadrado;
}

function elevar(num, exponent) {
   let cuadrado = num**exponent;
   return cuadrado;
}

function redondearNumero(num) {
   var resultado = Math.round(num);
   return resultado;
}

function redondearHaciaArriba(num) {
   var resultado = Math.ceil(num);
   return resultado;
}

function numeroRandom() {
   var resultado = Math.random();
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
