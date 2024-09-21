function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printCompositeNumbers() {
  for (let i = 2; i <= 50; i++) {
    if (!isPrime(i)) {
      console.log(i);
    }
  }
}

printCompositeNumbers();

//2
let num = 223344556;
let strNum = num.toString();
let sum = 0;
let countedDigits = {};

for (let i = 0; i < strNum.length; i++) {
  let digit = strNum[i];
  if (!countedDigits[digit]) {
    let occurrences = strNum.split(digit).length - 1;
    if (occurrences > 1) {
      sum += parseInt(digit);
    }
    countedDigits[digit] = true;
  }
}

console.log("Yig'indi:", sum);

//3

let n = 8;

for (let i = n - 1; i > 0; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//4
for (let i = 1; i <= 10; i++) {
  console.log("1 to 10 kublari  " + i ** 3);
}
