import playList from './playList.js';
console.log(playList);
const play = document.querySelector('.play')
const next = document.querySelector('.play-next')
const prev = document.querySelector('.play-prev')
const playListContainer = document.querySelector('.play-list')
let isPlay = false
let playNum = 0


const audio = new Audio();

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  if(!isPlay){
  audio.play();
  isPlay = true
  } else if(isPlay == true){
    audio.pause();
    isPlay = false;
  }
}

function toggleBtn() {
  if(!isPlay){
    play.classList.remove('play')
    play.classList.add('pause')
  } else if(isPlay){
    play.classList.remove('pause')
    play.classList.add('play')
  }  
}

playList.forEach(el => {
  const playerItem = document.createElement('li');
  playerItem.classList.add('play-item')
  playerItem.textContent = el.title
  playListContainer.append(playerItem)
})

play.addEventListener('click', function(){
  toggleBtn()
  playAudio()
});