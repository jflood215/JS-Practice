const instructors = [
  { name: "Quincy", specialty: "Quantum Mechanics", medals: 2 },
  { name: "Kenn", specialty: "Norse Mythology", medals: 8 },
  { name: "Paul", specialty: "Tuvan throat singing", medals: 4 },
  { name: "Aaron", specialty: "Entomology", medals: 7 },
  { name: "Carolyn", specialty: "Fencing", medals: 5 },
  { name: "Tom", specialty: "Chemistry", medals: 3 },
];

//   let instructor_names = []

//   for (let i = 0; i < instructors.length; i++) {
//       if(instructors[i].medals >= 5){
//           instructor_names.push(instructors[i].name);
//       }
//   }
//   console.log(instructor_names);

// Now with .filter we can make the code more efficient like below:

const instructorNames = instructors.filter(
  (instructor) => instructor.medals >= 5
);
console.log(instructorNames); // How do I get to the names?

//   const instructorInfo = instructors.filter
