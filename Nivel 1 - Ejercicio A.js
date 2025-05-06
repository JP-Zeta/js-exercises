// Ejercicio A. Nivel 1. Sume el dinero de los tres amigos y determine si pueden comprar el helado más caro. Si pueden, muestre el nombre y el precio del helado más caro.
let roberto = 1.3;
let juan = 1.7;
let cofla = 3;
let total;
let precioMaximo;
let vuelto;

/* roberto = parseFloat(prompt("¿Cuánto dinero tiene Roberto?"));
juan = parseFloat(prompt("¿Cuánto dinero tiene Juan?"));
cofla = parseFloat(prompt("¿Cuánto dinero tiene Cofla?")); */

const helados = [
  {nombre: "Palito de helado de agua", precio: 0.6},
  {nombre: "Palito de helado de crema", precio: 1},
  {nombre: "Bombón helado marca haladix", precio: 1.6},
  {nombre: "Bombón helado marca heladovich", precio: 1.7},
  {nombre: "Bombón helado marca helardo", precio: 1.8},
  {nombre: "Potecito de helado con confites", precio: 2.9},
  {nombre: "Pote de helado de 1/4 kg", precio: 2.9}
];

total = roberto + juan + cofla;
console.log(`El total de dinero es: ${total}`);


/* precioMaximo = helados[0].precio;

helados.forEach ((helado) => {

  console.log(`Precio: ${helado.precio}`);

  if (precioMaximo < helado.precio) {
    precioMaximo = helado.precio;
    
  }
  
}); */


//helados.map() crea un arreglo temporal de solo precios.
// ... envia elemento por elemento a Math.max o una lista de numeros.
precioMaximo = Math.max(...helados.map((helado) => {
  
  return helado.precio;})

);

console.log(`El helado más caro es: ${precioMaximo}`);

//Se crea un arreglo "valoresMaximos" que contiene los helados que tienen el precio máximo con .filter.
const valoresMaximos = helados.filter((helado) => {
  return helado.precio === precioMaximo;
});

//console.log(`Los helados más caros son: ${valoresMaximos.map((helado) => helado.nombre).join(", ")}`);


//La suma del dinero de los tres amigos es mayor o igual al precio máximo del helado.
if (total >= precioMaximo) {
  console.log(`Pueden comprar el helado más caro que es: ${precioMaximo}`);
  
  valoresMaximos.forEach((e) => {
    return console.log(`Nombre: ${e.nombre}, Precio: ${e.precio}`);
  });
  vuelto = total - precioMaximo;
  console.log(`Te sobran: ${vuelto.toFixed(2)}`);
}


//Curiosidad para recorrer un array

/* for (let i = 0; i < helados.length; i++) {
  console.log(`nombre: ${helados[i].nombre}`);
} */

/* let tipos = helados.map((helado, indice) => {
  return `Índice: ${indice}, Nombre: ${helado.nombre}, Precio: ${helado.precio}`;
});

console.log(tipos.join("\n")); */