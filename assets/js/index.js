// ejercicio 1 
const exampleImage = document?.querySelector('.example-image');

// Ejercicios 2
const inputStickerJs = document?.querySelector('.input--sticker_js');
const inputStickerCss = document?.querySelector('.input--sticker_css');
const inputStickerGit = document?.querySelector('.input--sticker_git');
const btnVerified = document?.querySelector('.verifiedStickers');
const messageStickers = document?.querySelector('.message__stickers');
const limitStickers = 10;
// Ejemplo 1
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
      messageStickers.innerHTML = 'No llevas stickers';
      return
    }
    if (stickersTotal > limitStickers) {
      messageStickers.innerHTML = 'Llevas demaiados stickers';
      return
    }

    messageStickers.innerHTML = `Llevas ${stickersTotal} stickers` ;  
  });

  // ejercicio 3








});


