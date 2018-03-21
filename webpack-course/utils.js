function sum(a, b) {
  return a + b;
}

// named exports
// pode ter vários no mesmo arquivo
// só pode chamar com o mesmo nome
// import precisa das chaves
export function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

export { mult as multiplicacao, div };
// método principal
// só pode ter um default por arquivo
// importa com qualquer nome
// não precisa utilizar chaves
export default sum;
