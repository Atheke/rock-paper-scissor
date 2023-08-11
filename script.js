
function getComputerChoice(choices)
{
    //the computer makes a random decision from the list of choices
    const randomIndex = Math.floor( Math.random() * choices.length );
    return randomIndex;

}
//calculates the winner using list based indexing
function playRound(computer , user)
{
    if(computer > user)
    {
        if(computer - user == 1)
            cconsole.log("Sad ypu lost the round");
        else
            console.log("Yay you won the round");
    }
    else if(computer < user)
    {
        if(user - computer == 1)
            console.log("Yay you won the round");
        else
            console.log("Sad you lost the round");
    }
    else
        console.log("Its a draw");

}

const choices = ["Rock","Paper","Scissor"];
const computerChoice = getComputerChoice(choices);
console.log("Computer chose ",choices[computerChoice]);
const userChoice = prompt("Enter your choice");
const user = choices.indexOf(userChoice); //stores the list index of the entered user choice
playRound(computerChoice , user);
