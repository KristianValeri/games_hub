import './style.css'
import { gamesButtons } from './components/buttons/gamesButtons'
import { loadRockPaperScissors } from './components/RockPaperScissors/rock-paper-scissors'
import { loadTic } from './components/TicTacToe/tic-tac-toe'
import { loadHangman } from './components/Hangman/hangman'

const main = document.getElementById('app')

const header = document.createElement('header')
header.className = 'games_header'
header.appendChild(gamesButtons())
document.body.insertBefore(header, document.body.firstChild)

let selectedGame = localStorage.getItem('game')

if (selectedGame === 'rockpaperscissors') {
  main.appendChild(loadRockPaperScissors())
}

if (selectedGame === 'tictactoe') {
  main.appendChild(loadTic())
}

if (selectedGame === 'hangman') {
  main.appendChild(loadHangman())
}

