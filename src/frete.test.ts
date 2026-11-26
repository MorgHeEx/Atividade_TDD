import { describe, expect, it } from 'vitest';
import { calcularFrete } from './frete';

describe('cálculo de frete', () => {
  it.each([
    [50, 20],
    [99.99, 20],
    [100, 10],
    [199.99, 10],
    [200, 0],
  ])('calcula o frete para uma compra de R$ %s', (compra, frete) => {
    expect(calcularFrete(compra)).toBe(frete);
  });
});
