import './buttons.css';

export function gamesButtons() {
  let section = document.createElement('section');
  section.className = 'section_buttons';

  let btnRockPaperScissors = document.createElement('button');
  btnRockPaperScissors.className = 'button_games';
  btnRockPaperScissors.innerText = 'Rock Paper Scissors';
  btnRockPaperScissors.onclick = function () {
    localStorage.setItem('game', 'rockpaperscissors');
    location.reload();
  };

  let btnTicTacToe = document.createElement('button');
  btnTicTacToe.className = 'button_games';
  btnTicTacToe.innerText = 'Tic Tac Toe';
  btnTicTacToe.onclick = function () {
    localStorage.setItem('game', 'tictactoe');
    location.reload();
  };

  let btnHangman = document.createElement('button');
  btnHangman.className = 'button_games';
  btnHangman.innerText = 'Hangman';
  btnHangman.onclick = function () {
    localStorage.setItem('game', 'hangman');
    location.reload();
  };

  section.appendChild(btnRockPaperScissors);
  section.appendChild(btnTicTacToe);
  section.appendChild(btnHangman);

  return section;
}
