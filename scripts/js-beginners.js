//Tutorial Video No 2
console.log("typeof 'Alex': " + typeof "Alex");

//Tutorial Video No 3
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
