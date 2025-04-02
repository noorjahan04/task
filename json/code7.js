function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
  }
  let orignal={name:"Alice",hobbies:["reading","traveling"]}
  let clone=deepClone(orignal);
  clone.hobbies.push("coding");
  console.log("orignal:",orignal)
  console.log("Clone:",clone)