import './rock-paper-scissors.css';
import { addPlayerPoint, checkwinner } from './decide-winner';
import { createImage } from '../createImage';

export function loadRockPaperScissors() {
  let optionPlayer = document.createElement('section');
  optionPlayer.className = 'option_player';

  let pointsContainer = document.createElement('div');
  pointsContainer.className = 'points_container';
  let playerPoints = playerPointsHtml(
    'Player: ',
    'span_player_points',
    'rps_player',
  );
  let iaPoints = playerPointsHtml('IA: ', 'span_ia_points', 'rps_ia');

  let btnRock = document.createElement('button');
  btnRock.id = 'rock';
  btnRock.className = 'button_player_options';
  let btnPaper = document.createElement('button');
  btnPaper.id = 'paper';
  btnPaper.className = 'button_player_options';
  let btnScissors = document.createElement('button');
  btnScissors.id = 'scissors';
  btnScissors.classList = 'button_player_options';

  let imgRock = createImage('./assets/rock.png', 'img_play', 'rock');
  let imgPaper = createImage('./assets/paper.png', 'img_play', 'paper');
  let imgScissors = createImage(
    './assets/scissors.png',
    'img_play',
    'scissors',
  );

  let messageDisplay = document.createElement('p');
  messageDisplay.id = 'rps_message';
  messageDisplay.className = 'rps_message';

  let buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'buttons_container';

  pointsContainer.appendChild(playerPoints);
  pointsContainer.appendChild(iaPoints);
  optionPlayer.appendChild(pointsContainer);
  optionPlayer.appendChild(messageDisplay);

  btnRock.appendChild(imgRock);
  btnPaper.appendChild(imgPaper);
  btnScissors.appendChild(imgScissors);

  buttonsContainer.appendChild(btnRock);
  buttonsContainer.appendChild(btnPaper);
  buttonsContainer.appendChild(btnScissors);
  optionPlayer.appendChild(buttonsContainer);

  buttonsFuncionality(btnRock);
  buttonsFuncionality(btnPaper);
  buttonsFuncionality(btnScissors);

  return optionPlayer;
}

function playerPointsHtml(playerName, id, storageKey) {
  let playerPoints = document.createElement('p');
  playerPoints.className = 'player_points';
  playerPoints.innerText = playerName;
  let spanPlayerPoints = document.createElement('span');
  spanPlayerPoints.textContent = localStorage.getItem(storageKey) || 0;
  spanPlayerPoints.id = id;
  spanPlayerPoints.class = 'player_points';

  playerPoints.appendChild(spanPlayerPoints);

  return playerPoints;
}

function iaSelectedOption() {
  let numRandom = Math.floor(Math.random() * 3) + 1;
  if (numRandom === 1) {
    return 'rock';
  } else if (numRandom === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function buttonsFuncionality(button) {
  button.onclick = function () {
    let playerOption = button.id;
    let iaOption = iaSelectedOption();
    addPlayerPoint(playerOption, iaOption);
    checkwinner();
  };
}
