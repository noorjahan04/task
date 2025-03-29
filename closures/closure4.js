function createFunctionList(){
    let functions=[];
    for(let i=0;i<5;i++){
      functions.push(function(){
        console.log("Index:",i)
      });
    }
    return functions;
  }
  let functionList=createFunctionList()
  functionList[0]()
  functionList[1]()
  functionList[2]()
  functionList[3]()
  functionList[4]()