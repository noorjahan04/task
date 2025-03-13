function findMissingNumber(arr, N) {
    let expectedSum = (N * (N + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
      actualSum += arr[i];
    }
    return expectedSum - actualSum;
  }
  console.log(findMissingNumber([1, 2, 4, 5], 5));        
  console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); 