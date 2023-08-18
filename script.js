const choices = ["Rock","Paper","Scissor"];

function getComputerChoice(choices)
{
    //the computer makes a random decision from the list of choices
    const randomIndex = Math.floor( Math.random() * choices.length );
    return randomIndex;

}

function getPlayerSelection(e)
{
    let userchoice = this.textContent;
    let computerChoice = getComputerChoice(choices);
    user = choices.indexOf(userchoice); //stores the list index of the entered user choice
    playRound(computerChoice , user);

}

//calculates the winner using list based indexing
function playRound(computer , user)
{
    
    let result = document.querySelector('#result');
    let choice = document.querySelector('#choice');
    choice.textContent = "Computer chose "+choices[computer];
    if(computer > user)
    {
        if(computer - user == 1)
        {

            result.textContent = "Sad you lost the round";
        }
           
        else
            result.textContent = "Yay you won the round";
            
    }
    else if(computer < user)
    {
        if(user - computer == 1)
           result.textContent = "Yay you won the round";
        else
            result.textContent = "Sad you lost the round";
    }
    else
        result.textContent = "Its a draw";
}

const userChoice = document.querySelectorAll('button');
userChoice.forEach(userChoice => userChoice.addEventListener('click',getPlayerSelection));


