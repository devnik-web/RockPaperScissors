let userScore=0;    //counts the score of user
let comScore=0;     //counts the score of computer
let comChoice;      //tracks the choice of computer
let userChoice;     //tracks the choice of user
const choices=document.querySelectorAll(".choice");     //the choices or images collection
let button=document.querySelector("#select-btn");       //button to change the status

choices.forEach((choice)=>{     //travesing every choice
    choice.addEventListener("click",()=>{   
        console.log("Choice is clicked")        //checking message for every choice
        userChoice=choice.getAttribute("id");   //getting which image is clicked or which is  choosed
        console.log(userChoice);                //checking via console
        comChoice=randomChoice();               //generating a random computer choice using function
        console.log(comChoice);                 //checking what computer generated

        let winner=updateScore(userChoice,comChoice);   //update function to find who won
        //1:computer win 0:Draw   -1:user wins
        displayScore(userChoice,comChoice,winner)       //displays the result
    })
});

function randomChoice()     //the function to generate random computer choice
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