const path = require('path');
import imgHomePage from '../../assets/images/svg-2.svg';

console.log('__dirname: ' + __dirname);

export const homeWelcome = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Inicio',
  headline: 'Matisacloud, sistema cloud de contabilidad',
  description:
    'Para empezar a utilizar el sistema registre un usuario con su correo electronico.',
  buttonLabel: 'Empezar',
  imgStart: '',
  //img: path.resolve(__dirname, '/svg-2.svg') ,//'./assets/images/svg-2.svg',
  //img: path.resolve(__dirname, '/assets/images/svg-2.svg') ,//'./assets/images/svg-2.svg',
  img: imgHomePage,
  alt: 'Homepage Img'
};

// Los datos de este sistema, puede ser accesados por usuarios en modo lectura mediante credenciales de distintos niveles.