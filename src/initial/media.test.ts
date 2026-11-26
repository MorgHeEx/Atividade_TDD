import {test, expect} from 'vitest';
import { calcularMedia } from './media';
//import { statusAprovado } from './media';
import { verificarSituacao } from './media';

test('Calcular a media entre 2 numeros', () => {
  expect(calcularMedia(8, 9)).toBe(8.5);
});

/*CRIAR TESTE - APROVADO | REPROVADO
test('Status de aprovação', () => {
  var resultadoMedia;
  expect(statusAprovado(resultadoMedia)).toBe(resultadoMedia >= 7 ? 'Aprovado' : 'Reprovado');
});*/

test ('Retornar Aprovado',() => {
  expect(verificarSituacao(8,9)).toBe('Aprovado');
})
test ('Retornar Reprovado',() => {
  expect(verificarSituacao(4,5)).toBe('Reprovado');
})