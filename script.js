document.addEventListener('DOMContentLoaded', (event) => {
    function getComputerChoice() {
        return Math.floor(Math.random() * 3) + 1;
    }

    function getHumanChoice() {
        let userInput = prompt("Choose your move! (rock, paper, scissors)");
        let cleanedInput = userInput.trim().toLowerCase();
        return cleanedInput;
    }

    let humanScore = 0;
    let computerScore = 0;

    function convertChoiceToString(choice) {
        switch (choice) {
            case 1:
                return 'rock';
            case 2:
                return 'paper';
            case 3:
                return 'scissors';
            default:
                throw new Error("Invalid input.");
        }
    }

    function convertChoiceToNumber(choice) {
        switch (choice) {
            case 'rock':
                return 1;
            case 'paper':
                return 2;
            case 'scissors':
                return 3;
            default:
                throw new Error("Invalid input.");
        }
    }

    function playRound(humanChoice, computerChoice) {
        let stringComputerChoice = convertChoiceToString(computerChoice);
        let stringHumanChoice = humanChoice;

        humanChoice = convertChoiceToNumber(humanChoice);

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both selected ${stringHumanChoice}`);
        } else if ((humanChoice === 1 && computerChoice === 2) || 
                   (humanChoice === 2 && computerChoice === 3) || 
                   (humanChoice === 3 && computerChoice === 1)) {
            console.log(`You chose ${stringHumanChoice}. Computer chose ${stringComputerChoice}. You lose!`);
            computerScore++;
        } else {
            console.log(`You chose ${stringHumanChoice}. Computer chose ${stringComputerChoice}. You win!`);
            humanScore++;
        }

        console.log(`Current score: Player - ${humanScore}; Computer - ${computerScore}`);
    }

    function playGame() {
        for (let i = 0; i < 5; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }

        if (humanScore > computerScore) {
            console.log("You win!");
        } else if (computerScore > humanScore) {
            console.log("Computer wins!");
        } else {
            console.log("Draw!");
        }
    }

    playGame();
});
