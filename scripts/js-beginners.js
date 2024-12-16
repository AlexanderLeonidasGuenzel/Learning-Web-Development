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
