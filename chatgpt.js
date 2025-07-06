const roun = document.getElementById('rounds');
const option = document.getElementById('options');
const infodiv = document.getElementById('result');
const scoreofhuman = document.getElementById('humanscore');
const scoreofcomputer = document.getElementById('computerscore');
const nextbutton = document.getElementById('nextround');

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;

function getComputerChoice() {
    let randomNo = Math.random().toFixed(1);
    if (randomNo > 0 && randomNo <= 0.3) {
        document.getElementById('crock').style.border = '10px solid #1E90FF';
        return 'rock';
    } else if (randomNo > 0.3 && randomNo <= 0.7) {
        document.getElementById('cpaper').style.border = '10px solid #1E90FF';
        return 'paper';
    } else {
        document.getElementById('cscissor').style.border = '10px solid #1E90FF';
        return 'scissor';
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'paper') computerScore++;
        else if (computerChoice === 'scissor') humanScore++;
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') humanScore++;
        else if (computerChoice === 'scissor') computerScore++;
    } else if (humanChoice === 'scissor') {
        if (computerChoice === 'rock') computerScore++;
        else if (computerChoice === 'paper') humanScore++;
    }

    console.log(`Human-score => ${humanScore}`);
    console.log(`Computer-score => ${computerScore}`);
}

function getResultText() {
    if (humanScore > computerScore) return 'Human won this round';
    else if (computerScore > humanScore) return 'Computer won this round';
    else return 'No one won this round';
}

function continueToNextRound(computerChoice, humanChoice) {
    nextbutton.style.display = 'block';
    nextbutton.addEventListener('click', () => {
        document.getElementById(humanChoice).style.border = 'none';
        if (computerChoice === 'rock') document.getElementById('crock').style.border = 'none';
        else if (computerChoice === 'paper') document.getElementById('cpaper').style.border = 'none';
        else if (computerChoice === 'scissor') document.getElementById('cscissor').style.border = 'none';

        playGame(Number(roun.value), currentRound);
    }, { once: true }); // So multiple clicks don't stack event listeners
}

function playGame(rounds, current) {
    infodiv.style.display = 'block';
    infodiv.innerHTML = `Round - ${current}`;
    option.addEventListener('click', function handler(e) {
        let humanChoice;

        if (['rock', 'paper', 'scissor'].includes(e.target.id)) {
            humanChoice = e.target.id;
        } else {
            infodiv.style.fontSize = '20px';
            infodiv.innerHTML = 'Please choose your option by clicking on an image';
            return;
        }

        option.removeEventListener('click', handler); // remove old event listener

        document.getElementById(humanChoice).style.border = '10px solid #DAA520';
        const computerChoice = getComputerChoice();

        console.log('Human choice is', humanChoice);
        console.log('Computer choice is', computerChoice);

        playRound(humanChoice, computerChoice);

        infodiv.style.fontSize = '20px';
        infodiv.innerText = getResultText();

        scoreofhuman.innerText = humanScore;
        scoreofcomputer.innerText = computerScore;

        currentRound++;

        if (currentRound <= rounds) {
            continueToNextRound(computerChoice, humanChoice);
        } else {
            nextbutton.style.display = 'none';
            infodiv.innerText += `\nGame Over! Final Score:\nHuman: ${humanScore} | Computer: ${computerScore}`;
        }
    });
}

roun.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // e.preventDefault();
        const roundsValue = Number(roun.value);
        

        if (isNaN(roundsValue) || roundsValue <= 0) {
            alert("Don't be oversmart... give only positive values...");
            return;
        }

        document.getElementById('taking').style.display = 'none';
        document.getElementById('game').style.transform = 'scale(1)';
        document.getElementById('enjoy').style.display = 'none';
        document.getElementById('note').style.display = 'block';

        console.log('Selected rounds:', roundsValue);
        playGame(roundsValue, currentRound);
    }
});
