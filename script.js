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
      document.getElementById(`${generate}`).innerText = 'mole'
      // document.getElementById(`${generate}`).innerText = ' '

      if (gameActive === false) {
        clearInterval(moleInterval)
      }
    }, 500)
  }
}
// Mole generating

// function clickCount() {
//   clickCounter = 0
//   cell.addEventListener('click', function () {
//     if (cell.innerText === 'mole') {
//       clickCounter += 1
//       clickDisplay.innerText = clickCounter
//       console.log(clickCounter)
//     }
//   })
// }

function clickCount() {
  clickCounter = 0
  for (let i = 0; i < cells.length; i++) {
    clickCounter = 0
    cells[i].addEventListener('click', function () {
      if (cells[i].innerText === 'mole') {
        clickCounter += 1
        clickDisplay.innerText = clickCounter
        console.log(clickCounter)
      }
    })
  }
}

//  added click counter

// make function to get rid of 'mole' and put tha inside clickcoutn and the molegenerate time
