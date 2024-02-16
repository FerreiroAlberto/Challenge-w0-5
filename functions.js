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
