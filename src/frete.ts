const LIMITE_FRETE_REDUZIDO = 100;
const LIMITE_FRETE_GRATUITO = 200;

export function calcularFrete(valorCompra: number): number {
  if (valorCompra >= LIMITE_FRETE_GRATUITO) {
    return 0;
  }

  if (valorCompra >= LIMITE_FRETE_REDUZIDO) {
    return 10;
  }

  return 20;
}
