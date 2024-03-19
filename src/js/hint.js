import { quiz, drawUnderlines } from './answer.js'

const controlWrapper = document.querySelector('.control')

const hintWrapper = document.createElement('div')
hintWrapper.classList.add('hint-wrapper')
controlWrapper.appendChild(hintWrapper)

const hint = document.createElement('div')
hint.classList.add('hint')
hintWrapper.appendChild(hint)
hint.textContent = 'Hint: '

const question = document.createElement('div')
question.classList.add('question')
hintWrapper.appendChild(question)

const objQuestionsLength = Object.keys(quiz.questions).length

function getRandomQuiz(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
export let randomQuiz = getRandomQuiz(1, objQuestionsLength + 1)

function displayRandomQuiz(number) {
  let questions = Object.values(quiz.questions)
  question.textContent = questions[number - 1]
}

function displayAnswerLines(number) {
  let answer = Object.values(quiz.answers)
  drawUnderlines(answer[number - 1])
}

displayRandomQuiz(randomQuiz)
displayAnswerLines(randomQuiz)

let arrayValue = Object.values(quiz.answers)

export function writeLetters(array) {
  const letterWrapperGlobal = document.querySelectorAll('.letter-wrapper')

  for (let i = 0; i < array.length; i++) {
    let letterItem = letterWrapperGlobal.item(i)
    letterItem.textContent = array[i]
  }
}

writeLetters(arrayValue[randomQuiz - 1])
