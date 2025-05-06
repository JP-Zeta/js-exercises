// https://www.youtube.com/watch?v=z95mZVUcJ-E&t=6928s
//1:46:00
let boleto = 0.5;
let donacionR = 3;
let cantidadB = donacionR / boleto;
let boletoT = Math.floor(cantidadB);
let vuelto = (donacionR - (boletoT * boleto)).toFixed(2);

if (cantidadB < 1) {
  console.log(`El dinero ${donacionR} no alcanza para comprar ningun boleto!`);
  
}else if (cantidadB >= 1 && cantidadB < 3) {
  console.log(`El dinero ${donacionR} alcanza para comprar ${boletoT} boleto(s)!`);
  console.log(`El vuelto es ${vuelto}`);
  
}else if (cantidadB >= 3) {
  let vuelto = (donacionR - (2 * boleto)).toFixed(2);
  console.log(`El dinero ${donacionR} alcanza para mas de 2 boletos pero solo se comprara 2!`);
  console.log(`El vueto ${vuelto} se donara!`);
  
  
}

console.log("Fin!");
