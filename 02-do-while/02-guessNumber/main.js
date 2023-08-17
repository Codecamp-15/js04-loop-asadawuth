let num1 = "";
let num2 = "";
let count = 0;
let isEmpty;
let isNan;
let outOfRange;

// ทายได้ไม่เกิน 5 ครั้ง

do {
  num1 = prompt("Enter your Number") || "";
  isEmpty = num1.trim() === "";
  isNan = isNaN(num1);
  outOfRange = Number(num1) < 1 || Number(num1) > 99;
  if (isEmpty || isNan) {
    alert("Invalid Input, Try 1-99");
  } else if (outOfRange) {
    alert("Invalid Range, Try 1-99");
  }
} while (isEmpty || isNan);

do {
  num2 = prompt("Enter your Answer") || "";
  isEmpty = num2.trim() === "";
  isNan = isNaN(num2);
  outOfRange = Number(num2) < 1 || Number(num2) > 99;
  if (isEmpty || isNan) {
    alert("Invalid Input, Try 1-99");
  } else if (outOfRange) {
    alert("Invalid Range, Try 1-99");
  } else if (count > 5) {
    alert("Don't answer more than 5 times");
    break;
  } else if (+num1 > +num2) {
    alert("Answer Too Low");
    count += 1;
  } else if (+num1 < +num2) {
    alert("Answer Too High");
    count += 1;
  } else if (+num1 == +num2) {
    alert(`Correct : Count = ${count}`);
  }
} while (+num1 != +num2);
