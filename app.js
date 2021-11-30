// VARIABLES

const userScore = 0;
const compScore = 0;
const userScoreDisplay = document.getElementById('user-score');
const compScoreDisplay = document.getElementById('computer-score');
const scoreBoard = document.getElementById('scoreboard');
const results= document.getElementById('result')
const rockChoice = document.getElementById('rock')
const paperChoice = document.getElementById('paper')
const scissorsChoice = document.getElementById('scissors')
const backGround = document.querySelector('backGroundFull')

// EVENT LISTENERS

rockChoice.addEventListener('click', chooseRock)
paperChoice.addEventListener('click', choosePaper)
scissorsChoice.addEventListener('click', chooseScissors)



// FUNCTIONS

function chooseRock(){
   gamePlay('rock')
};





function choosePaper(){
    gamePlay('paper')
};





function chooseScissors(){
   gamePlay('scissors')
};


function gamePlay(userChoice){
    if(userChoice === 'rock' && (getComputerChoice())=== 'paper'){
        compScoreDisplay.innerHTML++
        results.innerHTML = "<p class='text-center m-20 text-green-700 animate-pulse text-4xl'>Paper covers rock. You LOSE!</p>"


    } else if(userChoice === 'rock' && (getComputerChoice())=== 'scissors'){
        userScoreDisplay.innerHTML++
        results.innerHTML = "<p class='text-center m-20 text-green-700 animate-pulse text-4xl'>Rock breaks scissors. You WIN!!!</p>"
    } else if(userChoice === 'rock' && (getComputerChoice())=== 'rock'){
        results.innerHTML = "<p class='text-center m-20 text-white animate-pulse text-4xl'>DRAW</p>"

        /*=========================Paper================================== */
       
}
if(userChoice === 'paper' && (getComputerChoice())=== 'rock'){
    userScoreDisplay.innerHTML++
    results.innerHTML = "<p class='text-center m-20 text-green-700 animate-pulse text-4xl'>Paper covers rock. You WIN!</p>"


} else if(userChoice === 'paper' && (getComputerChoice())=== 'scissors'){
    compScoreDisplay.innerHTML++
    results.innerHTML = "<p class='text-center m-20 text-green-700 animate-pulse text-4xl'>Scissors cuts paper... You LOSE!!</p>"

} else if(userChoice === 'paper' && (getComputerChoice())=== 'paper'){
    results.innerHTML = "<p class='text-center m-20 text-white animate-pulse text-4xl'>DRAW</p>"
   
    /*===========================Scissors=================================== */
}
if(userChoice === 'scissors' && (getComputerChoice())=== 'rock'){
    compScoreDisplay.innerHTML++
    results.innerHTML = "<p class='text-center m-20 text-green-700 animate-pulse text-4xl'>Rock Breaks Scissors.. You LOSE!</p>"


} else if(userChoice === 'scissors' && (getComputerChoice())=== 'paper'){
    userScoreDisplay.innerHTML++
    results.innerHTML = "<p class='text-center m-20 text-green-700 animate-pulse text-4xl'>Scissors CUTS paper. You WIN!!!</p>"
} else if(userChoice === 'scissors' && (getComputerChoice())=== 'scissors'){
    results.innerHTML = "<p class='text-center m-20 text-white animate-pulse text-4xl'>DRAW</p>"
   
}

}

function getComputerChoice(){
    const choices =['rock', 'paper', 'scissors'];
    let compChoice = Math.floor(Math.random()*3);
    return choices[compChoice]
}