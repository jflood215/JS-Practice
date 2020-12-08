// object literal better for NO methods

const circle = {
  radius: 1, // property
  location: {
    //property
    x: 1,
    y: 1,
  },
  draw: function () {
    //method
    console.log("draw");
  },
};

circle.draw();

// property holds values
// method defines logic method = behavior
// if key = value, remove value

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// return = Factory Function

const circle = createCircle(1);

Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// const another = new Circle(1);
// new creates an empty object
// 'this' will point to that object
// return the object from function

// new + 'this' = Constructor Function

// Constructor Property - Every object in JS has this property

// Primitives vs. Reference

// Prims = boolean, string, number, symbol, null, undefined
// Reference = object, array, function

let num = 10;

function increase(num) {
  num++;
  console.log(num); // 11
}

increase(num);
console.log(num); // 10 because of scope

//Primitives/Value types are stored by value, not variable

// However if you use a reference type like an object

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj.value); // 11 because it's a reference type so scope doesn't matter

///////

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

circle.location = { x: 1 };

let phrase = "john is the coolest programmer ever and his name is john";

console.log(phrase.includes('john'));
