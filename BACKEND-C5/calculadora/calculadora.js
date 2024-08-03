

console.log(process.argv);
const datosPasados= process.argv.slice(2);
const operacion = datosPasados[0]

const numeros = datosPasados.slice(1).map(dato => parseFloat(dato));

function general(operacion, numeros){


if(operacion === '+'){
    
    const suma=(numeros.reduce((a,b)=>a+b))
    console.log("Suma",suma)
}else if (operacion=== '-'){
    console.log(numeros)
    const resta=(numeros.reduce((a,b)=>a-b))
    console.log("Resta",resta)

}else if(operacion==='*'){
    console.log(numeros)
    const multiplicacion=(numeros.reduce((a,b)=>a*b))
    console.log("Multiplicación",multiplicacion)
    
}else
    if(operacion==="/") {
        console.log(numeros)
        const division=(numeros.reduce((a,b) =>{
            if(b===0)
                console.log("La división entre 0 no existe")
            else{
                const rta=a/b
                console.log("División", rta)
            } 
            }
      ))
         
        } 

    }

general(operacion,numeros)
