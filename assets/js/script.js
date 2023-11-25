//Global Variables
let points;
let numberTurns;
let countTurns;
const arrayQuestions = [];


//Function to start quiz
function startQuiz() {
    points = 0;
    numberTurns = 5;
    countTurns = 0;


}


//Questions Array

function createQuestions() {
    arrayQuestions[0] = "The first moon landing occurred in which year?# 1980# 1956# 1969# 1969"; 
    arrayQuestions[1] = "When did the Berlin Wall fall?# 1995# 1989# 1980# 1989";
    arrayQuestions[2] = "In which year did the Titanic sink?# 1912# 1923# 1905# 1912";
    arrayQuestions[3] = "When did World War II officially start?# 1936# 1939# 1945# 1939";
    arrayQuestions[4] = "The French Revolution began in which year?# 1689# 1789# 1889# 1789";

}

//Function how Game works 
function startTurn() {
    let currQuestion = arrayQuestions.shift();
    const arrayQuestionsProcessed = currQuestion.split("#");
    
    document.getElementById("idQuestion").innerHTML = arrayQuestionsProcessed[0];
    document.getElementById("idAnswer1").innerHTML = arrayQuestionsProcessed[1];
    document.getElementById("idAnswer2").innerHTML = arrayQuestionsProcessed[2];
    document.getElementById("idAnswer3").innerHTML = arrayQuestionsProcessed[3];
}
