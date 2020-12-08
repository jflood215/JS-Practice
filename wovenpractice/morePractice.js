// Includes method
// Will return true or false

const array1 = [1, 2, 3, 'dog'];

console.log(array1.includes(typeof Number));

const pets = ["cat", "dog", "turtle"];

console.log(pets.includes("dog"));

/*
Create an empty array to house our Lotto numbers
Use a while loop to create an array that has 5 random numbers in it.
Random Numbers can only be 1-10
Add the random numbers to the array
Only accept numbers that are not in the array anymore
*/

let lottoNumbers = [];
while (lottoNumbers.length < 5) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let doesNumberExist = lottoNumbers.includes(randomNumber);
  console.log(doesNumberExist);

  if (!doesNumberExist) {
    lottoNumbers.push(randomNumber);
  }
}

console.log(lottoNumbers.sort((a, b) => a - b));

// Sorting will change the original array

// Filter

function createCheckDigit(membershipId) {
   // Write the code that goes here.
   let numbers = membershipId.split("")
   let sum = 0;
   for (i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i]);
  }
  return sum;
}

  
  console.log(createCheckDigit("55555"));
  console.log(createCheckDigit("4812863"));

  /*
Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

Examples
repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]

repeat(13, 5) ➞ [13, 13, 13, 13, 13]

repeat("7", 2) ➞ ["7", "7"]

repeat(0, 0) ➞ []
  */

function repeat(item, times) {
	return Array(times).fill(item);
}

console.log(repeating('John', 3));

//

function repeat(item, times) {
	let a = [];
	for (let i = 0; i<times; i++){
		a.push(item)
	}
	return a
}

  /////////////////////////////////////////////////////////////////////

  /*

Spellcheck:

The following can be spellchecked:

Text values in input elements (not password)
Text in <textarea> elements
Text in editable elements

<p contenteditable="true" spellcheck="true">This is a praggagraph. It is editable. Try to change the text.</p>

First name: <input type="text" name="fname" spellcheck="true">

------

<!Doctype html>
<html>
    <head>
        <title>
            HTML5 Spell check attribute
        </title>
    </head>
    <body>
        <form>
            <textarea style="width:300px;height:150px;border:1 em solid black" spellcheck="false"
                contenteditable="true">spell check off</textarea><br/>
                <textarea style="width:300px;height:150px;border:1 em solid black" spellcheck="true"
                contenteditable="true">spell check on</textarea><br/>
                
        </form>
    </body>


-----------------------------------------------------

Tooltip:










-----------------------------------------------------

CSS Text:

#para1:after {
content: "Johnny was the best seed planter ever. He mostly donated his apples to children of coders."
" Source: Wikipedia.org";
}



  */


 function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (let letter of str)
    if (vowels.includes(letter)){
      vowelsCount++;
    
    console.log(vowelsCount)
  }
  return vowelsCount;
}

getCount('abracadabra');

// Value types vs. Reference types

// Value types = number, string, boolean, undefined, null
// Reference types = object, function, array

let x = 10;
let y = x;

x = 20; // now y still equals 10 - they are independent

// Reference type
let a = { value: 10 };
let b = a;

a.value = 20;

// b now equals 20 becuase memory location is copied and not the variable

// Primitives are copied by value, Reference types are copied by memory location

// Value types have local scope and reference types have global scope

// Date object

