function reverseTraversal(matrix) {
    let n = matrix.length;
    let bag = [];
    for (let i = n - 1; i >= 0; i--) {
      bag.push(matrix[i][0]);
    }
    for (let j = 1; j < n; j++) {
      bag.push(matrix[0][j]);
    }
    for (let i = 1; i < n; i++) {
      bag.push(matrix[i][n - 1]);
    }
  
    return bag;
  }
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(reverseTraversal(matrix));