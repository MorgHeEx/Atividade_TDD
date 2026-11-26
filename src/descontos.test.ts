import { describe, expect, it } from 'vitest';
import { calcularDesconto } from './descontos';

describe('sistema de descontos', () => {
  it.each([
    [50, 50],
    [100, 90],
    [150, 135],
    [200, 160],
    [250, 200],
    [199.99, 179.99],
  ])('calcula o valor final para uma compra de R$ %s', (compra, valorFinal) => {
    expect(calcularDesconto(compra)).toBe(valorFinal);
  });
});
