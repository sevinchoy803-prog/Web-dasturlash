function takrorlanishSoni(arr, x) {
  let soni = 0;
  for (const element of arr) {
    if (element === x) {
      soni++;
    }
  }
  return soni;
}

console.log(takrorlanishSoni([1, 2, 2, 3, 2], 2));
console.log(takrorlanishSoni(["a", "b"], "c"));
console.log(takrorlanishSoni(["js", "html", "js"], "js"));
console.log(takrorlanishSoni([], 5));
