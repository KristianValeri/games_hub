Por accesibilidad toda página debería tener, la arquitectura y el uso de las etiquetas correctas; en este caso, debería, al menos, tener las etiquetas header y main y no directamente un div donde se renderice toda la app.
Los archivos, al igual que las variables, deben tener nombres descriptivos. Todos tus archivos se llaman _. Si tengo varios abiertos en el VSC, ¿cómo identificar cuál es cuál?. Recuerda que no programamos solo para nosotros. Nuestro código debe ser legible y entendible para cualquier programador. Si tienes una carpeta Hangman, en la que vas a tener los archivos de ese juego, lo lógico es que se llamen hangman.js y hangman.css


Lo ideal es que, en lugar de usar los alerts del sistema, crees tus propios modales para interactuar con el usuario.
Guardas los datos en el localStorage; pero los datos no son permanentes, porque: (1) un juego sobrescribe al otro; lo correcto es que se deberían guardar los datos de todos los juegos y todos los jugadores en cada juego; (2) en el caso de RPS, una vez que hay un ganador, los datos se resetean. En los otros dos juegos, no se guardan los datos.


Tres en raya
La secuencia de habilitación y deshabilitación de botones tiene bug. Si el jugador gana o empata, checkGameWinner hace resetGame(buttons) y retorna… pero igual ejecutas disableAllButtons después. Y luego del game over igual se re-habilitan los botones (esto es, juego terminado pero clicable... no se nota porque lo reinicias, pero en la lógica se puede)
La IA puede jugar en un tablero recién reseteado, producto del bug de habilitación y deshabilitación de botones. Aunque sea un juego nuevo, para “ella” es su turno. También podría seguir jugando aunque el tablero esté lleno
RPS
Función addPlayerPoint: en la condición else if (winner = "ia") utilizas un operador de asignación (=) en lugar de un operador de comparación (===), lo que provoca que la variable winner siempre se asigne a "ia" si el jugador no gana, resultando en que la IA siempre obtenga un punto si no hay victoria del jugador, impidiendo el manejo correcto de los empates.
Hangman
Si es un Hangman, ¿dónde está el ahorcado? Esa es la interacción que espera el usuario, que por cada fallo se vaya haciendo la imagen del ahorcado. Tal como lo tienes, el usuario no sabe cuántas oportunidades tiene ni cuando está cerca de ser “ahorcado”. Debes añadir la imagen si seleccionaste este juego.


En la lógica de MAX_ATTEMPTS cuentas el número total de letras adivinadas (guessedLetters.length), en lugar del número de intentos incorrectos. Esto hace que el juego termine prematuramente tras 5 adivinanzas, sin importar si fueron correctas o no.
