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

//Tutorial Video No 6 - Problem Solving Code Challenge
//Output: random letter from your name

const myName = "Alexander";
const nameLength = myName.length;
const randomNumber = Math.floor(Math.random() * nameLength);
const randomLetter = myName.charAt(randomNumber);
console.log(randomLetter.toUpperCase());

//Tutorial Video No 7 - Conditionals: If-Statement
// let customerIsBanned = false;
// let soup = "Erbsensuppe";
// let reply;
// let crackers = true;
// if (customerIsBanned) {
//   reply = "No soup for you!";
// } else if (soup && crackers) {
//   reply = `Here's your order of ${soup} & crackers.`;
// } else if (soup) {
//   reply = `Here's your order of ${soup}`;
// } else {
//   reply = "Sorry, we're out of soup.";
// }
// console.log(reply);

//Tutorial Video No 8 - Switch Statements
switch (
  "2" //Switch  Statements need strikt matches. Has to be the same datatype!
) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("No match!");
} //output: No match!

switch (
  Number.parseInt("2") //Switch  Statements need strikt matches. Has to be the same datatype!
) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("No match!");
} //output: 2

let randomNumber2 = Math.floor(Math.random() * 4 + 1);
switch (randomNumber2) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("No match!");
} //output: 2

let playerOne = "scissors";
let computer = "rock";

switch (playerOne) {
  case computer:
    console.log("Tie game");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins!");
    }
    break;
  case "paper":
    if (computer === "scrissors") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins!");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins!");
    }
    break;
}

//Tutorial Video No 9 - Ternary Operator
//condition ? ifTrue : ifFalse;

// let soup2 = "Chicken Noodle Soup";  //output: case true
let soup2 = ""; //output: case false
let response = soup2 ? "Yes, we have soup." : "Sorry, no soup today.";
// console.log(response);

//Chaining of ternary operators
// let soup3 = "Kartoffelsuppe";
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned
//   ? "Sorry, no soup for you!"
//   : soup
//   ? `Yes, we have ${soup3} today.`
//   : "Sorry, no soup today.";
// console.log(soupAccess);

//Grading Scale Example
// let testScore = 92;
// let myGrade =
//   testScore > 89
//     ? "A"
//     : testScore > 79
//     ? "B"
//     : testScore > 69
//     ? "C"
//     : testScore > 59
//     ? "D"
//     : "F";
// console.log(`My test grade is a ${myGrade}.`);

//Rock, Paper, Scissors
// let playerOne2 = "rock";
// let computer2 = "paper";
// let result2 =
//   playerOne2 === computer2
//     ? "It's a tie!"
//     : playerOne2 === "scissors"
//     ? computer2 === "rock"
//       ? "Computer wins!"
//       : "PlayerOne wins!"
//     : playerOne2 === "paper"
//     ? computer2 === "scissors"
//       ? "Computer wins!"
//       : "PlayerOne wins!"
//     : computer2 === "paper"
//     ? "Computer wins!"
//     : "PlayerOne wins!";
// console.log(result2);

// let playerOne3 = "rock";
// let computer3 = "paper";
// let result3 =
//   playerOne3 === computer3
//     ? "It's a tie!"
//     : playerOne3 === "scissors" && computer3 === "rock"
//     ? "Computer wins!"
//     : playerOne3 === "paper" && computer3 === "scissors"
//     ? "Computer wins!"
//     : playerOne3 === "rock" && computer3 === "paper"
//     ? "Computer wins!"
//     : "PlayerOne wins!";
// console.log(result3);

//Tutorial Video No 10 - User Input (Popups)
// alert("Hello");
// confirm("Ok === True\nCancel === False");
//let myBoolean = confirm("Ok === True\nCancel === False");
//console.log(myBoolean);
//let name2 = prompt("Please enter your name."); //return types (ok => string | cancel => null)
// console.log(name2);
// console.log(typeof name2);

// if (name2) {
//   // (name2.length) not working with because cancel button returns null
//   console.log(name2 ?? "You didn't enter your name!"); //?? -> knowledge coleskine operator
// } else {
//   console.log("You didn't enter your name!");
// }

//whitespace handling with trim()
// if (name2) {
//   console.log(name2.length);
//   console.log(name2.trim().length);
//   console.log(name2.trim());
// } else {
//   console.log("You didn't enter your name!");
// }

//Tutorial Video No 11 - First Interactive Game (Rock,  Paper, Scissors)
console.clear();
// let playGame = confirm("Shall we play rock, paper, or scissors?");

// if (playGame) {
//   console.log("game started");
//   let playerChoice = prompt(
//     "Please choose between:\n  R (Rock)\n  P (Paper)\n  S (Scissors)"
//   );

//   if (playerChoice) {
//     playerChoice = playerChoice.toUpperCase().trim();
//     if (playerChoice === "R" || playerChoice === "P" || playerChoice == "S") {
//       let choice =
//         playerChoice === "R"
//           ? "rock"
//           : playerChoice === "P"
//           ? "paper"
//           : "scissors";
//       let rng = Math.random();
//       let randomRPC = Math.floor(rng * 3);
//       let computerChoice =
//         randomRPC === 0 ? "rock" : randomRPC === 1 ? "paper" : "scissors";

//       let playerOne4 = choice;
//       let computer4 = computerChoice;
//       let result4 =
//         playerOne4 === computer4
//           ? "It's a tie!"
//           : playerOne4 === "scissors" && computer4 === "rock"
//           ? "Computer wins!"
//           : playerOne4 === "paper" && computer4 === "scissors"
//           ? "Computer wins!"
//           : playerOne4 === "rock" && computer4 === "paper"
//           ? "Computer wins!"
//           : "PlayerOne wins!";
//       alert(` PlayerOne:  ${playerOne4}\n Computer: ${computer4}\n ${result4}`);
//       let playAgain = confirm("Play again?");
//       playAgain ? location.reload() : alert("Ok, thanks for playing!");
//     }
//   } else {
//     alert("You didn't enter R, P, or S!");
//   }
// } else {
//   alert("Ok, goodbye!");
// }

//Tutorial Video No 12 - Loops

//While Loop
// let initNumber = 0;
// while (initNumber < 50) {
//   console.log(initNumber);
//   initNumber++;
// }

//Do-While Loop
// let initNumber2 = 0;
// do {
//   initNumber2++;
//   console.log(initNumber2);
// } while (initNumber2 < 1);

//For-Loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// for (let i2 = 1; i2 <= 10; ) {
//   console.log(i2++);
// }

// let i3 = 0;
// for (; i3 < 10; ) {
//   console.log(++i3);
// }

// let actualName = "Alex";
// for (let c = 0; c < actualName.length; c++) {
//   console.log(actualName.charAt(c));
// }

//Infinite Loop with break statement
// let anotherName = "Tina";
// let counter = 0;
// let myLetter;
// while (true) {
//   myLetter = anotherName[counter];
//   console.log(myLetter);
//   if (myLetter === "n") {
//     break;
//   }
//   counter++;
// }
// let anotherName2 = "Tina";
// let counter2 = 0;
// let myLetter2;
// while (counter2 <= 3) {
//   myLetter2 = anotherName2[counter2];
//   console.log(myLetter2);
//   if (counter2 === 1) {
//     counter2 += 2;
//     continue;
//   }
//   if (myLetter2 === "n") {
//     break;
//   }
//   counter2++;
// }

//Tutorial Video No 13 - Functions
//Methods = Build-in functions!
//"Alex".toLowerCase();
//Math.random();

//Function Declaration Syntax:
// function sum() {
//   return 2 + 2;
// }
// console.log(sum());
// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(2, 6));
// function getUserNameFromEmail(email) {
//   return email.slice(0, email.indexOf("@"));
// }

// function getSecondLevelDomain(email) {
//   return email.slice(email.indexOf("@") + 1, email.indexOf(".com"));
// }

// function getTopLevelDomain(email) {
//   return email.slice(email.indexOf("."), email.length);
// }

// console.log(getUserNameFromEmail("playerOne@someRandomEmail.com"));
// console.log(getSecondLevelDomain("playerOne@someRandomEmail.com"));
// console.log(getTopLevelDomain("playerOne@someRandomEmail.com"));

//anonymus function - function without a name
// const getUserNameFromEmail2 = function (email) {
//   return email.slice(0, email.indexOf("@"));
// };
// console.log(getUserNameFromEmail2("playerTwo@someRandomEmail.com"));

//arrow function
// const getUserNameFromEmail3 = (email) => {
//   return email.slice(0, email.indexOf("@"));
// };
// console.log(getUserNameFromEmail3("playerThree@someRandomEmail.com"));

// const toProperCase = (nameForProperCase) => {
//   return (
//     nameForProperCase.charAt(0).toUpperCase() +
//     nameForProperCase.slice(1).toLowerCase()
//   );
// };
// console.log(toProperCase("aLEx"));

//Tutorial Video No 14 - Scope (var, let, const), Global, Local, Function, Block -> Scope
//var, let and const
//using "var" was common till 2015, legacy code
//no error thrown
// var x = 1;
// var x = 2;

//Uncaught SyntaxError: Identifier 'y' has already been declared
// let y = 1;
// let y = 2;

//reassignment ok
// let z = 1;
// z = 2;

//Uncaught TypeError: Assignment to constant variable.
// const xyz = 1;
// xyz = 2;

//Scope
//Global Scope
// var x = 1;
// let y = 2;
// const z = 3;

//Local Scope
//Block Scope
// {
//   let y = 4;
// }

//Function Scope
// function myFunc(){
//   const z = 5;
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunci() {
//   x = 10;
//   y = 4;
//   const z = 5;
//   {
//     var x = 11;
//     const z = 6;
//     console.log(`block: ${x}`);
//     console.log(`block: ${y}`);
//     console.log(`block: ${z}`);
//   }
//   console.log(`function: ${x}`);
//   console.log(`function: ${y}`);
//   console.log(`function: ${z}`);
// }
// myFunci();

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

//Tutorial Video No 15 - Arrays
const myArray = [];

//add elements to an arary
myArray[0] = "Alex";
myArray[1] = 1001;
myArray[2] = false;

//refer to an array
console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
console.log(myArray[1]);

//add more elements to an existing array
myArray.push("school");
console.log(myArray);

//remove something
myArray.pop();
console.log(myArray);
const lastItem = myArray.pop();
console.log(lastItem);

//unshift() pushes to the first position of an array
myArray.unshift(42);
console.log(myArray);

//shift() pops first item
const firstItem = myArray.shift();
const firstItem2 = myArray.shift();
console.log(firstItem);
console.log(firstItem2);
console.log(myArray);

//delete element
myArray[0] = "Alex";
myArray[1] = 1001;
myArray[2] = false;
delete myArray[1];
console.log(myArray);
//output:(3) ['Alex', empty, false]
console.log(myArray[1]);
//output: undefined

//splice() - remove amount of elements on specific position
//splice() - start, deleteCount, items
myArray.splice(1, 1);
console.log(myArray);
//output: (2) ['Alex', false]
//splice() replace element on that position
myArray.splice(1, 1, 42);
console.log(myArray);
//output: (2) ['Alex', 42]
//without deleting
myArray.splice(1, 0, 91);
console.log(myArray);

let someLetters = ["A", "B", "C", "D", "E", "F"];
const newLetters = someLetters.slice(2);
console.log(someLetters);
console.log(newLetters);
//output: (4) ['C', 'D', 'E', 'F']
const newLetters25 = someLetters.slice(2, 5);
console.log(newLetters25);
//output: (3) ['C', 'D', 'E']

//reverse()
console.log(someLetters.reverse());
//output: (6) ['F', 'E', 'D', 'C', 'B', 'A']

//join()
someLetters = ["A", "B", "C", "D", "E", "F"];
const newString = someLetters.join();
console.log(newString);
console.log(typeof newString);
//output: A,B,C,D,E,F -> string
console.log(newString.split(","));
console.log(typeof newString.split(","));
//output (6) ['A', 'B', 'C', 'D', 'E', 'F'] -> object

//concat() and spread operator (newer way)
const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

const newArrayBA = myArrayB.concat(myArrayA);
console.log(newArrayBA);

//Spread Operator
const newArrayAB = [...myArrayA, ...myArrayB];
console.log(newArrayAB);
//output: (6) ['A', 'B', 'C', 'D', 'E', 'F']

//Nested Arrays
const newArrayArray = [myArrayA, myArrayB];
console.log(newArrayArray);
//output: (2) [Array(3), Array(3)]^

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];
const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//output: football
console.log(clothesShelfB[0]);
//output: sweat tops

const equipDept = [equipShelfA, equipShelfB];
const clothesDetp = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
//output: football
console.log(clothesDetp[1][0]);
//output: sweat tops

const sportsStore = [equipDept, clothesDetp];
console.log(sportsStore);
//output: (2) [Array(2), Array(2)]
console.log(sportsStore[0][0][1]);
//output: football
console.log(sportsStore[1][1][0]);
//output: sweat tops

console.clear();

//Tutorial Video No 16 - Refactoring Code | Rock Paper Scissors
// gameRockPaperScissors();

function gameRockPaperScissors() {
  const gameName = "rock, paper, or scissors";
  const rps = ["rock", "paper", "scissors"];
  let playGame = confirm(`Shall we play ${gameName}?`);

  while (playGame) {
    let player = playerChoice(rps);
    let computer = computerChoice(rps);

    if (player) {
      alert(
        `Player: ${player}\n` +
          `Computer: ${computer}\n\n` +
          match(player, computer)
      );
    }
    playGame = confirm("Play again?");
  }
  alert(`Goodbye`);

  function playerChoice(rps) {
    let playerChoice = "";

    do {
      playerChoice = prompt(`Please choose between: ${gameName} `);
      if (playerChoice === null) {
        playerChoice = "";
        break;
      } else if (playerChoice === "") {
        invalidChoice();
      }
      playerChoice = playerChoice.toLowerCase();
    } while (!rps.includes(playerChoice));

    return playerChoice;
  }

  function computerChoice(rps) {
    return rps[Math.floor(Math.random() * 3)];
  }

  function match(player, computer) {
    const winner = ["Computer wins!", "Player wins!", "It's a tie!"];

    if (player === computer) {
      return winner[2];
    } else if (player === "rock") {
      return computer === "paper" ? winner[0] : winner[1];
    } else if (player === "paper") {
      return computer === "scissors" ? winner[0] : winner[1];
    } else {
      return computer === "rock" ? winner[0] : winner[1];
    }
  }

  function invalidChoice() {
    alert(`You didn't enter ${gameName}!`);
  }
}

//Tutorial Video No 17 - Objects
//key-value pairs in curly braces
const myObj = {
  name: "Alex",
};
console.log(myObj);
//output: {name: 'Alex'}
console.log(myObj.name);
//output: Alex
const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["eat", "sleep", "code"],
  beverage: {
    morning: "coffee",
    afternoon: "iced tea",
  },
  action: function () {
    return "Hello World!";
  },
  action2: function () {
    return `Time for ${this.beverage.morning}`;
  },
};
//dot-notation
console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.beverage);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());
console.log(anotherObj.action2());

//bracket-notation
console.log(anotherObj["alive"]);
console.log(anotherObj["answer"]);
console.log(anotherObj["hobbies"]);
console.log(anotherObj["hobbies"][1]);
console.log(anotherObj["beverage"]);
console.log(anotherObj["beverage"]["morning"]);
console.log(anotherObj["beverage"]["morning"][0]);
console.log(anotherObj["action"]());
console.log(anotherObj["action2"]());

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrroooom!";
  },
};

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whoooosh!";
};
console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function () {
  return "Shhhh....";
};
console.log(tesla.engine());

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

delete band.drums;
console.log(band.hasOwnProperty("drums"));
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(band[job]);
}
for (let job in band) {
  console.log(`On ${job}, it's ${band[job]}`);
}

console.log(band.guitar);

//destructuring objects
const { guitar: myGuitar, bass: myBass } = band;
console.log(myGuitar);
console.log(myBass);

const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(bass);

function sings({ vocals }) {
  return `${vocals} sings!`;
}
console.log(sings(band));

//Tutorial Video No 18 - Classes & Factory Functions
//JavaScript Classes since 2015
class Pizza {
  constructor(type, size, crust) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = [];
  }
  bake() {
    console.log(
      `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
    );
  }
  //getters and setters
  get PizzaType() {
    return this.type;
  }
  set PizzaType(type) {
    this.type = type;
  }

  //alternative as methods
  getType() {
    return this.type;
  }
  setType(type) {
    this.type = type;
  }

  getToppings() {
    return this.toppings;
  }
  setToppings(topping) {
    this.toppings.push(topping);
  }
}

const myPizza = new Pizza("salame", "medium", "original");
myPizza.PizzaType = "pepperoni";
myPizza.bake();
myPizza.setType("hawaii");
console.log(myPizza.getType());
myPizza.setToppings("mozzarella");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());

//Inheritance

//Superclass
class Pizza2 {
  constructor(size) {
    this.size = size;
    this.crust = "original";
  }

  getCrust() {
    return this.crust;
  }
  setCrust(crust) {
    this.crust = crust;
  }
}

//Childclass
class SpecialtyPizza extends Pizza2 {
  constructor(size) {
    super(size);
    this.type = "The Works";
  }
  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
  }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();

//Naming convention for private properties
// _ indicates a private property
class Pizza3 {
  constructor(size) {
    this._size = size;
    this._crust = "original";
  }

  getCrust() {
    return this.crust;
  }
  setCrust(crust) {
    this._crust = crust;
  }
}

//Factory Function
//better way to create an object in javascript
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
  };
}

const myFactoryPizza = pizzaFactory("small");
myFactoryPizza.bake();

//New additions to JS allow public and private class fields (not supported everywhere!)
class Pizza4 {
  //public and private fields must be declared above the constructor!
  //public field
  crust = "original";

  //private field
  #sauce = "traditional";
  #size;

  constructor(size) {
    this.#size = size;
  }

  getCrust() {
    return this.crust;
  }
  setCrust(crust) {
    this.crust = crust;
  }

  hereYouGo() {
    console.log(
      `Here is your ${this.crust} ${this.#sauce}${this.#size} pizza.`
    );
  }
}

const myPizza4 = new Pizza4("large");
myPizza4.hereYouGo();
console.log(myPizza4.crust);
console.log(myPizza4.getCrust());
//output: original (both)

//console.log(myPizza4.#sauce);
//Property '#sauce' is not accessible outside class 'Pizza4' because it has a private identifier.

//Tipp: website: https://caniuse.com/

//Tutorial Video No 19 - JSON
//Javascript Object Notation
/*JSON is used to send and receive data.
 It is text format that is completly language independent.
*/

const myObjPerson = {
  name: "Alex",
  hobbies: ["eat", "sleep", "code"],
  sayHello: function () {
    console.log("Hey!");
  },
};

console.log(myObjPerson); //{name: 'Alex', hobbies: Array(3), sayHello: ƒ}
console.log(myObjPerson.name); //Alex
console.log(typeof myObjPerson); //object
myObjPerson.sayHello();

//the function is not converted to JSON
const sendJSON = JSON.stringify(myObjPerson);
console.log(sendJSON); //{"name":"Alex","hobbies":["eat","sleep","code"]}
console.log(typeof sendJSON); //string
console.log(sendJSON.name); //output: undefined

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);

//Tutorial Video No 20 - Error Handling <Try - Catch - Finally>
//Normal vs Strict Mode
//Normal Mode -> no error occurs
variable = "Alex";
console.log(variable); //output: Alex

function testStrictMode() {
  "use strict";

  variable2 = "Alex"; // Missing declaration
  console.log(variable2); // This will throw an error
  //Uncaught ReferenceError: variable2 is not defined
}
// testStrictMode();

function testStrictMode2() {
  "use strict";

  const variable3 = "Alex"; // Missing declaration
  console.log(variable3); // This will throw an error
  //Uncaught ReferenceError: variable2 is not defined
}
testStrictMode2();

console.clear();

function testStrictMode3() {
  "use strickt";
  const makeError = () => {
    try {
      throw new customError("This is a custom error!");
      const name = "Alex";
      name = "Joe";
    } catch (err) {
      // console.log(err);
      // console.warn(err);
      // console.error(err);
      // console.error(err.name);
      // console.error(err.message);
      console.error(err.stack);
      // logTheError(err.stack);
      // console.table(err);
    }
  };
  makeError();

  function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
  }
}
testStrictMode3();

function testStrictMode4() {
  "use strickt";
  const makeError = () => {
    try {
      //generic build in Error Constructor}

      throw new Error("This is an error!");
      const name = "Alex";
      name = "Joe";
    } catch (err) {
      console.error(err.stack);
    }
  };
  makeError();
}
testStrictMode4();

console.clear();
//finally block
function testStrictMode5() {
  "use strickt";
  const makeError = () => {
    for (let i = 1; i <= 5; i++) {
      try {
        if (i % 2 !== 0) {
          throw new Error("Odd number!");
        }
        console.log("Even number!");
      } catch (err) {
        console.error(err.stack);
      } finally {
        //finally block is executed after catch block even an error is not thrown.
        console.log("...finally " + i);
      }
    }
  };
  makeError();
}
testStrictMode5();

console.clear();

//DOM - Document Object Model
//Elements, Nodes, Selectors, Create, Append, Remove
