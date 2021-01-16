/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/dataTypes.js`
*/

// EXAMPLE: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log("The " + team + " are " + name + "'s favorite Quidditch team");

// YOU DO: Read the next few lines of code...
var numberOfCreatures = 7;
var creatures = "unicorns";

console.log("My zoo has " + numberOfCreatures + " " + creatures + "!")

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here:

// line 22 will log a string: "My zoo has 7 unicorns!"
// it does so my concatenating "My zoo has ", the value of numberOfCreatures, .
// the string " ", the value of creatures, and the string "!", and logging this string to the console

// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":

var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log("The " + speedy + " jumped over the " + slowPoke);


// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";

console.log("In a predictable result, the " + slowPoke + " beat the " + speedy + "!");

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables.

var twinsName = "Minnesota Twins";
var yanksName = "New York Yankees";
var mlbName = "Major League Baseball";

console.log("For the first time in " + mlbName + " history, the " + twinsName + " have defeated the " + yanksName + " in the World Series!!");

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.

// 10-4.