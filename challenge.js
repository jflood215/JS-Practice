// let myArray = [
//   [1, "Today "],
//   [1, "is "],
//   [0, "going"],
//   [1, "to be "],
//   [0, "a "],
//   [0, "good "],
//   [1, "day."],
// ];

// let sentence = "";
// for (i of myArray) {
//   let [num, word] = i;
//   sentence = sentence + word;
// }
// console.log(sentence);

// Write a loop that will console log the sentence so it reads
// Today is going to be a good day.
// let sentence = "";
// myArray.forEach((word) => (sentence = sentence + word[1]));
// // for (let i = 0; i < myArray.length; i++) {
// //   sentence = sentence + myArray[i][1];

// console.log(sentence);

// console.log(sentence);


let myArray = [[1, "Today "], [1, "is "], [0, "going"], [1, "to be "], [0, 'a '], [0, "good "], [1, "day."]]



// Write a loop that will console log the sentence so it reads

// Today is going to be a good day.



let sentence = ""



myArray.forEach(word => {

  const [num, phrase] = word

  sentence = sentence + phrase

})

console.log(sentence)

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    i % 3 === 0 || i % 5 === 0 ? sum += i : NaN
  }
  // return sum
  console.log(sum)
}

solution(10);