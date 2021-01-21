type MapStringsCallback = (item: string) => string;

export function mapString(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArrray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArrray.push(callbackfn(item));
  }

  return newArrray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toUpperCase());
console.log(abcMapped);
