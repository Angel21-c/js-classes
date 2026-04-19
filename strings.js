//STRING METHODS

//slice and substring
let testString = 'my name is Priceless!'
let slicedString = testString.slice(0, 10);
let substringString = testString.substring(0,10);
console.log(slicedString);
console.log(substringString);

slicedString = testString.slice(12);
substringString = testString.substring(11);
console.log(slicedString);
console.log(substringString);

slicedString = testString.slice(-6);
substringString = testString.substring(-6);
console.log(slicedString);
console.log(substringString);

//replace and replaceAll
let text = "Esther is a techie. Esther loves coding, Esther loves teaching.";
let replacedText = text.replace("Esther", "She");
let replacedAllText = text.replaceAll("Esther", "She");
console.log(replacedText);
console.log(replacedAllText);

//split
const sentence = "LANGUAGES: Javascript, Python, Java, C++";
let splitSentence = sentence.split(",");// This looks for where there is a comma and splits it into a single word
console.log(splitSentence);
splitSentence =sentence.split(" ");// This looks for where there is space and splits it into diiferent items on the array; split converts to an array
console.log(splitSentence);

splitSentence = sentence.split(""); //This will separate the letters individually
console.log(splitSentence);

//NOTE: Any separator you use, it'd split from that separator and still remove that separator
let example = "she is a girl, she is a teacher, she is eating";
console.log(example.split('she'))

