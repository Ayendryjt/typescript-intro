// Función para verificar si un número es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  }
   
  // Ejemplo de uso
  const numero = 7;
  const resultado = esParOImpar(numero);
  console.log(`${numero} es un número ${resultado}`);