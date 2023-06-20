// Intro To The Quiz
console.log("Welcome To The Marvel Universe!");
console.log("");
console.log("Lets See How Well You Know The Thor!");
console.log("NOTE : Answer With The CAPITAL Initial." + "\n");

var readlineSync = require('readline-sync');
var name = "First, May I know your name please? ";
var score = 0;

// Greetings!
var ans = readlineSync.question(name);
console.log("");
console.log("Welcome " + ans + "!" + "\n");

// Check whether the player knows the Thor
var playerInput = readlineSync.question("Do you know the Thor? ");

if (playerInput === "Yes") {
  console.log("Great! Go ahead!" + "\n");
} else {
  console.log("It's okay, the questions might be tough for you!" + "\n");
}

//Array of object
var questions = [q1 = {
  question: "Who is he? ",
  answer: "God of Thunder"
}, q2 = {
  question: "Where is he from? ",
  answer: "Asgard"
}, q3 = {
  question: "Who is the father of Thor? ",
  answer: "Odin"
}, q4 = {
  question: "Who is the brother of Thor? ",
  answer: "Loki"
}, q5 = {
  question: "His sister name is? ",
  answer: "Hela"
}, q6 = {
  question: "What's his full name? ",
  answer: "Thor Odinson"
}, q7 = {
  question: "What's his power? ",
  answer: "Thunder"
}, q8 = {
  question: "Thor's hammer is called as? ",
  answer: "Mjolnir"
}, q9 = {
  question: "Is Thor an Avenger? ",
  answer: "Yes"
}, q10 = {
  question: "Who played Thor's charachter in Marvel Movies? ",
  answer: "Chris Hemsworth"
}]

function play(question, answer) {
  var playerAns = readlineSync.question(question);

  if (playerAns === answer) {
    console.log("You are right!");
    score += 1;
    console.log("Your score is:" + score + "\n");
  } else {
    console.log("You are wrong");
    score += 0;
    console.log("Your score is:" + score + "\n");
  }
}
// loop over the array
for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  // function call
  play(currentQuestion.question, currentQuestion.answer);
}
// show the final score
console.log("Your final Score is: " + score);

if (score > 5) {
  console.log("Woh! It looks like you are a true fan of Marvel!" + "\n")
} else {
  console.log("Ohh! It's okay, It looks like you should watch more marvel movies!" + "\n")
}
console.log("Thanks for playing... See you again!")