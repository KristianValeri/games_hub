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

  const button = document.createElement('button')
  button.textContent = 'Guess'

  let userFails = 0

  button.onclick = function() {
    const letter = input.value.toLowerCase()

    if (letter && !guessedLetters.includes(letter)) {
      if(includeInSecretWord(letter)) {
        guessedLetters.push(letter);
        wordDisplay.textContent = getMaskedWord(guessedLetters);
        lettersDisplay.textContent = guessedLetters.join(', ');
      } else {
        userFails++;

        console.log({ userFails })

        if (userFails >= 5) {
          wordDisplay.textContent = 'GAME OVER! The word was: ' + SECRET_WORD
          button.disabled = true
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
  section.appendChild(button)
  section.appendChild(lettersDisplay);

  return section
}
