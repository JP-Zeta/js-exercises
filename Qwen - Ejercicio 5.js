const palabras = ["hola", "mundo", "hola", "js", "mundo", "hola"];

const contador = {};

palabras.forEach((palabra) => {
  contador[palabra] = (contador[palabra] || 0) + 1;
});

console.log(contador);



//Otra forma de hacerlo es usando reduce, que es una forma más funcional y declarativa de contar elementos en un arreglo.

const palabris = ["hola", "mundo", "hola", "js", "mundo", "hola"];

const conteoPalabras = palabris.reduce((acumulador, palabra) => {
  // Si la palabra ya existe en el acumulador, incrementa su conteo
  if (acumulador[palabra]) {
    acumulador[palabra]++;
  } else {
    // Si no existe, inicializa su conteo en 1
    acumulador[palabra] = 1;
  }
  return acumulador;
}, {}); //.reduce aqui el acumulador es un objeto vacío

console.log(conteoPalabras);
// Salida: { hola: 3, mundo: 2, js: 1 }



const numeros = [1, 2, 3, 4, 5];

const sumaConIndices = numeros.reduce((acumulador, numero, indice, arreglo) => {
  console.log(`Índice: ${indice}, Número: ${numero}, Arreglo: ${arreglo}`);
  return acumulador + numero;
}, 0);

console.log(sumaConIndices); // 15