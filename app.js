
const{ crearArchivo } = require('./helpers/multiplicar');
//import{crearArchivo} from'./helpers/multiplicar';
//import { crearArchivo } from './helpers/multiplicar';
const argv = require('./configs/yargs');


console.clear();

console.log(argv);




   crearArchivo(argv.b, argv.l, argv.h)
   .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
   .catch(err => console.log(err));
