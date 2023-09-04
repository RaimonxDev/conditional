// ejercicio 1 
const exampleImage = document?.querySelector('.example-image');

// Ejercicios 2
const inputStickerJs = document?.querySelector('.input--sticker_js');
const inputStickerCss = document?.querySelector('.input--sticker_css');
const inputStickerGit = document?.querySelector('.input--sticker_git');
const btnVerified = document?.querySelector('.verifiedStickers');
const messageStickers = document?.querySelector('.message__stickers');
const limitStickers = 10;

// Ejercicio 3 

const btnVerifiedPass = document?.querySelector('.verifiedPassword');
const fieldOne = document?.querySelector('#fieldOne');
const fieldTwo = document?.querySelector('#fieldTwo');
const fieldThird = document?.querySelector('#fieldThird');
const messagePassword = document?.querySelector('.messagePass');


document?.addEventListener('DOMContentLoaded', () => { 
  // ejecicio 1 
  exampleImage?.addEventListener('click', () => { 
    exampleImage.classList.toggle('border-red');
    // otra manera de hacerlo
    // if (exampleImage.classList.contains('border-red')) {
    //   exampleImage.classList.remove('border-red');}
    // else {
    //   exampleImage.classList.add('border-red')
    //     ;
    // }
  });

  // ejercicio 2 
  btnVerified?.addEventListener('click', (event) => {   
    event.preventDefault();
    const stickersTotal = parseInt(inputStickerJs.value) + parseInt(inputStickerCss.  value) + parseInt(inputStickerGit.value);
    if (stickersTotal === 0) { 
      return messageStickers.innerHTML = 'No llevas stickers';
    }
    if (stickersTotal > limitStickers) {
      return messageStickers.innerHTML = 'Llevas demaiados stickers';
    }
    messageStickers.innerHTML = `Llevas ${stickersTotal} stickers` ;  
  });

  // ejercicio 3

  btnVerifiedPass?.addEventListener('click', (event) => {
    event.preventDefault();
    const password = fieldOne.value + fieldTwo.value + fieldThird.value;
    if (password === "714") {
      return messagePassword.innerHTML = 'Contraseña 2 correcta';
    }
    if (password === "911") {
      return messagePassword.innerHTML = 'Contraseña correcta';
    }
    return messagePassword.innerHTML = 'Contraseña incorrecta';
  });

});


