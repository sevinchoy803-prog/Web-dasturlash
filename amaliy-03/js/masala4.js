// 4-masala. sozlarSanogi(s) — gapdagi har bir so'z necha marta uchrashini obyekt ko'rinishida qaytaradi.
// Yechim: gapni kichik harfga o'tkazib, bo'shliq bo'yicha bo'laman; har bir so'z uchun obyektdagi sanog'ini 1 ga oshiraman.
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

// Tekshiruvlar
console.log(sozlarSanogi("olma nok Olma uzum nok olma"));  // kutilgan: { olma: 3, nok: 2, uzum: 1 }
console.log(sozlarSanogi("Salom salom SALOM"));            // kutilgan: { salom: 3 } (o'z misolim: katta-kichik harf farqlanmaydi)
console.log(sozlarSanogi("bir  ikki"));                    // kutilgan: { bir: 1, ikki: 1 } (ikkita bo'shliq)
console.log(sozlarSanogi(""));                             // kutilgan: {} (chegaraviy holat: bo'sh gap)
