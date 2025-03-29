const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let counts=categories.reduce((acc,category)=>{
  acc[category]=acc[category]+1||1;
  return acc;
}, 
{});
console.log(counts);