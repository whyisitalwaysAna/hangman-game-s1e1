const controlWrapper = document.querySelector('.control')

const answerLine = document.createElement('div')
answerLine.classList.add('answer-line')
controlWrapper.appendChild(answerLine)

const letters = document.createElement('div')
letters.classList.add('letters')
answerLine.appendChild(letters)

const lines = document.createElement('div')
lines.classList.add('lines')
answerLine.appendChild(lines)

let count = 6

for (let i = 0; i < count; i++) {
  const letterUnderline = document.createElement('div')
  letterUnderline.classList.add('letter-underline')
  lines.appendChild(letterUnderline)
}

for (let i = 0; i < count; i++) {
  const letterWrapper = document.createElement('div')
  letterWrapper.classList.add('letter-wrapper')
  letters.appendChild(letterWrapper)
}
