function mukammalSon(n) {
  if (n < 2) {
    return false;
  }
  let yigindi = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      yigindi += i;
    }
  }
  return yigindi === n;
}

console.log(mukammalSon(28));
console.log(mukammalSon(12));
console.log(mukammalSon(6));
console.log(mukammalSon(1));
