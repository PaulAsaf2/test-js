import { detectSounds, points } from './constants.js'

let playBtn = document.getElementById('playBtn')
let curPointCont = document.getElementById('currentPoint')

let isPlaying = false
let currentIndex = 0
let currentPoint, knittingId, letter, number
let pointDelay = 3000
let letAndNumDelay = 400

let sound = new Howl({
  src: ['./audio/wallstingpoints.mp3'],
  sprite: detectSounds,
})

function playSound() {
  sound.play(letter)
  setTimeout(() => sound.play(number), letAndNumDelay)
}

function startKnitting() {
  currentPoint = points[currentIndex]
  if (!currentPoint) return
  letter = currentPoint.charAt(0)
  number = currentPoint.slice(1)

  curPointCont.textContent = currentPoint

  playSound()

  currentIndex++

  if (currentIndex == points.length) {
    stopKnitting()
  }
}

function stopKnitting() {
  playBtn.textContent = 'Play'

  sound.stop(letter)
  sound.stop(number)

  clearTimeout(knittingId)

  isPlaying = false
}

function togglePlay() {
  if (!isPlaying) {
    curPointCont.textContent =
    playBtn.textContent = 'Pause'
    isPlaying = true

    startKnitting()

    knittingId = setTimeout(function interval() {
      startKnitting()

      knittingId = setTimeout(interval, pointDelay)
    }, pointDelay)
  } else {
    stopKnitting()
  }
}

playBtn.addEventListener('click', togglePlay)