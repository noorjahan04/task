function findMajorityElement(arr) {
    let candidate = null;
    let count = 0;
    for (let num of arr) {
        if (count === 0) {
            candidate = num; 
        }
        count += (num === candidate) ? 1 : -1;
    }
    count = 0;
    for (let num of arr) {
        if (num === candidate) {
            count++;
        }
    }

    return count > Math.floor(arr.length / 2) ? candidate : null;
}
console.log(findMajorityElement([3, 3, 4, 2, 3, 3, 3])); 
console.log(findMajorityElement([1, 2, 3, 4, 5, 6]));   
console.log(findMajorityElement([7, 7, 7, 7, 2, 2, 7, 7])); 