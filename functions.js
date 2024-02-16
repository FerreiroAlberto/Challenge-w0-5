// 1 Crea un generador de pirámides de asteriscos. El programa debe pedir al usuario la altura
//de la pirámide y mostrarla en la consola.

// 2 Crea una función que genere una contraseña aleatoria con letras mayúsculas, letras minúsculas
//y números. Por parámetros se indicara la longitud, con un minimum de 6 caracteres.

const getRandomLowerCase = () => {
  let abc = 'abcdefghijklmnñopqrstuvwxyz';
  let abcArray = abc.split('');
  let randomPosition = Math.floor(Math.random() * 27);
  let randomLowerCase = abcArray[randomPosition];
  return randomLowerCase;
};
const getRandomUpperCase = () => {
  let lower = getRandomLowerCase();
  let randomUpperCase = lower.toUpperCase();
  return randomUpperCase;
};
const getRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
};

export function getRandomPassword(userChoice) {
  let password = [];
  if (userChoice < 6) {
    console.log('La contraseña debe tener un mínimo de 6 caracteres');
  } else {
    for (let i = 0; i < userChoice; i++) {
      let randomType = Math.floor(Math.random() * 3);
      if (randomType === 0) {
        let characterLower = getRandomLowerCase();
        password.push(characterLower);
      } else if (randomType === 1) {
        let characterUpper = getRandomUpperCase();
        password.push(characterUpper);
      } else {
        let characterNum = getRandomNumber();
        password.push(characterNum);
      }
    }
  }
  return password.join('');
}

//3 Crea una función que filtre un array de nombres y devuelva solo los nombres con menos
//de cierta longitud.

let names = [
  'Ross',
  'Rachel',
  'Phoebe',
  'Joey',
  'Monica',
  'Chandler',
  'Bill',
  'Mark',
];

export function getShorterNames(namesArray, maxLength) {
  let people = namesArray.length;
  let longNames = [];
  for (let i = 0; i < people; i++) {
    let elementLength = namesArray[i].length;
    if (elementLength < maxLength) {
      longNames.push(namesArray[i]);
    }
  }
  return longNames;
}

// 4 Crea una función que sume todos los números de un array y devuelva también la media,
// mediana, moda y la suma total.

let numArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

export function getArrayData(inputArray) {
  let sum = 0;
  for (const element of inputArray) {
    sum = sum + element;
  }
  let average = (sum / inputArray.length).toFixed(2);
  let median = [];
  let sortedArray = inputArray.slice().sort((a, b) => a - b);
  if (inputArray.length % 2 !== 0) {
    let medianIndex = Math.floor(sortedArray.length / 2);
    median.push(sortedArray[medianIndex]);
  } else {
    let medianIndex1 = sortedArray.length / 2 - 1;
    let medianIndex2 = sortedArray.length / 2;
    median.push((sortedArray[medianIndex1] + sortedArray[medianIndex2]) / 2);
  }
  let result = { sum: sum, average: average, median: median };

  console.log(sum, average, median);
}

//5 Crea una función que cuente la cantidad de palabras en una frase.

export function countWords(userInput) {
  let inputArray = userInput.split(' ');
  let wordCount = inputArray.length;
  return wordCount;
}

//6 Crea una función que ordene un array de nombres alfabéticamente.

export function sortNames(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i]
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
  return inputArray.sort();
}

// 7 Generador de números pares e impares: Escribe una función que tome un número como argumento y genere dos arrays,
//uno con los números pares hasta ese número y otro con los números impares hasta ese número.

export function getOddsAndEvens(userNumber) {
  let odds = [];
  let evens = [];
  for (let i = 0; i < userNumber; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  let result = {
    odds: odds,
    evens: evens,
  };
  return result;
}

console.log(getOddsAndEvens(35));

//8 Crea una función que reciba un texto en kebab-case y devuelva el texto escrito en camelCase.
//La función debe realizar las siguientes comprobaciones sobre el texto recibido:

//Si tiene alguna mayúscula, debe devolver "The text contains capital letters"
//Si tiene algún guion bajo, debe devolver "The text contains underscores"
//Si el texto está vacío, debe devolver "You must provide some text"
//Desafíos adicionales

export function kebabToCamel(inputText) {
  let unKebab = inputText.split('-');
  for (let i = 0; i < unKebab.length; i++) {}
}
