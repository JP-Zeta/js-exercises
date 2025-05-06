//Ordenas y unir los arreglos en otro arreglo nuevo.
const numeros = [10, 5, 8];
const strings = ["manzana", "banana", "cereza"];

const number = numeros.sort((a,b) => { return a - b; });
const string = strings.sort((a,b) => { return a.localeCompare(b); });
console.log(number);
console.log(string);

const union = [...number, ...string];

console.log(union);
