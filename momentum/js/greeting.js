export {timeOfDay, greeting}

const greeting = document.querySelector('.greeting')

const date = new Date();
const hours = date.getHours();
const arrTimeOfTheDay = ['night', 'morning', 'afternoon', 'evening']
const name = document.querySelector('.name');


const getTimeOfDay = (hours, arrTimeOfTheDay) => {
  let timeOfDay = arrTimeOfTheDay[Math.floor(hours / 6)]
  return timeOfDay
}

const timeOfDay = getTimeOfDay(hours, arrTimeOfTheDay);

function setLocalStorage (){
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage (){
  if(localStorage.getItem('name')){
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)