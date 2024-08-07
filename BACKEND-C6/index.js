import http from 'http'

const port = 3002;

const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
]
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html'})
    console.log(req.url) // me dice la información que me esta dando el cliente, postman es la simulación d un cliente
   
   switch(req.url){
    case '/products':
        res.end(JSON.stringify(products)) 
        break 
        // en caso de que por la url venga algo diferente
        default:
            res.writeHead(404)
            res.end(JSON.stringify({error: 'Ruta No encontrada'})) // json.stringify es para convertir la información del vector que está en json a formato texto
   }

    //res.write('<h1> Hola Mundo</h1>')
   
})
// prendo el puerto
server.listen(port, ()=>{ // el callback dice: si mi aplicacion inicia bien muestreme el mensaje y el puerto
    // lo compruebo en  psoman
    console.log(`El Servidor se inicio con éxito en el puerto ${port}`)
}) // hace que el servidor arranque