const controlWrapper = document.querySelector('.control')

const incorrectWrapper = document.createElement('div')
incorrectWrapper.classList.add('incorrect-wrapper')
controlWrapper.appendChild(incorrectWrapper)

const incorrectGuesses = document.createElement('div')
incorrectGuesses.classList.add('incorrect-guesses')
incorrectWrapper.appendChild(incorrectGuesses)
incorrectGuesses.textContent = 'Incorrect guesses: '

const incorrectGuessesCounter = document.createElement('div')
incorrectGuessesCounter.classList.add('incorrect-guesses-counter')
incorrectWrapper.appendChild(incorrectGuessesCounter)
incorrectGuessesCounter.textContent = '0 / 6' //will be removed
