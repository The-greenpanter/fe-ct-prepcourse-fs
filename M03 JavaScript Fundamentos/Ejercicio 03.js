/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   var iguales = false;
   if(x == y){
      iguales = true;
   }
   return iguales;
}

function tienenMismaLongitud(str1, str2) {
   var iguales = false;
   if( str1.length == str2.length){
      iguales = true;
   }
   return iguales;
}

function menosQueNoventa(num) {
   var iguales = false;
   if (num < 90){
      iguales = true
   }
   return iguales
}

function mayorQueCincuenta(num) {
   var iguales = false;
   if (num > 50){
      iguales = true
   }
   return iguales
}

function esPar(num) {
   var iguales = false;
   if (num % 2 == 0) {
      iguales = true
   }
   return iguales
}

function esImpar(num) {
   var iguales = false;
   if (num % 2 != 0){
      iguales = true
   }
   return iguales
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
