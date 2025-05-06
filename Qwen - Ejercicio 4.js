//Eliminar duplicados de un array
console.log("Eliminar duplicados de un array: ");

const numeros = [1, 2, 2, 3, 4, 4, 5, 2];

let numerosUnicos = [];

numeros.forEach(numero => {
  if (!numerosUnicos.includes(numero)) {
    return numerosUnicos.push(numero);
  }
});

console.log(numeros);
console.log(numerosUnicos);

//Otra forma de eliminar duplicados es usando el Set (Esta es la forma más eficiente y moderna)
console.log("Usando Set: ");

const numeris = [1, 2, 2, 3, 4, 4, 5];

const numerosUnicis = [...new Set(numeros)];

console.log(numerosUnicis); // [1, 2, 3, 4, 5]


//Otra forma de eliminar duplicados es usando indexOf
console.log("Usando indexOf: ");

const numerus = [1, 2, 5, 2, 3, 4, 4, 5, 2];

const numerosUnicus = numeros.filter((numero, indice) => {
  console.log(`numero: ${numero}. Indices: iO(${numeros.indexOf(numero)}) === i(${indice})`); //indexOf busca el numero y devuelve el primer indice donde se encuentra
  
  return numeros.indexOf(numero) === indice; //indexOf busca el numero y devuelve el primer indice donde se encuentra
});

console.log(numerosUnicus); // [1, 2, 3, 4, 5]



//Ejemplo de como funciona .filter y .reduce
const numeras = [1, 2, 2, 3, 4, 4, 5, 2];

const numerosMayoresQuePromedio = numeras.filter((numero, indice, arreglo) => {
  console.log(`${indice}`);//probando las veces que itera .filter
  
  const promedio = arreglo.reduce((acc, val) => acc + val, 0) / arreglo.length;
  return numero > promedio;
});

console.log(`Numeros mayorque que el promedio: ${numerosMayoresQuePromedio}`); // [4, 4, 5]

/*
### **¿Es mejor usar `numeras` o `arreglo`?**
Ambas opciones son válidas, pero hay algunas consideraciones:

1. **Usar `arreglo` (tercer parámetro):**
   - Es más genérico y reutilizable. Si cambias el nombre del arreglo original (`numeras`), el código seguirá funcionando porque `arreglo` siempre hace referencia al arreglo sobre el que se ejecuta `.filter()`.

2. **Usar `numeras` directamente:**
   - Es más explícito y puede ser más fácil de leer si sabes que siempre trabajarás con el arreglo `numeras`.

*/