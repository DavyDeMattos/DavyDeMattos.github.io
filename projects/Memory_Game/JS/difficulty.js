const difficulty = {

  generate: function() {
    // console.log("difficulty initialisé");
    const difficultyButtons = document.querySelectorAll('.difficulty-element');
    difficultyButtons.forEach(button => {
      button.addEventListener('click', difficulty.setDisboard)
    });
  },

  setDisboard: function(button) {
    // console.log(button.currentTarget.getAttribute('value'));
    const nbCard = button.currentTarget.getAttribute('value');

    let difficultyClass = "normal";

    if (nbCard == 4){
      difficultyClass = "easy";
    }else if (nbCard == 9) {
      difficultyClass = "hard";
    }
    // console.log(difficultyClass);
    const section = document.querySelector('.memory-game');
    section.classList.add(difficultyClass);

    for (let index = 1; index <= nbCard; index++) {
      // console.log(index);
      card.create(index, difficultyClass);
    }
    // hide difficulties buttons and show cards board
    difficulty.toggleNone();
    scripts.init();
    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', app.reset)
  },

  toggleNone: function() {
    // show cards board
    const section = document.querySelector('.memory-game');
    section.classList.toggle('none');

    // hide difficulties buttons
    const difficultySelection = document.querySelector('.difficulty');
    difficultySelection.classList.toggle('none');

    // show reset button
    const reset = document.querySelector('.reset');
    reset.classList.toggle('none');
  }
}