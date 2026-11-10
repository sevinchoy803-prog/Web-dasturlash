function tekislash(arr) {
  const natija = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const ichki of element) {
        natija.push(ichki);
      }
    } else {
      natija.push(element);
    }
  }
  return natija;
}

console.log(tekislash([1, [2, 3], [4, 5], 6]));
console.log(tekislash([[7], [], 8]));
console.log(tekislash([[1, 2], 3, [4]]));
console.log(tekislash([]));
