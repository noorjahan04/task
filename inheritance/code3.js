// we have to create Car constructor function to create car objects
function Car(make, model, year, isAvailable = true) {
    this.make=make;
    this.model=model;
    this.year=year;
    this.isAvailable=isAvailable;
}
// Customer constructor function
function Customer(name) {
    this.name=name;
    this.rentedCars=[];
}
// Method to rent a car
Customer.prototype.rentCar=function(car){
    if(car.isAvailable){
        car.isAvailable=false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented ${car.make} ${car.model}.`);
    } else {
        console.log(`${car.make} ${car.model} is already rented.`);
    }
};
// Method to return a car with a delay
Customer.prototype.returnCar=function(car){
    setTimeout(()=>{
        car.isAvailable=true;
        this.rentedCars=this.rentedCars.filter(c=>c!==car);
        console.log(`${this.name} returned ${car.make} ${car.model}.`);
    }, 2000); // it Simulates 2 seconds delay
};
// PremiumCustomer constructor function (inherits from Customer)
function PremiumCustomer(name,discountRate) {
    Customer.call(this,name);
    this.discountRate = discountRate; // Additional discount property
}
// Inherit Customer methods
PremiumCustomer.prototype=Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor=PremiumCustomer;
// Function to calculate rental price based on car type and premium discount
function calculateRentalPrice(carType, days, customer) {
    const baseRate=50;
    const typeRates={SUV:70, Sedan:50, Hatchback:40};
     let price=(typeRates[carType] || baseRate)*days;
    if(customer instanceof PremiumCustomer){
        price*=(1-customer.discountRate/100); // Apply discount
    }
    return price;
}
// Function to handle car maintenance with a delay
function Maintenance(car,delay) {
    setTimeout(()=>{
        car.isAvailable=true;
        console.log(`${car.make} ${car.model} is available after maintenance.`);
    }, delay);
}// Demonstration
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2019);
const customer1 = new Customer("Bob");
const premiumCustomer1 = new PremiumCustomer("Alice", 10);
customer1.rentCar(car1);
console.log(`Rental price for Corolla (3 days): $${calculateRentalPrice("Sedan", 3, customer1)}`);
premiumCustomer1.rentCar(car2);
console.log(`Rental price for Civic (5 days) with discount: $${calculateRentalPrice("Sedan", 5, premiumCustomer1)}`);
customer1.returnCar(car1);
Maintenance(car1, 3000); // Simulate maintenance with delay