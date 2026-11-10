function raqamlarniAjrat(s) {
  let natija = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      natija += s[i];
    }
  }
  return natija;
}

console.log(raqamlarniAjrat("Xona 305, qavat 3"));
console.log(raqamlarniAjrat("raqamsiz"));
console.log(raqamlarniAjrat("a1b2c3"));
console.log(raqamlarniAjrat(""));
