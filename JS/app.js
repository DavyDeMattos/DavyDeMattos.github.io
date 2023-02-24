const app = {
    // TODO Faire une fenêtre qui s'affiche pour présenter le projet en question.
    // ? Comment procéder ?
    // ? Faire un tableau contenant les informations avec une boucle et une condition ?

    /*
        Marche à suivre
        x Sélection des articles -> tableau avec tous les articles
        - Boucle pour poser un écouter click sur les articles
        - Si event, passer 
    
    */
    init: function () {
        app.handleSliderImage();
        
    },

    
    handleClick : function(event){
        console.log('click');
        // article.innerHTML = '';
        const clickedArticle = event.currentTarget.getAttribute('value');
        // console.log(clickedArticle);
        // On sélectionne le container
        const window = document.querySelector('#windowInformation');
        // const divElement = document.createElement('div');
        // divElement.classList.add('characterInformation');

        // On place la div dans le container.
        // containerCharacter.appendChild(divElement);
        // app.showInformation(clickedArticle);
    },

    handleSliderImage : function(){
        // Selection of each article of project page
        const articles = document.querySelectorAll('.container--project article');
        // Add listener to call click function
        for (const article of articles) {
            article.addEventListener('click', app.handleClick)
        }
    }
};
    // on initialise l'app dès que le document est prêt
    document.addEventListener('DOMContentLoaded', app.init);