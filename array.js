//ARRAY METHODS

//HIGHER ORDER ARRAY METHODS: These take in functions as their parameters.

let items = ['milk', 'milo', 'rice', 1, 2, 4, true];

console.log(items[0]);
console.log(items.length);

let fruits = ["apple", "banana", 'orange', 'grape', 'mango'];

//forEach: This returns the array in a list. It loops through every item and does something. Does not return a new array.
//NOTE: Use console.log for forEach because you are printing out individual elements in that array and use return for map
fruits.forEach(function(fruit){
  console.log("I love " + fruit);
});

let names = ['ada', 'obi', 'ngozi', 'funke', 'tolu'];
names.forEach(function(name){
  console.log('TECH_CRUSH_2026_COHORT_6 ' + name);
}); //declarative/name function

//map changes the array to a new one
let scores = [90, 80, 70, 60, 50];
let newScores = scores.map(score => score + 5);
console.log(newScores);

newScores = scores.map(x => {
  console.log('As a good teacher, i decided to add five marks to all my students')
  return x + 5;
})
console.log(newScores);

let students = ['esther', 'john', 'ngozi', 'ebele', 'chinwe'];
let newStudScore = students.map(student => 'TECH_CRUSH ' + student);
console.log(newStudScore);

//filter method: This retuns all the values in an array that matches the condition
let jambScores = [200, 250, 300, 150, 280, 290, 100];
let passed = jambScores.filter(score => score >= 200);
console.log(passed);

//find returns the first item in the array that matches a condition; if nothing is found, it returns undefined

const studentsNames = ['john', 'Ada', 'doe', 'jane', 'smith', 'bola', 'john'];
const found = studentsNames.find(foundName => foundName == 'john');
console.log(found);

//NOTE: Replace is a string method and find is an array method.

//reduce: This boils down the values in an array into one value

let cartPrice = [1500, 800, 2200, 450, 1000];

let total = cartPrice.reduce(function(acc, curr){return acc + curr}, 0);
console.log(total);

let grandTotal = cartPrice.reduce((acc, curr) => acc + curr);
console.log(grandTotal);

//LOWER ORDER ARRAY METHODS: These are normal array methods used to perform simple operations.

//push: This is used to add an element at the end of an array.
let colors = ['red', 'blue', 'green'];
let addColor = colors.push('yellow');
console.log(addColor);
console.log(colors);
//NOTE:push and unShift returns the number of the array after performing the action. 

//pop: This removes the last element on the array. It dosen't take in a parameter.
let lastColor = colors.pop();
console.log(lastColor);
console.log(colors);

//unshift: This adds an element to the beginning in an array
let newLength = colors.unshift('pink');
console.log(newLength);
console.log(colors);
//NOTE: unShift returns the number of the array after performing the action. 

//shift: This removes the first element in an array.
let firstColor = colors.shift();
console.log(firstColor);
console.log(colors);

//CLASSWORK

//Using the map method, create a new array where each number is doubled.
const numbers = [1, 2, 3, 4, 5];

let doubledNumber = numbers.map(function(number){return number * 2});
console.log(doubledNumber);

//Question 2: return scores greater than or equal to 300
const scores1 = [250, 300, 350, 200, 400, 180, 160];

let greaterThan300 = scores1.filter(score => score >= 300);

console.log(greaterThan300);

//question 3: get me the sum of all items in the array
const sum1 = [2000, 3000, 400, 100, 600];

let addedNumbers = sum1.reduce((acc, curr) => {return acc + curr}, 0);

console.log(addedNumbers);

//question 4: add "green" to the end of the array and remove "red"
const colors1 = ['blue', 'yellow', 'red'];

colors1.pop();
colors1.push('green');
console.log(colors1);