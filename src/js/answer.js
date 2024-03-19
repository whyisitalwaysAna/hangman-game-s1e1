const controlWrapper = document.querySelector('.control')

const answerLine = document.createElement('div')
answerLine.classList.add('answer-line')
controlWrapper.appendChild(answerLine)

//const letters = document.createElement('div')
//letters.classList.add('letters')
//answerLine.appendChild(letters)

//const lines = document.createElement('div')
//lines.classList.add('lines')
//answerLine.appendChild(lines)

export const quiz = {
  questions: {
    questionPurple:
      'What color do you get if you mix together the two colors that appear twice in the Google logo?',
    questionDominos:
      'For Cyber Monday in the US in 2019, Google "baked" Pixel 4 phones inside the pizza boxes of what fast food chain as a limited promotion?',
    questionAndroid:
      'Andy Rubin is known as one of the three founders of what massively popular operating system?',
    questionFrench:
      '"Ordinateur" is the word for "computer," and "logiciel" is the word for "software," in what Romance language?',
    questionBotnet:
      'What is the 6-letter term for a group of computers that is networked together and used by hackers to steal information?',
    questionHaiku:
      'A Rochester, New York developed what open-source operating system written in way more than three lines of code and named for what short poetry form?',
    questionMicrosoft: 'Who developed and designed TypeScript?',
    questionIphone:
      'Now appearing prophetic, what device was announced in 2007 with the following slogan? "This is only the beginning."',
    questionPaypal:
      'Since 2013, what technology company focused on payments has owned the popular smartphone cash transfer app Venmo?',
    questionHalo:
      'Mendicant Bias and Offensive Bias are fictional AIs in what "holy" video game franchise that shares its name with a Beyonce song? ',
    questionCookie:
      'What delicious computer term did web browser programmer Lou Montulli coin to refer to information that is sent from the browser to the web server?',
    questionNetwork:
      'A group of independent computers attached to one another through communication media',
    questionPixel: 'The smallest unit in a digital display',
    questionFunction: 'What word is often abbreviated as Fn on a keyboard?',
    questionAdobe:
      'In the last year more than 250 billion PDFs were opened using products from what highly successful creative software company?'
  },
  answers: {
    answerPurple: ['P', 'U', 'R', 'P', 'L', 'E'],
    answerDominos: ['D', 'O', 'M', 'I', 'N', 'O', 'S'],
    answerAndroid: ['A', 'N', 'D', 'R', 'O', 'I', 'D'],
    answerFrench: ['F', 'R', 'E', 'N', 'C', 'H'],
    answerBotnet: ['B', 'O', 'T', 'N', 'E', 'T'],
    answerHaiku: ['H', 'A', 'I', 'K', 'U'],
    answerMicrosoft: ['M', 'I', 'C', 'R', 'O', 'S', 'O', 'F', 'T'],
    answerIphone: ['I', 'P', 'H', 'O', 'N', 'E'],
    answerPaypal: ['P', 'A', 'Y', 'P', 'A', 'L'],
    answerHalo: ['H', 'A', 'L', 'O'],
    answerCookie: ['C', 'O', 'O', 'K', 'I', 'E'],
    answerNetwork: ['N', 'E', 'T', 'W', 'O', 'R', 'K'],
    answerPixel: ['P', 'I', 'X', 'E', 'L'],
    answerFunction: ['F', 'U', 'N', 'C', 'T', 'I', 'O', 'N'],
    answerAdobe: ['A', 'D', 'O', 'B', 'E']
  }
}

export let letterWrapper

export function drawUnderlines(array) {
  for (let i = 0; i < array.length; i++) {
    const letterBox = document.createElement('div')
    letterBox.classList.add('letter-box')
    answerLine.appendChild(letterBox)

    letterWrapper = document.createElement('div')
    letterWrapper.classList.add('letter-wrapper')
    letterBox.appendChild(letterWrapper)

    const letterUnderline = document.createElement('div')
    letterUnderline.classList.add('letter-underline')
    letterBox.appendChild(letterUnderline)
  }
}
