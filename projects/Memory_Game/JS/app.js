const app = {

  init: function() {
    // console.log("app initialisé");
    difficulty.generate();

  }
}
document.addEventListener('DOMContentLoaded', app.init);