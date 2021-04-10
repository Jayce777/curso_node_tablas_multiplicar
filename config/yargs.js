const argv=require('yargs')
.options(
    'b',{
    alias:'base',
    type:'number',
    describe:'Base de la tabla a multiplicar',
    demandOption:true

    })
  
    .options(
        'h',{
            alias:'hasta',
            type:'number',
            demandOption:true,
            default:10,
            describe:'Límite de tabla de multiplicar'
        })
    //chequear los valores de entrada antes de ejecutar el programa
    .check((argv,options)=>{

        if(isNaN(argv.base)){
            throw 'La base debe ser un número';
        }

        return true;
    })
    
.argv;


module.exports=argv;