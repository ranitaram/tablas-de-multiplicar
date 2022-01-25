const argv = require('yargs')
       .option('b', {
          alias: 'base',
          type: 'number',
          demandOption: true,
          describe: 'Es a base de la tabla de multiplicar'
       })
       .option('h', {
        alias: 'bhasta',
        type: 'number',
        default: 10,
        describe: 'Este es el numnero hasta donde quieres la tabla la tabla de multiplicar'
     })
       .option('l', {
         alias: 'listar',
         type: 'boolean',
         demandOption: true,
         default: false,
         describe: ' Muestra la tabla en la consola '
      })
       .check((argv, option)=> {
          if (isNaN(argv.b)) {
             throw 'La base tiene que ser un numero'
          }
          return true;
       })
        .argv;

        module.exports = argv;