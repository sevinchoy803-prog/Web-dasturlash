function sozlarSanogi(s) {
  const sanoq = {};
  const sozlar = s.toLowerCase().split(" ");
  for (const soz of sozlar) {
    if (soz === "") {
      continue;
    }
    if (sanoq[soz] === undefined) {
      sanoq[soz] = 1;
    } else {
      sanoq[soz]++;
    }
  }
  return sanoq;
}

console.log(sozlarSanogi("olma nok Olma uzum nok olma"));
console.log(sozlarSanogi("Salom salom SALOM"));
console.log(sozlarSanogi("bir  ikki"));
console.log(sozlarSanogi(""));
