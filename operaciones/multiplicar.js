const fs = require('fs');
const colors=require('colors');

const archivomultiplicar = async(base = 1,listar=false,hasta=10) => {

    try {
        let salida = '';
       

        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i}=${base * i}\n`;
        }
        if(listar){

            console.log(colors.red('================'));
            console.log('   Tabla del ', base);
            console.log(colors.red('================'));
            console.log(colors.blue(salida));

        }

        fs.writeFileSync(`./salida/tabla${base}.txt`, salida);

        return colors.green.underline(`tabla del ${base}.txt creada!`);
    } catch (err) {
        
        throw err;
    }
    
            //console.log('Archivo creado!');

};

module.exports = {

    archivomultiplicar
};