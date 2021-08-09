const cell1 = document.getElementById(`1`)
const button = document.getElementById(`button`)
const timer = document.getElementById(`timer`)
let gameActive = false

button.addEventListener(`click`, function () {
  let counter = 60
  gameActive = true
  intervalId = setInterval(intervalFunc, 1000)
  moleGenerate()

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
    console.log(2)
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
