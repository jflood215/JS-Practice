// ES6 JS Classes
class User {
  constructor(username, password) {
    this.name = username;
    this.password = password;
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
let anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//super
class BronzeLevelUser extends User {
  //We add the ccinfo property to the user here.
  constructor(username, password, ccinfo) {
    //If you are going to use 'this' in your constructor, you must have
    // super that points to the parent constructor.
    super(username, password);
    //The 'this' keyword wouldn't work without super.
    this.type = "Bronze User";
    this.ccinfo = ccinfo;
  }

  getInfo() {
    console.log(this.username, this.password, this.type, this.ccinfo);
  }
}

let bronzeGuy = new BronzeLevelUser(
  "Bronze Dude",
  "bronze7589",
  "424242424242"
);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);

const makeToast = (breadType, topping1, topping2) => {
  return `I had ${breadType} toast with ${topping1} and ${topping2}`;
};

console.log();

const ingredients = ["wheat", "butter", "jam"];
makeToast(...ingredients);
// "I had wheat toast with butter and jam"

makeToast(...["sourdough", "avocado", "kale"]);
// "I had sourdough toast with avocado and kale"
