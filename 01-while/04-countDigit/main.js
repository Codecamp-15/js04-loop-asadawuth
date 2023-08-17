let num = prompt('Enter a Number')
//console.log(num.trim().length)

let count = 0

while(num >= 1) {
    console.log(num)
    num /= 10
    count++
}
console.log(num)