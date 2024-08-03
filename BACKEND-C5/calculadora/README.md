console.log(process.argv); me arroja: [ruta del ejecutable, nombre del archivo, y los parámetros que le voy a enviar por consola], me arroja strings

const datosPasados= process.argv.slice(2); al vector anterior le quito los dos primeros argumentos que no los necesito ahora

const operacion = datosPasados[0] al vector resulatante en la posición 0 le asigno la operación que voy a realizar

const numeros = datosPasados.slice(1).map(dato => parseFloat(dato)); al [] le quito 1 posición porque la primera es para la operación y las posiciones siguientes las recorro para convertirlas en numeros

PARA EJECUTARLO node calculadora.js + 5  3(PRIMERO EL SIGNO)