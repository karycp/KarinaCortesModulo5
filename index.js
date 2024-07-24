let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

for(let i=0; i < libros.length; i++){
    if(i==0){
        libros[i].paginas=350;
        console.log("El Nombre del Primer Libro es" + libros[i].titulo)
        console.log("El autor del Primer Libro es" + libros[i].autor)
        console.log("El Número de Páginas de Primer Libro es AHORA es" + " " + libros[i].paginas)
    } else
    if(i==1){
        console.log("El Nombre del segundo libro es" + libros[i].titulo);
        console.log("Y su autor es" + libros[i].autor);
    }
}

console.log("SIGUIENTEEEEEEEEEEEEEEEEEEEEE CON MAP")
const nuevoArray= libros.map (function(libro) {
    return {
        titulo:libro.titulo,
        autor:libro.autor
    }
})
 console.log(nuevoArray)
 console.log("SUMA Y PROMEDIO EDADES")
  
 const sumaEdades = estudiantes.reduce((acum, estudiante)=>{
    return acum += estudiante.edad
 }, 0); // este 0 es para inicializar el acumulador en 0
console.log("La suma de las edades es" + " " + sumaEdades)
const promedioEdades = sumaEdades/estudiantes.length
console.log("El promedio de las edades es" + " " + promedioEdades)

console.log("PRODUCTOS CON CATEGORIA ROPA")

const catRopa= productos.filter(producto => producto.categoria ==="Ropa" )
  console.log(catRopa)

  console.log("PRODUCTOS CON PRECIO MAYOR A 30")
const preciosMayores = productos.filter(producto => producto.precio > 30)
console.log(preciosMayores)