import { timeOfDay, greeting } from "./greeting.js";


const time = document.querySelector('.time');
const datePage = document.querySelector('.date')
const options = {weekday:'long', day: 'numeric', month: 'long'};

function showGreeting (){
  let greetingText = `Good ${timeOfDay},`;
  greeting.textContent = greetingText;
}

function showDate(){
  const date = new Date()
  const currentDate = date.toLocaleDateString('en-EN', options);
  
  datePage.textContent = currentDate[0].toUpperCase() + currentDate.slice(1);
}

function showTime() {
  const date = new Date()
  const currentTime = date.toLocaleTimeString();
  
  time.textContent = currentTime;

  setTimeout(() => {
    showTime();
    showDate();
    showGreeting ();
  }, 1000)
}

showTime();
