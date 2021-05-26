const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default:10,
    describe:'Es el numero hasta donde quieres llegar en la tabla'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe:'muestra la tabla en consola'
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw 'La Base debe ser un número';
    }
    return true;
  })
  .argv;


  module.exports =argv;