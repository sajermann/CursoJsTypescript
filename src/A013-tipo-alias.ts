type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preta';

type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Bruno',
  idade: 29,
  salario: 4000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(pessoa);
console.log(setCorPreferida(pessoa, 'Magenta'));
