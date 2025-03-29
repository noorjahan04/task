function createCounter(){
    let count=0;
    return{
      increment(){
        count+=1;
        return count;
      },
      getcount(){
        return count;
      }
    };
  }
  let counter=createCounter();
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.getcount());