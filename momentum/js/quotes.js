const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeBtn  = document.querySelector('.change-quote');

async function getQuotes() {  
  const quotes = '/data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(data);
  quote.textContent = data[0].text
  author.textContent = data[0].author
}
getQuotes();

changeBtn.addEventListener('click', getQuotes)
