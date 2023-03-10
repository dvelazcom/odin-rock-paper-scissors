function uppercaseFirst (word) {
    const lowered = word.toLowerCase();
    const changed = lowered.charAt(0).toUpperCase() + lowered.slice(1);
  return changed;
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = uppercaseFirst(playerSelection);
    if (playerSelection === computerSelection){
      return (`It's is a draw! ${playerSelection} ties with ${computerSelection}`);
    }
      else if (playerSelection === 'Rock') {
      switch(computerSelection) {
    case 'Paper':
      return ('You lose! Paper beats Rock.');
    case 'Scissors':
      return ('You win! Rock beats Scissors');
    default:
      return 0;
      } 
    }
    else if (playerSelection === 'Paper') {
      switch(computerSelection) {
    case 'Rock':
      return ('You win! Paper beats Rock.');
    case 'Scissors':
      return ('You lose! Scissors beats Paper');
    default:
      return 0;
      } 
    }
    else if (playerSelection === 'Scissors') {
      switch(computerSelection) {
    case 'Paper':
      return ('You win! Scissors beats Paper.');
    case 'Rock':
      return ('You lose! Rock beats Scissors');
    default:
      return 0;
      } 
    }
    else {
      return (`${playerSelection} is not a valid option, please check your spelling and try again.`);
    }
  }
  
  function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
  }

  playerScore = 0;
  computerScore = 0;

  function playGameNew(playerChoice){
    const playerSelection = playerChoice;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const pScore = document.querySelector('#player');
    const cScore = document.querySelector('#computer');
      switch (true) {
        case result.includes('win'):
          playerScore += 1;
          pScore.textContent = `Player: ${playerScore}`;
          break;
        case result.includes('lose'):
          computerScore += 1;
          cScore.textContent = `Computer: ${computerScore}`;
          break;
        default:
          break;
        }
    if (playerScore === 5) {
      setTimeout(() => {alert('Game Over, You Win!')}, 0);
      playerScore = 0;
      computerScore = 0;
      pScore.textContent = `Player: ${playerScore}`;
      cScore.textContent = `Computer: ${computerScore}`;
    }
    else if (computerScore === 5) {
      setTimeout(() => {alert('Game Over, Compter Wins!')}, 0);
      playerScore = 0;
      computerScore = 0;
      pScore.textContent = `Player: ${playerScore}`;
      cScore.textContent = `Computer: ${computerScore}`;
    }
  }
  
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playGameNew(button.id);
  });
});
