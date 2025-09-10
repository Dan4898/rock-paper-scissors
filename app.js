//Defines the plays from computer
function getComputerChoice(){
    //Get a random number from zero to two
    const random = Math.floor(Math.random() * 3);

    //If condition to apply the random number to the play
    if(random === 0){
        console.log('Scissors')
        return 'Scissors'
    } else if ( random === 1){
        console.log('Rock')
        return 'Rock'
    } else if (random === 2){
        console.log('Paper')
        return 'Paper'
    }
}


//Asks the user play
function getHumanChoice(){
    //Prompt to write the play
    const choice = prompt("Write you play('Scissors', 'Rock', 'Paper'): ");
    //Converts the first letter to upper case
    const firstLetter = choice.charAt(0).toUpperCase();
    //Converts the reamaining letters to lower case
    const restLetters = choice.slice(1, choice.length).toLowerCase();
    //Concatenate the word
    const completeWord = firstLetter + restLetters;
    console.log(completeWord);
    return completeWord;
}

//Function to play the game 5 times
function playGame(){
    //Variables to increase the points each time a player wins
    let humanScore = 0;
    let computerScore = 0;

    //Defines the results of each possible play and increase the points of the variables
    function playRound(humanChoice, computerChoice){
        if (humanChoice === 'Scissors' && computerChoice === 'Paper'){
            console.log('You win! Scissors beats Paper');
            humanScore += 1;
        } else if (humanChoice === 'Paper' && computerChoice === 'Rock'){
            console.log('You win! Paper beats Rock');
            humanScore += 1;
        } else if (humanChoice === 'Rock' && computerChoice === 'Scissors'){
            console.log('You win! Rock beats Scissors');
            humanScore += 1;
        } else if (humanChoice === 'Paper' && computerChoice === 'Scissors'){
            console.log('You lose! Scissors beats Paper');
            computerScore += 1;
        } else if (humanChoice === 'Rock' && computerChoice === 'Paper'){
            console.log('You lose! Paper beats Rock');
            computerScore += 1;
        } else if (humanChoice === 'Scissors' && computerChoice === 'Rock'){
            console.log('You lose! Rock beats Scissors');
            computerScore += 1;
        } else {
            console.log('Draw')
        }
}
//For loop to repeat the play 5 times
for (let i = 0; i < 5; i++){
    playRound(getHumanChoice(), getComputerChoice())
}

//Console the final result of the game
console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
if(humanScore > computerScore) console.log("You won the game!");
else if(humanScore < computerScore) console.log("You lost the game!");
else console.log("The game is a draw!");


}

playGame();