function multiplyNumbers(a,b){
    return Math.max.apply(null,[a*b])
  }
  console.log(multiplyNumbers(5,3))
  console.log(multiplyNumbers(6,2))