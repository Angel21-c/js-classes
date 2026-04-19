let str = "Coding is fun"
//extract the word "'coding' , 'fun' 'is"
let word = str.slice(0, 6)
console.log(word)
let fun = str.substring(10, 13)
console.log(fun)
console.log(str.slice(7 ,9))// the right answer


//challenge 2
const colors = "red, green, blue, yellow"
const comma = colors.split(",")
console.log(comma)
const joined = comma.join(" - ")
console.log(joined)

console.log('Ogbu Uzoma Esther'.split(' ').join("-"))

//challenge 3
const url = "/api/v1/users";
const slash = url.split("/")
const v1Index = slash[2]
console.log(slash)
console.log(v1Index)


//challenge 4: extract only "esther"
const matricNumber = "TECHCRUSH-ESTHER-2026"
const splitMatric = matricNumber.split("-")
console.log(splitMatric[1])