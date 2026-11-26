export function calcularMedia(a: number, b: number): number {
  var resultadoMedia = (a + b) / 2;
  return resultadoMedia;
}
/*
export function statusAprovado(statusAprovado: number): string {
  return statusAprovado >= 7 ? 'Aprovado' : 'Reprovado';
}
*/

export function verificarSituacao (a: number, b: number): string {
  var result = (a+b)/2;
  if (result >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}