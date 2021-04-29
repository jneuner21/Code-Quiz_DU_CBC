var startBtn= document.querySelector("#startButton");
var mainSection= document.querySelector(".mainContainer");
var quizContainer= document.querySelector(".quizContainer");
var quizSet1= document.querySelector(".quizSet1");
var quizSet2= document.querySelector(".quizSet2");
var quizSet3= document.querySelector(".quizSet3");
var gameOverSection= document.querySelector(".gameOverScreen");
var secondsLeft= 60;
var time= document.querySelector(".time");
var choiceBtn= document.getElementById("choiceBtn");

function startGame() {
  quizContainer.classList.add("hide");
  quizSet1.classList.remove("hide");
  setTime()
}

startBtn.addEventListener("click", startGame);

var correctAnswer= document.getElementById("correctAnswer")


function nextQuestion() {
  quizSet1.classList.add("hide");
  quizSet2.classList.remove("hide");
}

correctAnswer.addEventListener("click",nextQuestion)
var correctAnswer2= document.getElementById("correctAnswer2")


function nextQuestion2() {
  quizSet2.classList.add("hide");
  quizSet3.classList.remove("hide");
}

correctAnswer2.addEventListener("click",nextQuestion2)
var correctAnswer3= document.getElementById("correctAnswer3")


correctAnswer3.addEventListener("click",nextQuestion3)

function nextQuestion3() {
  quizSet3.classList.add("hide");
  gameOverSection.classList.remove("hide");
}


function gameOver(){
  quizSet1.classList.add("hide");
  quizSet2.classList.add("hide");
  quizSet3.classList.add("hide");
  gameOverSection.classList.remove("hide");
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    time.textContent = secondsLeft;
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOver()
    }
    
  }, 1000);
}



function fn1() {
  var str= document.getElementById("nameSubmission").value;
}


//if(choiceBtn){
 // (secondsLeft - 10)
  //console.log("incorrect");
//}
  //else{
 //   console.log("correct");
 // }



//gameOverSection.addEventListener("click", gameOverSection)

//below is an example of a click listen
//document.getElementById("myBtn").addEventListener("click", function()