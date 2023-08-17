// (1152-2) / 10 => 115
// (115-5) / 10 => 11
// (11-1) / 10 => 1
// (1-1) / 10 => 0
let n = Number(prompt("Enter number"));
let sum = 0;
while (n) {
  let remainder = n % 10;
  n = (n - remainder) / 10; 
  sum = sum + remainder;
}
console.log(sum);