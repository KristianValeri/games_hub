import './tic-tac-toe.css'

const GREEN_COLOR = 'rgb(34, 201, 34)'
const RED_COLOR = 'rgb(255, 0, 0)'
const DEFAULT_COLOR = 'white'

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// ====== LÓGICA DEL JUEGO (sin dependencia del DOM) ======

function checkWinner(boardColors) {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (
      boardColors[a] !== DEFAULT_COLOR &&
      boardColors[a] === boardColors[b] &&
      boardColors[b] === boardColors[c]
    ) {
      return boardColors[a]
    }
  }
  return null
}

function checkTie(boardColors) {
  return boardColors.every(color =>
    color === GREEN_COLOR || color === RED_COLOR
  )
}

function getRandomFreeIndex(boardColors) {
  const freeIndexes = boardColors
    .map((color, index) => color === DEFAULT_COLOR ? index : null)
    .filter(index => index !== null)

  if (freeIndexes.length === 0) return null

  return freeIndexes[Math.floor(Math.random() * freeIndexes.length)]
}

// ====== INTERFAZ Y DOM ======

export function loadTic() {
  const section = document.createElement('section')
  section.className = 'tic_tac_toe_section'

  for (let i = 0; i < 9; i++) {
    const button = document.createElement('button')
    button.className = 'tic_tac_toe_buttons'
    button.style.backgroundColor = DEFAULT_COLOR
    attachButtonFunctionality(button, section)
    section.appendChild(button)
  }

  return section
}

function checkGameWinner(buttons, name) {
  const boardColors = getBoardColors(buttons);

  if (checkWinner(boardColors)) {
    alert(`${name} won the game`);
    resetGame(buttons);
    return;
  }

  if (checkTie(boardColors)) {
    alert('Is tie');
    resetGame(buttons);
    return;
  }
}

function attachButtonFunctionality(button, section) {
  button.onclick = function () {
    if (button.disabled) return

    const buttons = section.querySelectorAll('.tic_tac_toe_buttons')

    // Jugador hace su movimiento
    button.style.backgroundColor = GREEN_COLOR
    button.disabled = true

    checkGameWinner(buttons, 'Player');
    disableAllButtons(buttons);

    // IA hace su movimiento con delay para que se vea
    setTimeout(() => {
      iaMove(buttons)

      // Dar tiempo al navegador para renderizar el color rojo
      setTimeout(() => {
        checkGameWinner(buttons, 'IA');
        enableFreeButtons(buttons)
      }, 300)
    }, 400)
  }
}

function getBoardColors(buttons) {
  return Array.from(buttons).map(button => button.style.backgroundColor)
}

function iaMove(buttons) {
  const boardColors = getBoardColors(buttons);
  const freeIndex = getRandomFreeIndex(boardColors)

  if (freeIndex !== null) {
    buttons[freeIndex].style.backgroundColor = RED_COLOR
    buttons[freeIndex].disabled = true
  }
}

function resetGame(buttons) {
  buttons.forEach(button => {
    button.style.backgroundColor = DEFAULT_COLOR
    button.disabled = false
  })
}

function disableAllButtons(buttons) {
  buttons.forEach(button => {
    button.disabled = true
  })
}

function enableFreeButtons(buttons) {
  buttons.forEach(button => {
    if (button.style.backgroundColor === DEFAULT_COLOR) {
      button.disabled = false
    }
  })
}
