// Ejercicio A. Nivel 1. Un resultado para cada amigo segun el dinero que disponga.
let roberto = 1.5;
let juan = 1.7;
let cofla = 3;
let heladosOpcionales = [];

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

let compradores = [
  {nombre: "Cofla", dinero: cofla},
  {nombre: "Roberto", dinero: roberto},
  {nombre: "Juan", dinero: juan}
];

/* compradores.forEach((comprador) => {
  const {nombre, dinero} = comprador;
  console.log(`${nombre} tiene ${dinero}`);
}); */


function dineroHelado(comprador, dinero) {

  if (dinero > 0 && helados.some((helado) => {
    return helado.precio <= dinero;
  })){
  
    //Filtra los helados que el comprador puede comprar.
    heladosOpcionales = helados.filter((helado) => {
      return helado.precio <= dinero;
    });
    
    //Encuentra el precio maximo y guarda en la variable "precioMaximo".
    const precioMaximo = Math.max(...heladosOpcionales.map((helado) => helado.precio)); //.map crea un arreglo temporal donde itera (...) uno a uno el precio a math.max

    //Helados que puede comprar el comprador.
    /* heladosOpcionales.map((helado) => {
      console.log(`${comprador}, puedes comprar ${helado.nombre} por $${helado.precio}`);
    }); */
      

    //Segun el precio maximo encuentra al helado mas caro con.find, pero con filter encuentras todos los helados que tengan el mismo precio maximo.
    const heladoMasCaro = heladosOpcionales.filter((helado) => {//filter siempre devuelve un arreglo. En este caso un arreglo de objetos.
      return helado.precio === precioMaximo;
    });

    heladoMasCaro.forEach((helado) => {
      console.log(`${comprador}, uno de los helados más caros que puedes comprar es ${helado.nombre} por $${helado.precio}`);
    });

    //Vuelto
    heladoMasCaro.forEach((helado) => {
      vuelto = dinero - helado.precio;
      console.log(`${comprador}, te queda $${vuelto.toFixed(2)} de vuelto`);
    });
  }
  
  //Al declarar el arreglo healadosOpcionales dentro del if no se puede acceder fuera de su bloque. Esta linea de codigo no ejecuta.
  heladosOpcionales.forEach((helado) => {
    //console.log(`${comprador}, puedes comprar ${helado.nombre} por ${helado.precio}`);
  });

};

// Iterar sobre los compradores
for (let i = 0; i < compradores.length; i++) {

  console.log(`El comprador ${compradores[i].nombre} tiene $${compradores[i].dinero}`);
  dineroHelado(compradores[i].nombre, compradores[i].dinero);
  console.log(`--`);
  
}

/* compradores.forEach((comprador) => {
  dineroHelado(comprador.dinero);
}); */
