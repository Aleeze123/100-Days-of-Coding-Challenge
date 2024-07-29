//                                                🚀 Day 2 Challenge: Start Coding! 🚀
//Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
console.log("Albert Einstein once said The only source of knowledge is experience.");
// Question 2: Famous Quote 2: Repeat Exercie 1, but this time store the famous person’s name in a variable called famous_person.
//  Then compose your message and store it in a new variable called message. Print your message.s
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said The only source of knowledge is experience.");
console.log(message);
// Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//  Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. 
//  Then print the name after stripping the white spaces.
var myName = "\t\n Aleeza \t\n"; // This saves the name with whitespace
console.log(myName); // Shows the name with whitespace
console.log(myName.trim()); // Shows the name without whitespace
