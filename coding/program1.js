let employees=[
    { name: "Alice", baseSalary: 5000, department: "Engineering", yearsOfService: 4, performanceScore: 8 },
    { name: "Bob", baseSalary: 4500, department: "Marketing", yearsOfService: 2, performanceScore: 7 },
    { name: "Charlie", baseSalary: 6000, department: "Engineering", yearsOfService: 7, performanceScore: 9 },
    { name: "Diana", baseSalary: 5500, department: "HR", yearsOfService: 3, performanceScore: 6 }
  ];
  for(let e of employees){
    e.salary=e.baseSalary;
  }
  let orignal=employees.reduce((sum,e)=>sum+e.salary,0);
  console.log("Orignal salary total:$"+orignal.toFixed(2));
  for(let e of employees){
    if(e.yearsOfService>=3)e.salary+=e.salary*0.05;
    if(e.performanceScore>=8)e.salary+=e.salary*0.24;
  }
  let afterBonus=employees.reduce((sum,e)=>sum+e.salary,0);
  console.log("After service and performance bonus:$"+afterBonus.toFixed(2));
  for(let e of employees){
    if(e.department=="Engineering")e.salary+=e.salary*0.15;
  }
  let afterDept=employees.reduce((sum,e)=>sum+e.salary,0);
  console.log("After department adjusments:$"+afterDept.toFixed(2))
  for(let e of employees){
    e.salary-=e.salary*0.07;
  }
  let final=employees.reduce((sum,e)=>sum+e.salary,0);
  console.log("Final salary after all calculation:$"+final.toFixed(2))