import { timeOfDay } from "./greeting.js";
const nextBtn = document.querySelector('.slide-next')
const prevBtn = document.querySelector('.slide-prev')
let randomNum = 0

function getRandomNum(min = 1, max = 20) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNum();

function setBg() {
  let body = document.querySelector('body')
  let bgNum = randomNum.toString().padStart(2, '0')
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
  img.onload = () => {      
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
  }
}

setBg()

function getSlideNext (){
  randomNum += 1
  if(randomNum == 21){
    randomNum = 1
  }
  setBg()
}

function getSlidePrev (){
  if(randomNum > 1){
    randomNum -= 1
    setBg()
  } else if(randomNum <= 1){
    randomNum = 20
    setBg()
  }
}

nextBtn.addEventListener('click', getSlideNext)
prevBtn.addEventListener('click', getSlidePrev)