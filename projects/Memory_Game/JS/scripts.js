const scripts = {

  init: function(){
    const cards = document.querySelectorAll('.memory-card');
    
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    scripts.shuffle(cards);
    
    cards.forEach( card => card.addEventListener('click', scripts.flipCard));
  },

  flipCard: function(){
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
  
    scripts.checkForMatch();
  },
  
  checkForMatch: function(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  
    isMatch ? scripts.disablecards() : scripts.unflipCards();
    /*
    // do match
    if (firstCard.dataset.framework === secondCard.dataset.framework){
      disablecards();
    } else {
      unflipCards();
    }
    */
  },
  
  disablecards: function(){
    // it's a match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  
    scripts.resetBoard();
  },
  
  unflipCards: function(){
    lockBoard = true;
    // not a match
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
  
      resetBoard();
    }, 1500);
  },
  
  resetBoard: function(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
  },
  
  /*
  IIFE (Immetiately Invoked Function Expression)
  
  (function() {
    statements
  })();
  */
  
  shuffle: function(cards) {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  }
  
}