const puntos = [
  { x: 0, y: 0 },
  { x: 3, y: 4 },
  { x: 6, y: 8 },
  { x: 9, y: 12 }
];



//console.log(puntos[0].x);
let iterador = 0;

const distancias = puntos.reduce((acumulador, puntoActual, indice) => {
  if(indice === 0) {return acumulador;}

  const puntoAnterio = puntos[indice -1];
  let distancia = Math.sqrt(
    Math.pow(puntoActual.x - puntoAnterio.x, 2) + 
    Math.pow(puntoActual.y - puntoAnterio.y, 2));

  //console.log(`Distancia entre ${puntoAnterio.x},${puntoAnterio.y} y ${puntoActual.x},${puntoActual.y}: ${distancia}`);
    
  console.log(`Iterador: ${indice}`);
  
  iterador = indice;
  return acumulador + distancia;
}, 0);

console.log(distancias / iterador);



//Otra forma de hacerlo segun Qwen evitar variables globales

const puntis = [
  { x: 0, y: 0 },
  { x: 3, y: 4 },
  { x: 6, y: 8 },
  { x: 9, y: 12 }
];

const resultado = puntis.reduce((acumulador, puntoActual, indice) => {
  if (indice === 0) { return acumulador; }

  const puntoAnterior = puntis[indice - 1];
  const distancia = Math.sqrt(
    Math.pow(puntoActual.x - puntoAnterior.x, 2) + 
    Math.pow(puntoActual.y - puntoAnterior.y, 2)
  );

  // Acumular la suma de distancias y el conteo de pares
  acumulador.sumaDistancias += distancia;
  acumulador.numeroPares++;

  return acumulador;
}, { sumaDistancias: 0, numeroPares: 0 });

// Calcular el promedio
const promedio = resultado.numeroPares > 0 
  ? resultado.sumaDistancias / resultado.numeroPares 
  : 0;

console.log(promedio); // Salida: 5