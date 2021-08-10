const cell1 = document.getElementById(`1`)
const cell = document.querySelectorAll('.cell')
const button = document.getElementById(`button`)
const timer = document.getElementById(`timer`)
let clickDisplay = document.getElementById('click-display')
let gameActive = false

button.addEventListener(`click`, function () {
  let counter = 60
  if (gameActive === false) {
    gameActive = true
    intervalId = setInterval(intervalFunc, 1000)
    moleGenerate()
    clickCount()
  }

  function intervalFunc() {
    counter -= 1
    timer.innerText = counter
    if (counter === 0) {
      clearInterval(intervalId)
      gameActive = false
      console.log(gameActive)
    }
  }
})
// Start button and timer

function moleGenerate() {
  if (gameActive === true) {
    let moleInterval = setInterval(function () {
      generate = Math.floor(Math.random() * 6) + 1
      if (generate === parseInt(cell1.id)) {
        cell1.innerText = 'mole'
      } else {
        cell1.innerText = ' '
      }
      if (gameActive === false) {
        clearInterval(moleInterval)
      }
    }, 500)
  }
}
// Mole generating

function clickCount() {
  clickCounter = 0
  cell1.addEventListener('click', function () {
    if (cell1.innerText === 'mole') {
      clickCounter += 1
      clickDisplay.innerText = clickCounter
      console.log(clickCounter)
    }
  })
}
//  added click counter

console.log(cell)
