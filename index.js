let playerScore = localStorage.getItem('playerScore') ? parseInt(localStorage.getItem('playerScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;
let playerselection = '';
let computerselection = '';

function play(playerSelection) {
  document.getElementById('rockBtn').style.display = 'none';
  document.getElementById('paperBtn').style.display = 'none';
  document.getElementById('scissorsBtn').style.display = 'none';
  document.getElementById('arrow_1').style.display = 'none';
  document.getElementById('arrow_2').style.display = 'none';
  document.getElementById('arrow_3').style.display = 'none';

  playerselection = playerSelection;

  const computerSelectionOptions = ['rock', 'paper', 'scissors'];
  const computerSelectionIndex = Math.floor(Math.random()*3);
  const computerSelection = computerSelectionOptions[computerSelectionIndex];

  computerselection = computerSelection;

  
  if (playerSelection === computerSelection) {
    document.getElementById('player1').innerText = "Your Choice";
    document.getElementById('computer').innerText = "Computer's Choice";
    document.getElementById('playerselection').innerHTML=`<img src="./assets/${playerSelection}.png" alt="${playerSelection}" id="${playerSelection}InnerImg">`;
    document.getElementById('computerselection').innerHTML=`<img src="./assets/${computerSelection}.png" alt="${computerSelection}" id="${computerSelection}InnerImg">`;
    document.getElementById('resultText').innerText = "It's a tie!";
    document.getElementById('tryAgainBtn').style.display = 'block';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    document.getElementById('player1').innerText = "Your Choice";
    document.getElementById('computer').innerText = "Computer's Choice";
    document.getElementById('playerselection').innerHTML=`<img src="./assets/${playerSelection}.png" alt="${playerSelection}" id="${playerSelection}InnerImg">`;
    document.getElementById('computerselection').innerHTML=`<img src="./assets/${computerSelection}.png" alt="${computerSelection}" id="${computerSelection}InnerImg">`;
    document.getElementById('resultText').innerText = 'You win!';
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('nextBtn').style.display = 'block';
    localStorage.setItem('playerScore', playerScore);
  } else {
    computerScore++;
    document.getElementById('player1').innerText = "Your Choice";
    document.getElementById('computer').innerText = "Computer's Choice";
    document.getElementById('playerselection').innerHTML=`<img src="./assets/${playerSelection}.png" alt="${playerSelection}" id="${playerSelection}InnerImg">`;
    document.getElementById('computerselection').innerHTML=`<img src="./assets/${computerSelection}.png" alt="${computerSelection}" id="${computerSelection}InnerImg">`;
    document.getElementById('resultText').innerText = 'You lose!';
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('tryAgainBtn').style.display = 'block';
    localStorage.setItem('computerScore', computerScore);
  }
}

function nextPage() {
  window.location.href = 'endpage.html';
}

function resetGame() {
  document.getElementById('rockBtn').style.display = 'block';
  document.getElementById('paperBtn').style.display = 'block';
  document.getElementById('scissorsBtn').style.display = 'block';
  document.getElementById('arrow_1').style.display = 'block';
  document.getElementById('arrow_2').style.display = 'block';
  document.getElementById('arrow_3').style.display = 'block';
  document.getElementById('resultText').innerText = '';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('tryAgainBtn').style.display = 'none';
  document.getElementById('playerselection').innerHTML = '';
  document.getElementById('computerselection').innerHTML= '';
  document.getElementById('player1').innerText = "";
  document.getElementById('computer').innerText = "";
}

function showInstructions() {
  document.getElementById('instructionsPopup').style.display = 'block';
}

function hideInstructions() {
  document.getElementById('instructionsPopup').style.display = 'none';
}

document.getElementById('playerScore').innerText = playerScore;
document.getElementById('computerScore').innerText = computerScore;
