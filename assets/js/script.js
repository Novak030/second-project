//Global Variables
let points;
let numberTurns;
let countTurns;
const arrayQuestions = [];
let correctAnswer;
let blocked;

//Hide Answer buttons 
document.getElementById("idAnswer1").style.visibility = "hidden";
document.getElementById("idAnswer2").style.visibility = "hidden";
document.getElementById("idAnswer3").style.visibility = "hidden";


//Function to start quiz
function startQuiz() {
    points = 0;
    numberTurns = 5;
    countTurns = 0;
    //make buttons visible /hidden
    document.getElementById("idAnswer1").style.visibility = "visible";
    document.getElementById("idAnswer2").style.visibility = "visible";
    document.getElementById("idAnswer3").style.visibility = "visible";
    document.getElementById("idStart").style.visibility = "hidden";
    
    createQuestions();
    startTurn();

}


//Questions Array

function createQuestions() {
    arrayQuestions[0] = "The first moon landing occurred in which year?# 1980# 1956# 1969# 1969"; 
    arrayQuestions[1] = "When did the Berlin Wall fall?# 1995# 1989# 1980# 1989";
    arrayQuestions[2] = "In which year did the Titanic sink?# 1912# 1923# 1905# 1912";
    arrayQuestions[3] = "When did World War II officially start?# 1936# 1939# 1945# 1939";
    arrayQuestions[4] = "The French Revolution began in which year?# 1689# 1789# 1889# 1789";

}

//Function how Game works and check answer
function startTurn() {
    if (countTurns < numberTurns) {
        
        document.getElementById("idAnswer1").style.background = "black";
        document.getElementById("idAnswer2").style.background = "black";
        document.getElementById("idAnswer3").style.background = "black";

    countTurns++;
    blocked = false;
    let currQuestion = arrayQuestions.shift();
    const arrayQuestionsProcessed = currQuestion.split("#");
    correctAnswer = arrayQuestionsProcessed[4];
    
    document.getElementById("idQuestion").innerHTML = arrayQuestionsProcessed[0];
    document.getElementById("idAnswer1").innerHTML = arrayQuestionsProcessed[1];
    document.getElementById("idAnswer2").innerHTML = arrayQuestionsProcessed[2];
    document.getElementById("idAnswer3").innerHTML = arrayQuestionsProcessed[3];
        setTimeout(startTurn, 8000);
    }
    else{
    document.getElementById("idQuestion").innerHTML = "Game Over. You have " + points + " Points!";
        document.getElementById("idStart").style.visibility = "visible";
        document.getElementById("idAnswer1").style.visibility = "hidden";
        document.getElementById("idAnswer2").style.visibility = "hidden";
        document.getElementById("idAnswer3").style.visibility = "hidden";
    }
}

//Function to Block possible answers after choosing 

function pressButton(pressedButton) {
    if (blocked == true){
        return;
    }
    blocked = true;
    if (pressedButton.innerHTML == correctAnswer) {
        points++;
        pressedButton.style.background = "green";
    } else {
        pressedButton.style.background = "red";
    }
}