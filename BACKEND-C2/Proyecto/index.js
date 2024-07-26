import Chance from 'chance';
const chance = new Chance();

const nombre = chance.name();
const correo = chance.email();
const fechaNacimiento = chance.birthday();
const telefono = chance.phone();
const edad = chance.age();
const animalFavorito = chance.animal();

console.log("Datos aleatorios generados con la Librería Chance:");
console.log("Nombre:", nombre);
console.log("Correo electrónico:", correo);
console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleDateString());
console.log("Teléfono:", telefono);
console.log("Edad:", edad);
console.log("Animal:", animalFavorito);