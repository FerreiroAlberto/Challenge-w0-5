import {
  pyramid,
  getRandomPassword,
  getShorterNames,
  getArrayData,
  countWords,
  sortNames,
  getOddsAndEvens,
  kebabToCamel,
  camelTranslator,
  accentMarkReverser,
  capitalizationReverser,
} from './functions.js';

pyramid(10);
console.log(
  'Expected -> Error, caracteres insuficientes ',
  getRandomPassword(5)
);
console.log('Expected -> Random password 1 ', getRandomPassword(9));
console.log('Expected -> Random password 2 ', getRandomPassword(12));
let names = ['Ross', 'Rachel', 'Phoebe', 'Joey', 'Monica', 'Chandler'];
console.log(
  'Expected -> Names shorter than 9 letters ',
  getShorterNames(names, 9)
);
console.log(
  'Expected -> Names shorter than 7 letters ',
  getShorterNames(names, 7)
);
console.log(
  'Expected -> Names shorter than 5 letters ',
  getShorterNames(names, 5)
);

let numArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 2, 3, 5, 7, 7];

console.log(
  'Expected -> Object with: 153 - 10.20 - 7 - 7',
  getArrayData(numArray)
);

console.log('Expected -> 2', countWords('Coders Rocks'));
console.log('Expected -> Alphabetically sorted names: ', sortNames(names));
console.log(
  'Expected -> Object containig odds and evens up to 11',
  getOddsAndEvens(11)
);
console.log(
  'Expected -> Text converted to camelCase',
  kebabToCamel('kebab-de-ternera-con-doble-de-queso')
);
console.log(
  'Expected -> Text converted to kebab, snake, pascal and camel cases',
  camelTranslator('thisWasACamelTextString')
);
console.log(
  'Expected -> All the wrong accents',
  accentMarkReverser('Podrá poner todos los acentos al revés')
);
console.log(
  'Expected -> Reversed capitalization',
  capitalizationReverser('A Buenas Horas')
);
