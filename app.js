let userScore=0;
let comScore=0;
let comChoice;
let userChoice;
const choices=document.querySelectorAll(".choice");
let button=document.querySelector("#select-btn");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log("Choice is clicked")
        userChoice=choice.getAttribute("id");
        console.log(userChoice);
        comChoice=randomChoice();
        console.log(comChoice);

        let winner=updateScore(userChoice,comChoice);
        //1:computer win 0:Draw   -1:user wins
        displayScore(userChoice,comChoice,winner)
    })
});

function randomChoice()
{
    let random=((Math.random()*10)+1);
    console.log(random);
    if(random<=3.33)
        return 'rock';
    else if(random<=6.66 && random>3.33)
        return 'paper';
    else
        return 'scissors';
};

function updateScore(userChoice,comChoice)
{
    if(comChoice===userChoice)
    {
        return 0;
    }
    else if(comChoice==='rock' && userChoice==='scissors')
    {
        comScore++;
        return 1;
    }
    else if(comChoice==='scissors' && userChoice==='paper')
    {
        comScore++;
        return 1;
    }
    else if(comChoice==='paper' && userChoice==='rock')
    {
        comScore++;
        return 1;
    }
    else{
        userScore++;
        return -1;
    }
};

function displayScore(userChoice,comChoice,winner)
{   console.log(userScore,comScore);
    document.getElementById("your-score").innerText=`${userScore}`;
    document.getElementById("com-score").innerText=`${comScore}`;

    console.log(button);
    if(winner===1)
    {
        button.innerText=`Computer Wins! ${comChoice} beats ${userChoice}`;
        button.style.backgroundColor="red";
    }
    else if(winner===-1){
        button.innerText=`You Won! ${comChoice} beats ${userChoice}`;
        button.style.backgroundColor="Green";
    }
    else
    {
        button.innerText=`Draw! Play Again.`;
        button.style.backgroundColor="#14213d";
    }
    return;
};