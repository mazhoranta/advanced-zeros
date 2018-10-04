module.exports = function getZerosCount(number, base) {
  const baseDivisors = [];
  for (let i = 2; i <= base; i++) {
    let pow = 0;
    while (base % i == 0) {
      pow++;
      base /= i;
    }

    if (pow > 0) {
      baseDivisors.push([i, pow]);
    }
  }
  const zeros = [];
  baseDivisors.forEach((divisor) => {
    const prime = divisor[0],
          pow = divisor[1];
    let zerosCount = 0;
    for (let i = prime; number / i >= 1; i *= prime) {
      zerosCount += Math.floor(number / i);
    }
    zerosCount /= pow;
    zeros.push(Math.floor(zerosCount));
  });

  return Math.min(...zeros);
}