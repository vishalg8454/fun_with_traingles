const quizForms = document.querySelector("#quiz-form");
const submitAnswerBtn = document.querySelector("#submitBtn");

const message = document.querySelector("#quizOutputPara");
const correctAnswers = ["3", "180°", "Centroid", "Right angle triangle", "त्रिकोण"];

function clickHandler(){
    // console.log("okkkkkk");
    var index=0;
    var userCurrentScore=0;
    const userSelctedOptions = new FormData(quizForms);
    for(let option of userSelctedOptions.values()){
        if(option === correctAnswers[index]){
            userCurrentScore = userCurrentScore + 1;
            index = index + 1;
        }
        else{
            index = index + 1;
        }
        
    }
    message.innerText = "Your scored " + userCurrentScore + " points";
}
submitAnswerBtn.addEventListener("click",clickHandler);