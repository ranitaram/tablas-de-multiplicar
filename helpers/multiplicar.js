

const fs = require('fs');

const crearArchivo =  async (base = 5,listar = false, hasta = 10) => {

    try {

        
        
    let  salida = '';

     
    for (let i = 1; i <= hasta; i++) {
       
        salida += `${base} x ${i} = ${base * i}\n` // esto significa un salto de linea  "\n"
        
    }
    if (listar) {
         console.log('=======================================');
         console.log('           TABLA DEL:', base);
         console.log('=======================================');
         console.log(salida);

    }
    
    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
        
    
        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }

     
    
}

 module.exports =
 {crearArchivo}