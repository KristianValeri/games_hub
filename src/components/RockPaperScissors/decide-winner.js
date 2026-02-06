function decideWinner(playerOption, iaOption) {
  if (playerOption === iaOption) {
    return 'Tie';
  }

  switch (playerOption) {
    case 'rock':
      if (iaOption === 'scissors') {
        return 'player';
      } else {
        return 'ia';
      }

    case 'paper':
      if (iaOption === 'rock') {
        return 'player';
      } else {
        return 'ia';
      }

    case 'scissors':
      if (iaOption === 'paper') {
        return 'player';
      } else {
        return 'ia';
      }
  }
}

export function addPlayerPoint(playerOption, iaOption) {
  let winner = decideWinner(playerOption, iaOption);
  if (winner === 'player') {
    let pointPlayerSpan = document.getElementById('span_player_points');
    pointPlayerSpan.textContent = parseInt(pointPlayerSpan.textContent) + 1;
    localStorage.setItem('rps_player', pointPlayerSpan.textContent);
    showMessage('Player wins this round!');
  } else if (winner === 'ia') {
    let pointIaSpan = document.getElementById('span_ia_points');
    pointIaSpan.textContent = parseInt(pointIaSpan.textContent) + 1;
    localStorage.setItem('rps_ia', pointIaSpan.textContent);
    showMessage('IA wins this round!');
  } else {
    showMessage('Tie!');
  }
}

function showMessage(text) {
  let messageDisplay = document.getElementById('rps_message');
  messageDisplay.textContent = text;
}

export function checkwinner() {
  let spanPlayerPoints = document.getElementById('span_player_points');
  let spanIaPoints = document.getElementById('span_ia_points');
  let playerPoints = parseInt(spanPlayerPoints.textContent);
  let iaPoints = parseInt(spanIaPoints.textContent);
  if (playerPoints === 3) {
    showMessage('The winner is the player');
  } else if (iaPoints === 3) {
    showMessage('The winner is the Ia');
  }
}
