
console.clear();
const { alias } = require('yargs');
const {archivomultiplicar}=require('./operaciones/multiplicar');
const argv=require('./config/yargs');

//const base=4;

archivomultiplicar(argv.b,argv.l,argv.h)
.then(archivo=>console.log(archivo))
.catch(err=>console.log(err));
