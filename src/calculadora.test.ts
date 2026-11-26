import { describe, expect, it } from 'vitest';
import { dividir, multiplicar, somar, subtrair } from './calculadora';

describe('calculadora de operações', () => {
  it('soma 3 e 5', () => {
    expect(somar(3, 5)).toBe(8);
  });

  it('subtrai 4 de 10', () => {
    expect(subtrair(10, 4)).toBe(6);
  });

  it('multiplica 4 por 3', () => {
    expect(multiplicar(4, 3)).toBe(12);
  });

  it('divide 10 por 2', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  it('informa erro ao dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Divisão por zero');
  });
});
