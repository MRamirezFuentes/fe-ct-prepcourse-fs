/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var arregloDeArreglos = [];

  for (const propiedad in objeto) {
    var arregloPadre = [propiedad, objeto[propiedad]];
    arregloDeArreglos.push(arregloPadre);
  }
  return arregloDeArreglos;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  objeto = {};
  var arreglo = string.split("").sort();
  contador = 1;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] != arreglo[i + 1]) {
      objeto[arreglo[i]] = contador;
      contador = 1;
    } else {
      contador = contador + 1;
    }
  }
  return objeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var arregloMayusculas = [];
  var arregloMinusculas = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      arregloMayusculas.push(string[i]);
    } else {
      arregloMinusculas.push(string[i]);
    }
  }
  var nuevoString = arregloMayusculas.join("") + arregloMinusculas.join("");
  console.log(nuevoString);
  return nuevoString;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var nuevaFrase = [];

  var contador = 0;

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] != " " && i != frase.length - 1) {
      contador = contador + 1;
    } else if (frase[i] === " ") {
      for (let pos = i - 1; pos >= i - contador; pos--) {
        nuevaFrase.push(frase[pos]);
      }
      nuevaFrase.push(frase[i]);
      contador = 0;
    } else {
      for (let pos = i; pos >= i - contador; pos--) {
        nuevaFrase.push(frase[pos]);
      }
    }
  }
  console.log(nuevaFrase.join(""));
  return nuevaFrase.join("");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  var numAString = numero.toString(); // declaramos variable string, convertimos variable numero a string, separamos, y
  var numAStringReversa = numAString.split("").reverse().join(""); // declaramos variable  reversa, separamos, revertimos, unimos a string
  if (numAString === numAStringReversa) {
    return "Es capicua";
  } else return "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  var nuevoArregloSinabc = [];
  var stringArreglo = string.split("");

  for (let i = 0; i < stringArreglo.length; i++) {
    if (
      stringArreglo[i] != "a" &&
      stringArreglo[i] != "b" &&
      stringArreglo[i] != "c"
    ) {
      nuevoArregloSinabc.push(stringArreglo[i]);
    }
  }
  console.log(nuevoArregloSinabc.join(""));
  return nuevoArregloSinabc.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var auxString1 = "";

  for (let i = 0; i < arrayOfStrings.length; i++) {
    for (let j = 0; j < arrayOfStrings.length - 1; j++) {
      if (arrayOfStrings[j].length > arrayOfStrings[j + 1].length) {
        auxString1 = arrayOfStrings[j];
        arrayOfStrings[j] = arrayOfStrings[j + 1];
        arrayOfStrings[j + 1] = auxString1;
      }
    }
  }
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var nuevoArreglo = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      nuevoArreglo.push(array1[i]);
    }
  }
  console.log(nuevoArreglo);
  return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
