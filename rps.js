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
      return ('You lose! Paper beats Rock.')
    case 'Scissors':
      return ('You win! Rock beats Scissors')
    default:
      return 0;
      } 
    }
    else if (playerSelection === 'Paper') {
      switch(computerSelection) {
    case 'Rock':
      return ('You win! Paper beats Rock.')
    case 'Scissors':
      return ('You lose! Scissors beats Paper')
    default:
      return 0;
      } 
    }
    else if (playerSelection === 'Scissors') {
      switch(computerSelection) {
    case 'Paper':
      return ('You win! Scissors beats Paper.')
    case 'Rock':
      return ('You lose! Rock beats Scissors')
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
   
  const playerSelection = prompt("Please enter either Rock, Paper, or Scissors as your choice: ");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
