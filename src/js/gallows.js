const body = document.querySelector('body')
const gallows = document.createElement('div')
console.log('hihi')

gallows.innerHTML = `
<div class="container">
<div class="gallows-wrapper">

  <div class="corner" id="corner-left-top">
    <div class="upperlayer" id="upperlayer-left-top"></div>
  </div>
  <div class="corner" id="corner-left-bottom">
    <div class="upperlayer" id="upperlayer-left-bottom"></div>
  </div>
  <div class="corner" id="corner-right-top">
    <div class="upperlayer" id="upperlayer-right-top"></div>
  </div>
  <div class="corner" id="corner-right-bottom">
    <div class="upperlayer" id="upperlayer-right-bottom"></div>
  </div>

  <div class="gallows-grid">
    <div class="gallows-wrapper">
      <div class="gallows">
        <div class="helper">
          <div class="stick" id="stick-3"></div>
        </div>
        <div class="helper-2"></div>
        <div class="stick" id="stick-1"></div>
        <div class="stick" id="stick-2"></div>
        <div class="stick" id="stick-4"></div>
        <div class="stick" id="stick-5"></div>
      </div>
      <div class="hangman-game">HANGMAN GAME</div>
    </div>
    <div class="control"></div>
  </div>
</div>
</div>
`

body.appendChild(gallows)
