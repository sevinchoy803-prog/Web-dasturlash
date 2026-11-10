// 1-masala. mukammalSon(n) — son o'zidan boshqa bo'luvchilari yig'indisiga tengmi?
// Yechim: 1 dan n/2 gacha sonlarni tekshirib, n ga qoldiqsiz bo'linadiganlarini qo'shaman; yig'indi n ga teng bo'lsa true.
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

// Tekshiruvlar
console.log(mukammalSon(28));    // kutilgan: true
console.log(mukammalSon(12));    // kutilgan: false
console.log(mukammalSon(6));     // kutilgan: true (o'z misolim: 1+2+3)
console.log(mukammalSon(1));     // kutilgan: false (chegaraviy holat: 1 ning boshqa bo'luvchisi yo'q)
