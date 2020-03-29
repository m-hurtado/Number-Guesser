let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate a random target number
function generateTarget() {
    return Math.floor(Math.random() * 10)
}

// Compare human and computer guesses to target
function compareGuesses(humGuess, comGuess, targetNum) {
    let humDiff = Math.abs(humGuess - targetNum);
    let comDiff = Math.abs(comGuess - targetNum);

    console.log(humDiff);
    console.log(comDiff);

    if (humDiff === comDiff)
        return true;
    else if (humDiff < comDiff)
        return true;
    else if (humDiff > comDiff)
        return false;
}

// Update the winner's score
function updateScore(winner) {
    if (winner === 'human')
        humanScore++;
    else if (winner === 'computer')
        computerScore++;
}

// Increment the round count
function advanceRound() {
    currentRoundNumber++;
}

let test = compareGuesses(8,7,7);

console.log(test);