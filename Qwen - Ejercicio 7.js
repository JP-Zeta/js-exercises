//Formatear los nombres

const nombres = ["   juan", "MARIA ", " pedro ", "LUCIA"];

const nombresFormateados = nombres.map((nombre) => {
  let nombreF = nombre.trim().toLowerCase();
  let nombreL = nombreF.charAt(0).toUpperCase();
  return nombreL + nombreF.slice(1);

  //Optimizacion
  //return nombre.trim()[0].toUpperCase() + nombre.trim().slice(1).toLowerCase()
});

console.log(nombresFormateados); // ["Juan", "Maria", "Pedro", "Lucia"]
