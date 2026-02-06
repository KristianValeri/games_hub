import './style.css'
import { gamesButtons } from './components/buttons/_'
import { loadRockPaperScissors } from './components/RockPaperScissors/_'
import { loadTic } from './components/TicTacToe/tic-tac-toe'
import { loadHangman } from './components/Hangman/hangman'

const header = document.getElementById('header')
const main = document.getElementById('app')

header.className = 'games_header'
header.appendChild(gamesButtons())

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

