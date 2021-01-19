enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores2 {
  VERMELHO = 100, // 0
  AZUL = 151, // 1
  AMARELO = 1, // 2
  ROXO = 'ROXO',
}

enum Cores2 {
  PRETO = 'PRETO',
}

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores2[151]);
console.log(Cores2['ROXO']);
console.log(Cores2);

escolhaACor(Cores.AMARELO);
