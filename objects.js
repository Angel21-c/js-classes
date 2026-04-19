//OBJECT
//NOTE: Array holds a list of different items; inside an array, you can have an object. while Object describes a thing. Object holds properties of an entity.

let obj = {
  name : "Esther",
  age : 25,
  profession : "Developer"
};

console.log(obj.name);
console.log(obj['profession']);

let employee = {
  name: "Tunde Balogun",
  role: "Frontend Developer",
  salary: 450000,
  city: "Lagos"
};


//DESTRUCTURING: This is a shortcut for pulling out values from an object and storing them in seperate variables. Instead of writing object.key many times, you extract them in one line.
let employee1 = {
  name: "Chiamaka Onyia",
  role: 'Frontend Developer',
  salary: '450000',
  city: 'Lagos'
};

//Without Destructuring
let name1 = employee.name;
let role1 = employee.role;

//With destructuring(Short and clean)
const { name, role, salary } = employee;

console.log(name);
console.log(role);
console.log(salary);

let courses = {
 CSC401 : 'Data Structures',
 CSC402: 'Algorithms',
 CSC403: 'Operating Systems',
 CSC404: 'Database Systems'
};

let {CSC401 : CSC400} = courses;
console.log(CSC400);

console.log(courses);

//SPREAD AND REST OPERATORS
let profile = { name: "Ada", age: 22};

//SPREAD: Expand/Copy
//Copy and add new properties
//It opens up an array or object and spreads its items out
let updatedProfile = {
  ...profile,
  city: 'Abuja'
};

console.log(updatedProfile); 

