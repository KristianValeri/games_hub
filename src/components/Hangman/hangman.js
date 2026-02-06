import './hangman.css'

const wordsAvailable = ['javascript', 'python', 'casa', 'programacion', 'desarrollo', 'hangman', 'juego', 'computadora']

const SECRET_WORD = wordsAvailable[Math.floor(Math.random() * wordsAvailable.length)]

let guessedLetters = []

function getMaskedWord(letters) {
   return SECRET_WORD
    .split('')
    .map(letter => letters.includes(letter) ? letter : '_')
    .join(' ')
}

function includeInSecretWord(letter) {
   return SECRET_WORD.includes(letter)
}

function checkWin() {
  return SECRET_WORD.split('').every(letter => guessedLetters.includes(letter))
}

export function loadHangman() {
  const section = document.createElement('section')
  section.className = 'hangman_section'

  const wordDisplay = document.createElement('b')
  wordDisplay.textContent = getMaskedWord(guessedLetters)

  const lettersDisplay = document.createElement('b')
  lettersDisplay.textContent = guessedLetters.join(', ')

  const input = document.createElement('input')
  input.type = 'text'
  input.maxLength = 1

  const hangmanDrawing = document.createElement('div')
  hangmanDrawing.className = 'hangman_drawing'

  function updateHangmanDrawing(fails) {
    const stages = [
      // 0 fallos - solo la horca
      `
  +---+
  |   |
      |
      |
      |
      |
=========`,
      // 1 fallo - cabeza
      `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
      // 2 fallos - cuerpo
      `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
      // 3 fallos - un brazo
      `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
      // 4 fallos - dos brazos
      `
  +---+
  |   |
  O   |
 /|\\ |
      |
      |
=========`,
      // 5 fallos - una pierna
      `
  +---+
  |   |
  O   |
 /|\\ |
 /    |
      |
=========`,
      // 6 fallos - muerte
      `
  +---+
  |   |
  O   |
 /|\\ |
 / \\ |
      |
=========`
    ]
    hangmanDrawing.textContent = stages[fails] || stages[0]
  }

  updateHangmanDrawing(0)

  let userFails = 0

  input.onkeydown = function(event) {
    if (event.key !== 'Enter') return
    const letter = input.value.toLowerCase()

    if (letter && !guessedLetters.includes(letter)) {
      if(includeInSecretWord(letter)) {
        guessedLetters.push(letter);
        wordDisplay.textContent = getMaskedWord(guessedLetters);
        lettersDisplay.textContent = guessedLetters.join(', ');
      } else {
        userFails++;
        updateHangmanDrawing(userFails)

        if (userFails >= 6) {
          wordDisplay.textContent = 'GAME OVER! La palabra era: ' + SECRET_WORD
          input.disabled = true
        }
      }

      if (checkWin()) {
        wordDisplay.textContent = 'YOU WIN! ' + SECRET_WORD
      }
    }

    input.value = ''
  }

  section.appendChild(wordDisplay)
  section.appendChild(input)
  section.appendChild(hangmanDrawing)
  section.appendChild(lettersDisplay);

  return section
}
