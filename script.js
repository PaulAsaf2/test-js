import { detectSounds } from './constants.js'

let playBtn = document.getElementById('playBtn')
let curPointCont = document.getElementById('currentPoint')

let sound = new Howl({
  src: ['./audio/wallstingpoints.mp3'],
  sprite: detectSounds,
})

function togglePlay() {
  sound.play('9')
}

playBtn.addEventListener('click', togglePlay)
