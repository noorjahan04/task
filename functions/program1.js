function findOutlier(arr) {
    let evencount = 0;
    let oddcount = 0;
    for (let i = 0; i < 3; i++) {
      if (arr[i] % 2 === 0) {
        evencount++;
      } else {
        oddcount++;
      }
    }
    let majority = evencount > oddcount;
    for (let num of arr) {
      if ((majority && num % 2 !== 0) || (!majority && num % 2 === 0)) {
        console.log(num); 
        return num; 
      }
    }
  }
  findOutlier([2, 4, 6, 8, 10,3]); 
  findOutlier([1, 3, 5, 7, 9,12]); 