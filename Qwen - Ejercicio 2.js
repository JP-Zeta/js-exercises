/* Encontrar el producto más caro por categoría */
const productos = [
  { nombre: "Camiseta", precio: 25, categoria: "Ropa" },
  { nombre: "Zapatos", precio: 120, categoria: "Calzado" },
  { nombre: "Pantalón", precio: 50, categoria: "Ropa" },
  { nombre: "Reloj", precio: 200, categoria: "Accesorios" },
  { nombre: "Bufanda", precio: 15, categoria: "Ropa" },
  { nombre: "Botas", precio: 150, categoria: "Calzado" }
];

productos.forEach((producto) => {
  //console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Categoria: ${producto.categoria}`);
});

const categorias = [];

//Recorre el array de productos e identifica las caterorias unicas.
productos.forEach((producto) => {
  //Verifica si la categoria ya existe en el array categorias
  if (!categorias.includes(producto.categoria)) {
    //Si no existe, la agrega
    categorias.push(producto.categoria);
  }

});

console.log(`Categorias: ${categorias}`);

//Crear un objeto para almacenar el arreglo de cada categoria.
const productosPorCategoria = {};

categorias.forEach((categoria) => {
  //Filtra los productos por categoria y los almacena en el objeto segun la categoria.
  productosPorCategoria[categoria] = productos.filter((producto) => producto.categoria === categoria);
});

//console.log(productosPorCategoria["Ropa"]);
console.log(productosPorCategoria);

//Si necesitas acceder dinámicamente a la primera categoría
/* const primeraCategoria = Object.keys(productosPorCategoria)[0];
console.log(productosPorCategoria[primeraCategoria]); */

//Muestra el precio de un solo producto en una categoria.
//console.log(`${productosPorCategoria.Ropa[0].precio}`);

let precioMaximo = 0;

//Se encuentra el precio maximo de la categoria "Ropa".
/* productosPorCategoria.Ropa.forEach((producto) => {
  console.log(`${producto.precio}`);
  precioMaximo = Math.max(precioMaximo, producto.precio);
  
});
console.log(`Precio maximo: ${precioMaximo}`); */

let productosMasCaros = [];

for (const categoria in productosPorCategoria) { //itera sobre las propiedades (claves) del ojbeto productosPorCategoria
  productosPorCategoria[categoria].forEach((producto) => { //itera sobre los elementos de [0]ropa, [1]calzado y [2]accesorios producto.precio
    precioMaximo = Math.max(precioMaximo, producto.precio);
    //precioMaximo = Math.max(...productosPorCategoria[categoria].map((producto) => producto.precio));

    let productoMasCaro = productosPorCategoria[categoria].find((producto) => producto.precio === precioMaximo); //filtra los productos que tienen el precio maximo
    productosMasCaros.push(productoMasCaro); //almacena el producto mas caro en el arreglo productosMasCaro
  });
  //console.log(`Categoria: ${categoria}, Precio maximo: ${precioMaximo}`);
  
  precioMaximo = 0; //reinicia el precio maximo para la siguiente categoria
}

productosMasCaros.forEach((producto) => {
  console.log(`Producto más caro: ${producto.nombre}, Precio: ${producto.precio}, Categoria: ${producto.categoria}`);
});

/* for (const categoria in productosPorCategoria) {
  // Reinicia el precio máximo para cada categoría
  let precioMaximo = Math.max(...productosPorCategoria[categoria].map((producto) => producto.precio));

  // Encuentra el producto más caro de la categoría
  let productoMasCaro = productosPorCategoria[categoria].find((producto) => producto.precio === precioMaximo);

  // Agrega el producto más caro al arreglo
  productosMasCaros.push(productoMasCaro);
}

// Muestra los productos más caros de cada categoría
productosMasCaros.forEach((producto) => {
  console.log(`Producto más caro: ${producto.nombre}, Precio: ${producto.precio}, Categoría: ${producto.categoria}`);
}); */