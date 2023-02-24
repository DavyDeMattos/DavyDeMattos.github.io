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
        window.innerHTML = ''
        // On place la div dans le container.
        // containerCharacter.appendChild(divElement);
        app.showInformation(clickedArticle);
    },

    showInformation : function (name){
        // Nous recevons en paramètre le nom de la personne cliqué.
        console.log('Le charactère cliqué est : ' + name);

        // Sélection de la div de character
        const container = document.querySelector('.characterInformation');

        container.innerHTML = "";
        // Création des élements de la div
        const characterName = document.createElement('h2');
        const anniversaire = document.createElement('p');
        const favoriteTitle = document.createElement('h3');
        const ulElement = document.createElement('ul');
        ulElement.classList.add('favorite--gift');

        let projects = [
            // Projet fini
            {
                slug : "choose_your_romance",
                title : "Choose your romance",
                resume : "Dans le jeu Stardey Valley, il est possible d'augmenter son affinité avec des personnages en leur parlans ou leur offrant des cadeaux qu'ils apprécient. Après avoir en avoir eu assez d'ouvrir moult onglets des page wiki pour avoir accès à ces informations j'ai développé cet outil sans prétention. L'utilisateur peut choisir le personnage souhaité en défilant via les flèches et cliquer sur le personnage voulu.",
                status : "Fini",
                link: "Stardew_Valley/html/index.html",
                tools : [
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "JS"
                ]
            },
            {
                slug : "visiotec",
                title : "Visiotec",
                resume : "Dans le cadre de ma formation, nous avons développé ce site avec une équipe de 5 personnes. Il a pour but de faire office de marque-page virtuelle. Chaque utilisateur connecté peut répertorier des séries et films et indiquer à quel saison et épisode il s'est arrêté.",
                status : "En cours de publication",
                links : "",
                tools : [
                    "SASS",
                    "React",
                    "React-Redux",
                    "React Router Dom",
                    "Axios",
                    "Symphony",
                    "Symfony (framework)",
                    "MySQL ( Base de données)",
                    "JWT Token (authentication / sécurité)",
                    "Thunder client (Pour tester les requêtes)"
                ]
            },
            // Projet en cours de développement
            {
                slug : "hotel",
                title : "Hotel",
                resume : "Site servant à m'entrainer ayant pour thème l'hotellerie",
                status : "En cours de développement",
                links : "",
                tools : [
                ]
            },
            {
                slug : "ca_trompe_enormement",
                title : "Ca trompe énormément",
                resume : "Site destiné au groupe de musique éponyme qui servira à communiquer leur actualité tels que leurs images, dates de prestation ou contact",
                status : "En cours de développement",
                links : "",
                tools : [
                ]
            }
        ]

        for (const character of tableau) {
            // Si le nom du tableau corresponds au nom cliqué
            if (name == character.name) {
                // Ajout du titre
                container.appendChild(characterName);
                characterName.textContent = character.name

                // Ajout de l'anniversaire
                container.appendChild(anniversaire);
                anniversaire.textContent = `L'anniversaire de ${character.name} est le ${character.anniversaire}`
                
                container.appendChild(favoriteTitle);
                favoriteTitle.textContent = 'Voici la liste de ses cadeaux favoris'  ;       

                // Ajout de la liste des cadeau favoris
                container.appendChild(ulElement);   


                for (const item of character.likes) {
                    let liElement = document.createElement('li');
                    ulElement.appendChild(liElement);
                    liElement.innerHTML = `<img src='../images/${item}.png' /> <h4>${item}</h4>`
                }

                console.log(character.anniversaire);
                console.log(character.likes);
            }
            // console.log(character.name);
        }
        // console.log(tableau[1].likes);

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