const questions = [
  {
    category: "Basics",
    question: "What is JavaScript mainly used for?",
    choices: ["Styling websites", "Adding interactivity", "Running hardware"],
    answer: "Adding interactivity"
  },
  {
    category: "Variables",
    question: "Which symbol is used to assign a value?",
    choices: ["=", "==", "==="],
    answer: "="
  },
  {
    category: "Strings",
    question: "Which character can create a string?",
    choices: ["Single quotes", "Backticks", "Double quotes"],
    answer: "Single quotes" 
  },
  {
    category: "Numbers",
    question: "What is 2 + 3?",
    choices: ["23", "5", "10"],
    answer: "5"
  },
  {
    category: "Booleans",
    question: "Which one is a boolean value?",
    choices: ["true", "hello", "123"],
    answer: "true"
  }
];



function getRandomQuestion(questionsArray){
  // array
  let randomIndex = Math.floor(Math.random()*questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choiceArray){
  let randomChoice = Math.floor(Math.random()*choiceArray.length);
  return choiceArray[randomChoice];
}

function getResults(question,choice){
  //answer
if(choice === question.answer){
  return "The computer's choice is correct!";
}else{
  return `The computer's choice is wrong. The correct answer is: ${question.answer}`
}
}
