console.clear()
const { argv, options } = require('yargs');
const colors = require('colors')
const {crearArchivo} = require('./operaciones/multiplicar')
const {yargs} = require('./yargsConfig/yargsConfig')
// const base =12

console.clear()

console.log(process.argv)
console.log(yargs)




crearArchivo(yargs.b,yargs.l,yargs.h)
.then(nombreArchivo => console.log(nombreArchivo.red,' se ha creado correctamente'))
.catch(err => console.log(err))