function canFormPalindrome(str) {
    let charCount = {};
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    let oddCount = 0;
    for (let char in charCount) {
      if (charCount[char] % 2 !== 0) {
        oddCount++;
      }
    }
    return oddCount <= 1;
  }
  console.log(canFormPalindrome("civic"));    
  console.log(canFormPalindrome("ivicc"));    
  console.log(canFormPalindrome("hello"));    
  console.log(canFormPalindrome("aabbccdd")); 