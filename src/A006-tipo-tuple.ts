//Arrays Tuplas
const dadosClient: [number, string] = [1, 'Bruno'];
const dadosClient2: [number, string, string] = [1, 'Bruno', 'Sajermann'];
const dadosClient3: [number, string, string?] = [1, 'Bruno'];
const dadosClient4: [number, string, ...string[]] = [
  1,
  'Bruno',
  'Sajermann',
  'Da',
  'Silva',
];
const dadosClient5: readonly [number, string, string?] = [1, 'Jubileu'];

//Arrays comuns readonly
const dadosClient6: readonly string[] = ['1', 'Jubileu'];
const dadosClient7: ReadonlyArray<string> = ['1', 'Jubileu'];

dadosClient[0] = 100;
dadosClient[1] = 'Sajermann';
console.log(dadosClient);
console.log(dadosClient2);
console.log(dadosClient3);
console.log(dadosClient4);
console.log(dadosClient5);
console.log(dadosClient6);
console.log(dadosClient7);
