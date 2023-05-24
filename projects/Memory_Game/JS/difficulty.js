const difficulty = {

  generate: function() {
    // console.log("difficulty initialisé");
    const difficultyButtons = document.querySelectorAll('.difficulty-element');
    difficultyButtons.forEach(button => {
      button.addEventListener('click', difficulty.setDisboard)
    });
  },

  setDisboard: function(button) {
    console.log(button.currentTarget.getAttribute('value'));
    const nbCard = button.currentTarget.getAttribute('value');
    for (let index = 1; index <= nbCard; index++) {
      // console.log(index);
      card.create(index);
    }
    // card.create(2);
    difficulty.toggleNone();
    scripts.init();
  },

  toggleNone: function() {
    const section = document.querySelector('.memory-game');
    section.classList.toggle('none');
  } 
}