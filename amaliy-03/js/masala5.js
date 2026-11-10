// 5-masala. tekislash(arr) — bir daraja ichma-ich massivni oddiy massivga aylantiradi (flat() ishlatilmaydi).
// Yechim: arr elementlarini aylanaman; element massiv bo'lsa, uning ichidagilarni birma-bir, bo'lmasa o'zini natijaga qo'shaman.
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

// Tekshiruvlar
console.log(tekislash([1, [2, 3], [4, 5], 6]));   // kutilgan: [1, 2, 3, 4, 5, 6]
console.log(tekislash([[7], [], 8]));             // kutilgan: [7, 8]
console.log(tekislash([[1, 2], 3, [4]]));         // kutilgan: [1, 2, 3, 4] (o'z misolim)
console.log(tekislash([]));                       // kutilgan: [] (chegaraviy holat: bo'sh massiv)
