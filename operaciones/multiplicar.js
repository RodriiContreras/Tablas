const fs = require ('fs')
const colors = require('colors')

const crearArchivo =  async ( base =5, l=false,h=10)=>{
 
try {

  let salida= ''
  let consola = ''
  for (i = 1; i <= h; i++) {
  salida += ` ${base} 'x' ${i} =  ${base * i}\n`;
  consola += ` ${base} ${'x'.yellow} ${i} =  ${base * i}\n`
   }
//  console.log(salida)
 if(l){
 console.log(consola)
 }
 fs.writeFileSync(`./salida/tablaDel-${base}.txt`,salida);
   
console.log('se escribio correctamente el txt')

return `la tabla Del-${base}.txt`
 } 

 catch (error) {
      console.log(error)
 }

    
}


module.exports ={
    crearArchivo
}