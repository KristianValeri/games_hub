import './style.css'
import { gamesButtons } from './components/buttons/_'
import { loadRockPaperScissors } from './components/RockPaperScissors/_'
import { loadTic } from './components/Tic Tac Toe/_'
import { loadHangman } from './components/Hangman/hangman'

let divAPP = document.getElementById('app')

let sectionButtons = gamesButtons()
divAPP.appendChild(sectionButtons)

let selectedGame = localStorage.getItem('game')

if (selectedGame === 'rockpaperscissors') {
  divAPP.appendChild(loadRockPaperScissors())
}

if (selectedGame === 'tictactoe') {
  divAPP.appendChild(loadTic())
}

if (selectedGame === 'hangman') {
  divAPP.appendChild(loadHangman())
}

