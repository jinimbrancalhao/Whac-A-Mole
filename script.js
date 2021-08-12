const cell1 = document.getElementById(`1`)
const cell2 = document.getElementById(`2`)
const cell3 = document.getElementById(`3`)
const cell4 = document.getElementById(`4`)
const cell5 = document.getElementById(`5`)
const cell6 = document.getElementById(`6`)
let cells = document.getElementsByClassName('cell')
const button = document.getElementById(`button`)
const timer = document.getElementById(`timer`)
let clickDisplay = document.getElementById('click-display')
let gameActive = false
const mole = 'images/diglett.jpeg'
const hill = 'images/mole-hill.png'

const moleLength = button.addEventListener(`click`, function () {
  let counter = 60
  if (gameActive === false) {
    clickDisplay.innerText = 0
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
    }
  }
})

function moleGenerate() {
  if (gameActive === true) {
    let moleInterval = setInterval(function () {
      moleTimeOut()
      generate = Math.floor(Math.random() * 6) + 1
      document
        .getElementById(`${generate}`)
        .firstChild.setAttribute('src', mole)
      if (gameActive === false) {
        clearInterval(moleInterval)
      }
    }, randomInteger())
  }
}

function clickCount() {
  clickCounter = 0
  for (let i = 0; i < cells.length; i++) {
    clickCounter = 0
    cells[i].addEventListener('click', function () {
      if (
        cells[i].firstChild.getAttribute('src') === mole &&
        gameActive === true
      ) {
        clickCounter += 1
        clickDisplay.innerText = clickCounter
        cells[i].onclick = function moleRemove() {
          cells[i].firstChild.setAttribute('src', hill)
        }
      }
    })
  }
}

function moleTimeOut() {
  for (let j = 0; j < cells.length; j++) {
    if (cells[j].firstChild.getAttribute('src') === mole) {
      cells[j].firstChild.setAttribute('src', hill)
    }
  }
}

function randomInteger() {
  min = Math.ceil(600)
  max = Math.floor(200)
  return Math.floor(Math.random() * (max - min) + min)
}
