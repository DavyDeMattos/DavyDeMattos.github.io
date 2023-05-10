const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if(lockBoard) return;
  if(this === firstCard) return;
  this.classList.toggle('flip');

  if (!hasFlippedCard) {
    // First click
    hasFlippedCard = true;
    firstCard = this;

    return;
  } 
  // Second click
  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
}

function checkForMatch(){
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disablecards() : unflipCards();
  /*
  // do match
  if (firstCard.dataset.framework === secondCard.dataset.framework){
    disablecards();
  } else {
    unflipCards();
  }
  */
}

function disablecards() {
  // it's a match
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  // not a match
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null]
}

/*
IIFE (Immetiately Invoked Function Expression)

(function() {
  statements
})();
*/

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach( card => card.addEventListener('click', flipCard));