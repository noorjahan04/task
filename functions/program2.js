function firstUniqueChar(str){
    for(let char of str){
      if(str.indexOf(char)==str.lastIndexOf(char)){
        console.log(char)
        return
      }
    }
    console.log(null)
  }
  firstUniqueChar("aabbccdeeff") 
  firstUniqueChar("xxyyzzaabb")
  firstUniqueChar("racecar")