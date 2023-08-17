function input(num) {
   for (let i = 2; i <= num; i++){
       if (i % 2 === 0 || i % 3 === 0) continue
       console.log(i)
   }
}