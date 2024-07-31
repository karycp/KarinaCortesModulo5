import fs from 'fs'

let arraynumeros=[]


for(let i=0; i<20; i++){
    
    arraynumeros.push(i);
        
}

fs.writeFile('numeros.txt', `${arraynumeros}`,(error) => {
    if(error){
        console.log(`Error: ${error}`)
    }
})




