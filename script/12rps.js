let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  draw: 0,
};

// updateResult();
updateScore();
// if (score === null) {
//   score = {
//     win: 0,
//     lose: 0,
//     draw: 0,
//   };
// }
function playGame(playerMove) {
  const comM = pickComM();

  let result = '';

  if (playerMove === 'scissors') {
    if (comM === 'rock') {
      result = 'you lose';
    } else if (comM === 'paper') {
      result = 'you win';
    } else if (comM === 'scissors') {
      result = 'draw';
    }
  } else if (playerMove === 'rock') {
    if (comM === 'rock') {
      result = 'draw';
    } else if (comM === 'paper') {
      result = 'you lose';
    } else if (comM === 'scissors') {
      result = 'you win';
    }
  } else if (playerMove === 'paper') {
    if (comM === 'rock') {
      result = 'you win';
    } else if (comM === 'paper') {
      result = 'draw';
    } else if (comM === 'scissors') {
      result = 'you lose';
    }
  }

  if (result === 'you win') {
    score.win += 1;
  } else if (result === 'you lose') {
    score.lose += 1;
  } else if (result === 'draw') {
    score.draw += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = ` You pick
      <img src="${playerMove}.png" alt="" class="move-image" />
      and computer pick
      <img src="${comM}.png" alt="" class="move-image" />`;

  //       alert(` You pick ${playerMove} computer pick ${comM} and ${result}
  // win: ${score.win}, lose: ${score.lose}, draw: ${score.draw}`);
}

function updateScore() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `win: ${score.win}, lose: ${score.lose}, draw: ${score.draw}`;
}

document.querySelector('.js-rock').addEventListener('click', () => {
  playGame('rock');
});
document.querySelector('.js-paper').addEventListener('click', () => {
  playGame('paper');
});
document.querySelector('.js-scissors').addEventListener('click', () => {
  playGame('scissors');
});

function pickComM() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
    computerMove = 'scissors';
  }
  return computerMove;
}

let isAuto = false;
let intervalID;
function autoplay() {
  if (!isAuto) {
    intervalID = setInterval(() => {
      const playerMove = pickComM();
      playGame(playerMove);
    }, 1000);
    isAuto = true;
  } else {
    // untuk membuat interval berhenti
    clearInterval(intervalID);
    isAuto = false;
  }
}
