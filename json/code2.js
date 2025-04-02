function filterEvenNymbers(arr){
    return arr.filter(num=>num%2==0);
  }
  function sumOfArray(arr){
    return arr.reduce((sum,num)=>sum+num,0)
  }
  function sortAndConcat(arr1,arr2){
    let A1=arr1.slice().sort((a,b)=>a-b);
    let A2=arr2.slice().sort((a,b)=>a-b);
    return A1.concat(A2);
  }
  let array1=[5,20,15,40,10];
  let array2=[25,35,30,50,45];
  console.log("Even Numbers:",filterEvenNymbers(array1))
  console.log("Sum of array:",sumOfArray(array1))
  console.log("Sorted and Merged:", sortAndConcat(array1,array2))