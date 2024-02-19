export function pyramid(height) {
  const blanks = ' ';
  const asterisks = '*';
  for (let i = 0; i <= height; i++) {
    console.log(
      `${blanks.repeat(height - i)}${asterisks.repeat(
        1 + i * 2
      )}${blanks.repeat(height - i)}`
    );
  }
  return blanks;
}
// Hay que quitar el console.log y no retornar el blank.

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
    let optionsArray = [];
    while (
      !optionsArray.includes(0) ||
      !optionsArray.includes(1) ||
      !optionsArray.includes(2)
    ) {
      optionsArray = [];
      for (let i = 0; i < userChoice; i++) {
        let randomType = Math.floor(Math.random() * 3);
        optionsArray.push(randomType);
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
  }
  return password.join('');
}

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

export function getArrayData(inputArray) {
  let sum = 0;
  for (const element of inputArray) {
    sum = sum + element;
  }
  let average = (sum / inputArray.length).toFixed(2);
  let median = [];
  let sortedArray = inputArray.sort((a, b) => a - b);
  if (inputArray.length % 2 !== 0) {
    let medianIndex = Math.ceil(sortedArray.length / 2);
    median.push(sortedArray[medianIndex]);
  } else {
    let medianIndex1 = sortedArray.length / 2 - 1;
    let medianIndex2 = sortedArray.length / 2;
    median.push((sortedArray[medianIndex1] + sortedArray[medianIndex2]) / 2);
  }
  let mode;
  let frequency = 0;

  for (let i = 0; i < sortedArray.length; i++) {
    let currentCount = 1;

    while (sortedArray[i] === sortedArray[i + 1]) {
      currentCount++;
      i++;
    }

    if (currentCount > frequency) {
      mode = sortedArray[i];
      frequency = currentCount;
    }
  }

  let result = { sum, average, median, mode };

  return result;
}

export function countWords(userInput) {
  let inputArray = userInput.split(' ');
  let wordCount = inputArray.length;
  return wordCount;
}

export function sortNames(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i]
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
  return inputArray.sort();
}

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

export function kebabToCamel(kebabInput) {
  let unKebab = kebabInput.split('-');
  let camelArray = [];
  let capitalLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'Á',
    'É',
    'Í',
    'Ó',
    'Ú',
  ];
  let underScore = ['_'];
  for (let i = 0; i < kebabInput.length; i++) {
    if (capitalLetters.includes(kebabInput[i])) {
      return `The text contains capital letters`;
    } // Esto se podría haber hecho más fácil con if kebab[i] === kebab[i].toUpperCase

    if (underScore.includes(kebabInput[i])) {
      return `The text contains underscores`;
    }

    if (kebabInput === '') {
      return `You must provide some text`;
    }
  }

  for (let i = 0; i < unKebab.length; i++) {
    if (i === 0) {
      camelArray.push(unKebab[i]);
    } else {
      let arrayToUpper = unKebab[i].split('');
      let first = arrayToUpper[0];
      let firstToUpper = first.toUpperCase();
      arrayToUpper.splice(0, 1);
      arrayToUpper.unshift(firstToUpper);
      let finalString = arrayToUpper.join('');
      camelArray.push(finalString);
    }
  }
  return camelArray.join('');
}

const camelToKebab = (camelInput) => {
  let capitalLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'Á',
    'É',
    'Í',
    'Ó',
    'U',
  ];
  let kebabArray = [];
  let unCamel = camelInput.split('');

  for (let i = 0; i < unCamel.length; i++) {
    if (!capitalLetters.includes(unCamel[i])) {
      kebabArray.push(unCamel[i]);
    } else {
      let lowerCaseLetter = unCamel[i].toLowerCase();
      kebabArray.push('-');
      kebabArray.push(lowerCaseLetter);
    }
  }
  return kebabArray.join('');
};

const camelToSnake = (camelInput) => {
  let capitalLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'Á',
    'É',
    'Í',
    'Ó',
    'U',
  ];
  let snakeArray = [];
  let unCamel = camelInput.split('');

  for (let i = 0; i < unCamel.length; i++) {
    if (!capitalLetters.includes(unCamel[i])) {
      snakeArray.push(unCamel[i]);
    } else {
      let lowerCaseLetter = unCamel[i].toLowerCase();
      snakeArray.push('_');
      snakeArray.push(lowerCaseLetter);
    }
  }
  return snakeArray.join('');
};

const camelToPascal = (camelInput) => {
  let unCamel = camelInput.split('');
  let firstLetter = unCamel[0].toUpperCase();
  unCamel.splice(0, 1);
  unCamel.unshift(firstLetter);
  return unCamel.join('');
};

export function camelTranslator(camelInput) {
  let kebabText = camelToKebab(camelInput);
  let snakeText = camelToSnake(camelInput);
  let pascalText = camelToPascal(camelInput);
  let translation = {
    kebabText: kebabText,
    snakeText: snakeText,
    pascalText: pascalText,
    camelText: camelInput,
  };
  return translation;
}

export function accentMarkReverser(inputText) {
  let withMark = ['á', 'é', 'í', 'ó', 'ú'];
  let withoutMark = ['a', 'e', 'i', 'o', 'u'];
  let textArray = inputText.split('');
  for (let i = 0; i < textArray.length; i++) {
    if (withMark.includes(textArray[i])) {
      let vowelIndex = withMark.indexOf(textArray[i]);
      textArray[i] = withoutMark[vowelIndex];
    } else if (withoutMark.includes(textArray[i])) {
      let vowelIndex = withoutMark.indexOf(textArray[i]);
      textArray[i] = withMark[vowelIndex];
    }
  }
  return textArray.join('');
}

const capitalizer = (element) => {
  let lowerCase = 'abcdefghijklmnñopqrstuvwxyzáéíóúü';
  let upperCase = lowerCase.toUpperCase();
  if (lowerCase.includes(element)) {
    let index = lowerCase.indexOf(element);
    element = upperCase[index];
  } else if (upperCase.includes(element)) {
    let index = upperCase.indexOf(element);
    element = lowerCase[index];
  }
  return element;
};

export function capitalizationReverser(inputText) {
  let inputArray = inputText.split('');
  const reversedArray = inputArray.map(capitalizer);
  return reversedArray.join('');
}
