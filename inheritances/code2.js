//we have Define Person constructor function
function Person(name,age){
    this.name=name;
    this.age=age;
  }
  // we Add introduce method to Person prototype
  Person.prototype.introduce = function(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
  // we are defining Employee constructor function that inherits from Person
  function Employee(name,age,jobTitle){
    Person.call(this,name,age); // we are Calling Person constructor to inherit properties
    this.jobTitle=jobTitle;
  }
  // Seting up Employee prototype to inherit from Person prototype
  Employee.prototype=Object.create(Person.prototype);
  Employee.prototype.constructor=Employee;
  // Add work method to Employee prototype
  Employee.prototype.work=function(){
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  };
  // Demonstration
  const person1 = new Person("Alice", 25);
  const employee1 = new Employee("Bob", 30,"Software Engineer");
  
  person1.introduce();  // Output: Hi, my name is Alice and I am 25 years old.
  employee1.introduce(); // Output: Hi, my name is Bob and I am 30 years old.
  employee1.work();     // Output: Bob is working as a Software Engineer.