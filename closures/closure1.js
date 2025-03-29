function outerFunction(){
    let message="Hello,this is outerFunction";
    return function(){
      console.log(message)
    }
  }
  let outer=outerFunction();
  outer()
  