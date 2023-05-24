const app = {

  init: function() {
    // console.log("app initialisé");
    difficulty.generate();
  },

  reset:function() {
    console.log('reset function called');
    const cards = document.querySelectorAll('.memory-card');
    const resetDiv = document.querySelector('.reset');
    cards.forEach(card => {
      card.classList.remove('flip');
    });
    // scripts.resetBoard();
    resetDiv.style.cssText += 'pointer-events:none';
    setTimeout(() => {
      scripts.init();
      resetDiv.style.cssText -= 'pointer-events:none';
    }, 1500);
  }
}
document.addEventListener('DOMContentLoaded', app.init);