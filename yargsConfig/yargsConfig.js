const yargs = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'base para hacer la tabla de multiplicacion'
})
.option('l',{
    alias:'listado',
    type:'boolean',
    describe:'listado de toda la tabla',
   default:false,
}) 
.option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'ponerle un tope a la multiplicacion'
})
.check((argv,options) =>{
 if (isNaN(argv.b)){
  throw 'solo se aceptan numeros'
 }
 return true
})
 .argv;


 module.exports={
     yargs
 }
 