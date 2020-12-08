class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User("John", "Flood", "jflood215@gmail.com");
console.log(userOne.first); // undefined
console.log(userOne.f); // John
console.log(userOne.l); // Flood
console.log(userOne); // Returns User object

class Cars {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

let newCar = new Cars("Tesla", "Model 3");

console.log(newCar.make);
console.log(newCar.make , newCar.model);