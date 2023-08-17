/*let num = 0;
for (let i = 1; i <= 100; i++) {
    num = num + i
    console.log(num)
}*/

/*let even = 0;
let odd = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        even = even + i
    }
    else if(i % 2 !== 0) {
        odd = odd + i
    }
}
console.log(` Is even ${even}`) 
console.log(` Is odd ${odd} `)  */

let sumEvenSquare = 0;
let sumThirdSquare = 0;
let num = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0 ) {
       sumEvenSquare = sumEvenSquare + (i ** 2) 
    }
    if (i % 3 === 0) {
       sumThirdSquare = sumThirdSquare + (i ** 2)   
}
          num = sumEvenSquare - sumThirdSquare 
}
console.log(`sumEvenSQ : ${sumEvenSquare}`);
console.log(`sumoddSQ : ${sumThirdSquare}`);
console.log(`Result is : ${sumEvenSquare - sumThirdSquare}`); 