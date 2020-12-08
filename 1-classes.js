// JS Classes

// Always uppercase class name
// Then add a constructor
// Then add any additional methods
class User {
  constructor(name) {
    this.name = name;
    this.type = "Trial User";
  }

  //Method 1

  greet() {
    console.log("Welcome back, " + this.name);
  }

  //Method 2

  status() {
    console.log("Current status: " + this.type);
  }
}

// Instance of the class/new object
let anonDude = new User("Annonymous dude");

//we can now use the instance and the . operator
// to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
let anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//Another instance of the class
let jeff = new User("Jeff");
jeff.greet();
jeff.status();

//One more from memory

let john = new User("John");
john.greet();
john.status();

// From the video

class Student {
  grades = [];
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    console.log(`Hello ${this.firstName}`);
  }
  addGrades(...grade) {
    // console.log("from spread", grade);
    this.grades = [...this.grades, ...grade];
    // this.grades.push(grade);
    this.showGrades();
  }
  showGrades() {
    console.log(this.grades);
  }
}

let student1 = new Student("John", "Flood");
let student2 = new Student("Brenda", "Hawthorne");

student1.greeting();
student2.greeting();

student1.addGrades(93, 45, 89);
student1.addGrades(25, 13, 99, 67);
student2.showGrades();

// Prototype Inheritance

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true

/*
Try writing a Player class with three properties of name, number, and average points. Or try writing a Car class with make, model, and year. Whatever you do, make sure you have a firm grip on constructors before you go on. You can do all this in the same file.
*/

class Player {
  constructor(name, number, points) {
    this.name = name;
    this.number = number;
    this.points = points;
  }
  intro() {
    console.log(
      "Hi " + this.name,
      "youre number is " + this.number,
      "and you averaged " + this.points,
      "points per game"
    );
  }
}

let example = new Player("John", 33, 25.5);
example.intro();
