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
    let random=((Math.random()*10)+1);      //using math function which gives number between 0 to 0.99
    console.log(random);                    //checking on console
    if(random<=3.33)                        //dividing by one third to make a computer choice logic
        return 'rock';
    else if(random<=6.66 && random>3.33)
        return 'paper';
    else
        return 'scissors';
};

function updateScore(userChoice,comChoice)      //function to update the score of user or computer
{
    if(comChoice===userChoice)      //draw condition
    {
        return 0;
    }
    else if(comChoice==='rock' && userChoice==='scissors')      //computer winning condition
    {
        comScore++;
        return 1;
    }
    else if(comChoice==='scissors' && userChoice==='paper')     //computer winning condition
    {
        comScore++;
        return 1;
    }
    else if(comChoice==='paper' && userChoice==='rock')     //computer winning condition
    {
        comScore++;
        return 1;
    }
    else{           //user winning all conditions ooposite of all previous conditions
        userScore++;
        return -1;
    }
};

function displayScore(userChoice,comChoice,winner)      //function to display result on the page
{   console.log(userScore,comScore);
    document.getElementById("your-score").innerText=`${userScore}`;     //showing the current score of user
    document.getElementById("com-score").innerText=`${comScore}`;       //showing current score of computer
        
    if(winner===1)          //if computer wins
    {
        button.innerText=`Computer Wins! ${comChoice} beats ${userChoice}`;         //changing the text in button with result
        button.style.backgroundColor="red";                                         //changing background color of button as red means loose
    }
    else if(winner===-1){       //if user wins
        button.innerText=`You Won! ${comChoice} beats ${userChoice}`;           //changing the text in button with result
        button.style.backgroundColor="Green";                                   //changing background color of button as green means won
    }
    else    //if match draws
    {
        button.innerText=`Draw! Play Again.`;                   //changing the text in button with result
        button.style.backgroundColor="#14213d";               //changing background color of button back to original
    }
    return;
};