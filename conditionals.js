//if-else statements
let userAge = 16
if (userAge >= 18){
    console.log("welcome to club 9ja")
}else {
    console.log("sorry, you are not allowed to enter")
}

let gender = "non-binary"

if (gender === "female"){
    console.log("welcome to the ladies section")
}else if (gender === "male"){
    console.log("welcome to the male section")
}else if (gender === "other"){
    console.log("welcome to the other section")
}else {
    console.log("we don't know where you belong")
}


let username = "esther"
let password = "password123"

if(username === "esther" && password === "password123"){
    console.log("login successful")
}else if (username === "esther" || password === "password123"){
    console.log("username or password is correct")
}else {
    console.log("login failed")

}


let electionAge = 18
if (electionAge >= 18){
    console.log("you are eligible to vote")
}else {
    console.log("you are not eligible to vote")
}