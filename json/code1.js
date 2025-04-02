function extractAndReverse(arr){
    let subarray=arr.slice(2,5);
    let reversedsubarray=subarray.reverse();
    return reversedsubarray;
  }
  let orignal=[15,30,45,60,75,90];
  console.log(extractAndReverse(orignal))
  console.log(orignal)