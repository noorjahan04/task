function longestCommonPrefix(arr) {
    if (arr.length == 0) {
      console.log('""'); 
      return;
    }
  
    let prefix = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      while (arr[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1); 
        if (prefix === "") {
          console.log('""'); 
          return;
        }
      }
    }
    console.log(`"${prefix}"`); 
  }
  longestCommonPrefix(["flower", "flow", "flight"]);
  longestCommonPrefix(["dog", "racecar", "car"]);   
  longestCommonPrefix(["interspecies", "interstellar", "interstate"]); 