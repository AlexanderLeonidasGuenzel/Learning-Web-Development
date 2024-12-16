//Tutorial Video No 2
console.log("typeof 'Alex': " + typeof "Alex");

//Tutorial Video No 3 - Strings
const myVariable = "Mathematics";
console.log(myVariable.length);
console.log("This is a long text!".length);
//String Methods
console.log(myVariable.charAt(0));
//IndexOF - First Occurrence
console.log("'mat': " + myVariable.indexOf("mat")); //character or group of characters. returns the position of first occurrence, it is case-sensitive! mat != Mat
console.log("'Mat': " + myVariable.indexOf("Mat")); //character or group of characters. returns the position of first occurrence, it is case-sensitive! mat != Mat
console.log("First 'at': " + myVariable.indexOf("at")); //character or group of characters. returns the position of first occurrence, it is case-sensitive! mat != Mat
//LastIndexOf - Last occurrence
console.log("Last 'at': " + myVariable.lastIndexOf("at"));
//Slice
console.log(myVariable.slice(5, 8)); //not including the ending position!
//Upper- and Lowercase
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
//Include
console.log(myVariable.includes("div")); //return: false
console.log(myVariable.includes("mat")); //return: true
//Split
console.log(myVariable.split("e")); //return: (2) ['Math', 'matics'], the split character is not include in the resulting strings
console.log(myVariable.split("")); //return: (11) ['M', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's']
console.log("John, Jane, Jessi".split(",")); //return: (3) ['John', ' Jane', ' Jessi']
console.log("This is a long sentence".split(" ")); //return: (5) ['This', 'is', 'a', 'long', 'sentence']

//Tutorial Video No 4 - Numbers
const myInteger = 42; //Integer number
const myFloat = 42.01; //Floating point number
const myFloat2 = 42.0; // Acts like an integer if there are no digits other than 0 after the decimal point
const myString = "42";
console.log(myInteger === myString); //return: false
console.log(myInteger === myFloat2); //return: true
console.log(myString + 3); //return: 423
console.log(Number(myString) + 3); //return: 45
console.log(Number(myString) === myInteger); //return: true
console.log(Number("Alex")); //return: NaN (Not a Number)
console.log(Number(undefined)); //return: NaN (Not a Number)
console.log(Number(true)); //return: 1
console.log(Number(false)); //return: 0

//Number Methods
//Number.isInteger()
console.log(Number.isInteger(myInteger)); //return: true
console.log(Number.isInteger(myFloat2)); //return: true
//Number.parseFloat
console.log(myString); //text color white because it is a string
console.log(Number.parseFloat(myString)); //input: "42", output: 42  text color purple because it is a number now
console.log(Number.parseFloat("hi")); //return: NaN
console.log(Number.parseFloat("123abc")); //return: 123
//toFixed()
console.log(Number.parseFloat(myString).toFixed(2)); //input: "42", output: 42.00 (as string)
console.log(myFloat.toFixed(5)); //input: 42.01, output: 42.01000 (as string)
//Number.parseInt()
console.log(Number.parseInt(myString)); //input: "42", output: 42 (as number)
console.log(myFloat.toString()); //imput: 42.01, output: 42.01 (as string)
console.log(typeof myFloat.toString()); //output: string
console.log(typeof Number.parseFloat(myString)); //output: number
//Chaining = Using serveral methods chained together
console.log(Number.parseFloat(myString).toFixed(2));
//NaN (Not a Number)
console.log(Number("hi")); //output: NaN
//Number.isNaN
//whether the passed value is NaN AND its type is Number
console.log(Number.isNaN("hi")); //output: false
//global isNaN()
//whether a value is NaN or not
console.log(isNaN("hey")); //output: true

//Tutorial Video No 5 - Math Methods and Random Number
//MDN Math https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

//Math Methods and Properties
console.log(Math.PI); //output: 3.141592653589793

//trunc() vs round() vs ceil() vs floor()
console.log(Math.trunc(Math.PI)); //output: 3
console.log(Math.round(3.4)); //output: 3
console.log(Math.round(3.5)); //output: 4
console.log(Math.ceil(3.4)); //output: 4  -> rounds always up
console.log(Math.floor(3.6)); //output: 3 -> rounds always down
//trunc -> cuts floating point digits (same behaviour positiv and negative numbers)
//round -> usually rounding
//ceil -> always rounds up
//floor -> always rounds down

Math.trunc(4.9); // 4
Math.trunc(-4.9); // -4

Math.round(4.4); // 4
Math.round(4.5); // 5
Math.round(-4.4); // -4
Math.round(-4.5); // -4

Math.ceil(4.1); // 5
Math.ceil(-4.1); // -4

Math.floor(4.9); // 4
Math.floor(-4.9); // -5

//pow()
console.log(Math.pow(2, 4));
console.log(Math.pow(5, 3));

//min() and max()
console.log(Math.min(2, 14, 9, 7, 0.3, -5, 30.2)); //output: -5
console.log(Math.max(2, 14, 9, 7, 0.3, -5, 30.2)); //output: 30

//random()
console.log(Math.random()); // 0 to < 1 e.g. 0.8775020442336741

// RN From 1 to 10
console.log(Math.trunc(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
//same behaviour bedause random() is always a positive number
//don't use Math.ceil()!
