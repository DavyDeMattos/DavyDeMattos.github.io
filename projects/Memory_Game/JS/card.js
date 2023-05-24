const card = {

  create: function(number) {
    // console.log("card initialisé");

    // On crée la div parent de la tache
    // const divElement = document.createElement('div');

    // -------------------First div---------------------

    const firstDivElement = document.createElement('div');
    firstDivElement.classList.add("memory-card");
    firstDivElement.setAttribute('data-framework', `dog_${number}`);

    const firstImgElement = document.createElement('img');
    firstImgElement.setAttribute('src', `../img/dog_${number}.jpg`);
    firstImgElement.alt = 'image of memory game';
    firstImgElement.classList.add("front-face");

    const secondImgElement = document.createElement('img');
    secondImgElement.setAttribute('src', '../img/dog_cover.jpg');
    secondImgElement.alt = 'back image of memory game';
    secondImgElement.classList.add("back-face");

    firstDivElement.append(firstImgElement, secondImgElement);

    // -------------------Second div---------------------

    const secondDivElement = document.createElement('div');
    secondDivElement.classList.add("memory-card");
    secondDivElement.setAttribute('data-framework', `dog_${number}`);

    const thirdImgElement = document.createElement('img');
    thirdImgElement.setAttribute('src', `../img/dog_${number}.jpg`);
    thirdImgElement.alt = 'image of memory game';
    thirdImgElement.classList.add("front-face");

    const fourthImgElement = document.createElement('img');
    fourthImgElement.setAttribute('src', '../img/dog_cover.jpg');
    fourthImgElement.alt = 'back image of memory game';
    fourthImgElement.classList.add("back-face");

    secondDivElement.append(thirdImgElement, fourthImgElement);

    // Append div
    // divElement.append(firstDivElement, secondDivElement);
    // console.log(divElement);

    const section = document.querySelector('.memory-game')
    section.append(firstDivElement, secondDivElement);
  },

}