// 2-masala. raqamlarniAjrat(s) — satrdagi barcha raqamlarni tartib bilan bitta satr qilib qaytaradi.
// Yechim: satrni belgima-belgi aylanaman; belgi "0" va "9" oralig'ida bo'lsa, natijaga qo'shaman.
function raqamlarniAjrat(s) {
  let natija = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      natija += s[i];
    }
  }
  return natija;
}

// Tekshiruvlar
console.log(raqamlarniAjrat("Xona 305, qavat 3"));   // kutilgan: "3053"
console.log(raqamlarniAjrat("raqamsiz"));            // kutilgan: "" (bo'sh satr)
console.log(raqamlarniAjrat("a1b2c3"));              // kutilgan: "123" (o'z misolim)
console.log(raqamlarniAjrat(""));                    // kutilgan: "" (chegaraviy holat: bo'sh kirish)
