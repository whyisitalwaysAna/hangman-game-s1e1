import { quiz, letterWrapper } from './answer.js'
import { randomQuiz, writeLetters } from './hint.js'

const controlWrapper = document.querySelector('.control')

const keyboardWrapper = document.createElement('div')
keyboardWrapper.classList.add('keyboard-wrapper')
controlWrapper.appendChild(keyboardWrapper)

const lettersArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

let arrayValue = Object.values(quiz.answers)
//
let currentAnswer = []
//

function paintKeys(array, answer) {
  for (let i = 0; i < array.length; i++) {
    const key = document.createElement('div')
    key.classList.add('key')
    keyboardWrapper.appendChild(key)

    key.addEventListener('click', function (event) {
      answer.forEach(elem => {
        if (event.target.innerHTML === elem) {
          let letterNode = document.querySelectorAll('.letter-wrapper')
          for (let node of letterNode) {
            if (node.innerHTML === elem) {
              node.classList.add('visible-letter')
              //

              currentAnswer.push(elem)
              console.log(currentAnswer)
              console.log(currentAnswer.length)
              //
              event.removeEventListener('click', paintKeys)
            }
          }
        }
      })
    })
  }
}
paintKeys(lettersArray, arrayValue[randomQuiz - 1])

function writeLettersInKeys(array) {
  const allKeys = document.querySelectorAll('.key')

  for (let i = 0; i < array.length; i++) {
    let letterItem = allKeys.item(i)
    letterItem.textContent = array[i]
  }
}
writeLettersInKeys(lettersArray)
