import fs from 'fs'

const datos1=[];
let cadena = [];

const result = fs.readFileSync("numeros.txt", "utf-8")
//const numero = parseInt(numberString); // parseInt convierte un string a número
  
cadena = result.split(",")

for(let i=0; i<20; i++){
    if(cadena[i] % 2 === 0){
        datos1.push(cadena[i])
        
}

}
console.log(datos1)

    







