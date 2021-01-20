type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // Ler Como AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Bruno',
  sobrenome: 'Sajermann',
};

console.log(pessoa);

export { pessoa };
