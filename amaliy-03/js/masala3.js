// 3-masala. takrorlanishSoni(arr, x) — x qiymat massivda necha marta uchrashini qaytaradi.
// Yechim: massivni aylanaman va element x ga teng bo'lsa (===) hisoblagichni 1 ga oshiraman.
function takrorlanishSoni(arr, x) {
  let soni = 0;
  for (const element of arr) {
    if (element === x) {
      soni++;
    }
  }
  return soni;
}

// Tekshiruvlar
console.log(takrorlanishSoni([1, 2, 2, 3, 2], 2));     // kutilgan: 3
console.log(takrorlanishSoni(["a", "b"], "c"));        // kutilgan: 0
console.log(takrorlanishSoni(["js", "html", "js"], "js")); // kutilgan: 2 (o'z misolim)
console.log(takrorlanishSoni([], 5));                  // kutilgan: 0 (chegaraviy holat: bo'sh massiv)
