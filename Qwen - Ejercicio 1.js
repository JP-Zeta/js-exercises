/* Ejercicio 1: Promedio de calificaciones aprobatorias */

const estudiantes = [
  { nombre: "Ana", calificacion: 85 },
  { nombre: "Luis", calificacion: 45 },
  { nombre: "Carlos", calificacion: 72 },
  { nombre: "María", calificacion: 59 }
];

//console.log(`nombre: ${estudiantes[0].nombre}`);
let estudiantesAprobados = estudiantes.filter((nota) => nota.calificacion >= 60);
/* let suma = 0;
let contador = 0;

estudiantesAprobados.forEach((estudiante) => {
  console.log(`nombre: ${estudiante.nombre}`);
  suma += estudiante.calificacion;
  contador++;
}); */

//console.log(`calificacion: ${suma/estudiantes.length}`);

let suma = estudiantesAprobados.reduce((acumulador, estudiante) => {
  //console.log(`nombre: ${estudiante.nombre}. acu:${acumulador}. est: ${estudiante.calificacion}`);

  return acumulador += estudiante.calificacion;
  
}, 0);

let promedio = suma / estudiantesAprobados.length;
console.log(`Promedio de estudiantes aprobados: ${promedio}`);

if (promedio >= 60) {

  console.log(`El promedio es mayor o igual a 60`);
  
}else {
  console.log(`El promedio es menor a 60`);
}
