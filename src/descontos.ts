const LIMITE_DESCONTO_INTERMEDIARIO = 100;
const LIMITE_DESCONTO_MAXIMO = 200;

export function calcularDesconto(valorCompra: number): number {
  let percentualDesconto = 0;

  if (valorCompra >= LIMITE_DESCONTO_MAXIMO) {
    percentualDesconto = 0.2;
  } else if (valorCompra >= LIMITE_DESCONTO_INTERMEDIARIO) {
    percentualDesconto = 0.1;
  }

  return Number((valorCompra * (1 - percentualDesconto)).toFixed(2));
}
