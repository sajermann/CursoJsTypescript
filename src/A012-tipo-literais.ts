import { escolhaACor } from './A009-tipo-enum';

let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a: 100 = 100; // eslint-disable-line
let b = 100 as const; // eslint-disable-line

const pessoa = {
  nome: 'Bruno' as const,
  sobrenome: 'Sajermann',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Amarelo'));

export default 1;
