let num = +prompt("num");
let num2 = 0;
do {
    num2 = num2 + num
    num = +prompt("num");
    console.log(num)
}while (!isNaN(num))
  console.log(num2)