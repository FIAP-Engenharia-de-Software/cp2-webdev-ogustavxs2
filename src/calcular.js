// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  // TODO: implementar função
  if (isNaN(num1)) {
    return "Erro: parâmetros inválidos"
  } else if (isNaN(num2)) {
    return "Erro: parâmetros inválidos"
  } else if (operador === "/" && Number(num2) === 0) {
    return "Erro: divisão por zero"
  } else if (operador === "+") {
    return Number(num1)+Number(num2)
  } else if (operador === "-") {
    return Number(num1)-Number(num2)
  } else if (operador === "*") {
    return Number(num1)*Number(num2)
  } else if (operador === "/") {
    return Number(num1)/Number(num2)
  } else {
    return "Erro: operação inválida"
  }
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };