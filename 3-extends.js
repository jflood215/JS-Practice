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

  
  function doSomething(){}
console.log( doSomething.prototype );
//  It does not matter how you declare the function, a
//  function in JavaScript will always have a default
//  prototype property.
//  (Ps: There is one exception that arrow function doesn't have a default prototype property)

// Extends

class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
    }
}

// Instance of User class
let anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

// Instance of TrialUser class

let trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User {
    trialBanned(){
        console.log('You have been banned from this trial and program.');
    }
}

let bannedUser = new BannedUser("Solomon");
bannedUser.trialBanned();