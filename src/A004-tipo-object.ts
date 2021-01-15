const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

const objetoB: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

const objetoC: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro Valor';

console.log(objetoA);
