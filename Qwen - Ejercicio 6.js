const productos = [
  { nombre: "Camiseta", precio: 50, descuento: 10 },
  { nombre: "Zapatos", precio: 120, descuento: 20 },
  { nombre: "Pantalón", precio: 80, descuento: 15 }
];

/* let max = 0;

const descuentoAplicado = productos.reduce((acu, producto) => {
  
  dA = parseFloat(producto.precio * (producto.descuento / 100))
  
  if (Math.max(max, dA) === dA) {
    console.log(`El nuevo descuento (${dA}) es mayor que el anterior (${max})`);
    max = dA; // Actualiza el valor de max
  }
  
}, {}); */

const mayorDescuento = productos.reduce((acu, producto) => {
  const dA = producto.precio * (producto.descuento / 100);

  //console.log(acu);
  
  if (dA > acu.descuentoAplicado) {
    return {nombre: producto.nombre, descuentoAplicado: dA};
  }
  //return dA > acu.descuentoAplicado ? { ...producto, descuentoAplicado: dA } : acu;
  

  return acu;
}, {nombre: "", descuentoAplicado: 0})
//, { descuentoAplicado: 0 });


//console.log(mayorDescuento);



//Otra forma de realizar el mismo ejercicio es usando map y luego reduce.
//Calcular primero el descuento aplicado y lueego extraer el objeto con mayor descuento aplicado
const descuentosAplicados = productos.map((producto) => {
  return {
    ...producto,
    descuentoAplicado: producto.precio * (producto.descuento / 100),
    precioFinal: producto.precio - producto.precio * (producto.descuento / 100)
  }
})

//console.log(`Descuentos Aplicados: ${descuentosAplicados}`);
//console.log(`Descuentos Aplicados: ${JSON.stringify(descuentosAplicados, null, 2)}`);

const productoConMayorDescuento = descuentosAplicados.reduce((acu, producto) => {
  //console.log(acu.descuentoAplicado);
  console.log(`Iteración: Producto actual: ${JSON.stringify(producto, null, 2)}, Acumulador: ${JSON.stringify(acu, null, 2)}`);
  return producto.descuentoAplicado > (acu.descuentoAplicado || 0) ? producto : acu;
}, {});

/* console.log(`Producto con mayor descuento:`);
console.log(productoConMayorDescuento); */

console.log(`Producto con mayor descuento: ${JSON.stringify(productoConMayorDescuento, null, 2)}`);


//En este otro caso se inicializa el acumulador con valores predeterminados
/* const productoConMayorDescuento = productos.reduce((acu, producto) => {
  return producto.descuentoAplicado > acu.descuentoAplicado ? producto : acu;
}, { nombre: "", precio: 0, descuento: 0, descuentoAplicado: 0 }); */



//Uso de ejemplo para .map
/* const numeros = [10,20,30];
const dobles = numeros.map((num) => num * 2);
console.log(dobles); */


//Ejercicio hecho por Qwen:
const productis = [
  { nombre: "Camiseta", precio: 50, descuento: 10 },
  { nombre: "Zapatos", precio: 120, descuento: 20 },
  { nombre: "Pantalón", precio: 80, descuento: 15 }
];

// Paso 1: Calcular el descuento aplicado para cada producto
const descuentosAplicadis = productis.map((producto) => ({ //Los parentesis son por el objeto literal que se retorna
  ...producto,
  descuentoAplicado: producto.precio * (producto.descuento / 100)
}));

//Return explicito del bloque anterior.
/* const descuentosAplicadis = productis.map((producto) => {
  return {
    ...producto,
    descuentoAplicado: producto.precio * (producto.descuento / 100)
  };
}); */

// Paso 2: Encontrar el producto con el mayor descuento aplicado
const productoConMayorDescuenti = descuentosAplicados.reduce((acu, producto) => {
  return producto.descuentoAplicado > acu.descuentoAplicado ? producto : acu;
}, { descuentoAplicado: 0 });

console.log(`Producto con mayor descuento:`, productoConMayorDescuenti);