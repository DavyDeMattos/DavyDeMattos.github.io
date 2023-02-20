/* Il faudra :
 x Une fonction qui, au clic, détermine quel personnage est cliqué
 - une fonction qui créé une div contenant les informations concernant le personnage
 - un tableau / objet regroupant toute les informations ?

*/
const app = {
    init: function () {
			app.handleSliderImage();

    },
    
    handleClick : function(event){
        // console.log('click');
				const containerCharacter = document.querySelector('.container--character');
				containerCharacter.innerHTML = '';
        // console.log(event.currentTarget);
        const clickedCharacter = event.currentTarget.getAttribute('value');
        // On sélectionne le container
        const divElement = document.createElement('div');
        divElement.classList.add('characterInformation');

        // On place la div dans le container.
        containerCharacter.appendChild(divElement);
        app.showInformation(clickedCharacter);
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

        let tableau = [
					// Charactère Masculin
					{
						name : 'Alex',
						anniversaire : '13 Eté',
						likes : [
							'Salmon_Dinner',
							'Complete_Breakfast'
						]
					},
					{
						name : 'Elliott',
						anniversaire : '5 Automne',
						likes : [
							'Crab_Cakes',
							'Pomegranate',
							'Lobster',
							'Duck_Feather',
							'Tom_Kha_Soup'
						]
					},
					{
						name : 'Harvey',
						anniversaire : '14 Hiver',
						likes : [
							'Coffee',
							'Pickles',
							'Truffle_Oil',
							'Super_Meal',
							'Wine'
						]
					},
					{
						name : 'Sam',
						anniversaire : '17 Eté',
						likes : [
							'Cactus_Fruit',
							'Maple_Bar',
							'Tigerseye',
							'Pizza'
						]
					},
					{
						name : 'Sebastian',
						anniversaire : '10 Eté',
						likes : [
							'Frozen_Tear',
							'Obsidian',
							'Void_Egg',
							'Sashimi',
							'Pumpkin_Soup'
						]
					},
					{
							name : 'Shane',
							anniversaire : '20 Printemps',
							likes : [
							 'Beer',
							 'Hot_Pepper',
							 'Pizza',
							 'Pepper_Poppers'
							]
					},
					// Charactère Féminin
					{
						name : 'Abigail',
						anniversaire : '13 Automne',
						likes : [
							'Amethyst',
							'Spicy_Eel',
							'Pumpkin',
							'Chocolate_Cake',
							'Pufferfish',
							'Blackberry_Cobbler'
						]
					},
					{
						name : 'Emily',
						anniversaire : '27 Printemps',
						likes : [
							'Aquamarine',
							'Amethyst',
							'Emerald',
							'Survival_Burger',
							'Jade',
							'Wool',
							'Ruby',
							'Cloth',
							'Topaz'
						]
					},
					{
						name : 'Haley',
						anniversaire : '14 Printemps',
						likes : [
							'Pink_Cake',
							'Coconut',
							'Fruit_Salad',
							'Sunflower',
						]
					},
					{
						name : 'Leah',
						anniversaire : '23 Hiver',
						likes : [
							'Goat_Cheese',
							'Vegetable_Medley',
							'Poppyseed_Muffin',
							'Salad',
							'Stir_Fry',
							'Truffle',
							'Wine'
						]
					},
					{
						name : 'Maru',
						anniversaire : '10 Eté',
						likes : [
							'Cauliflower',
							'Diamound',
							'Strawberry',
							'Miner_s_Treat',
							'Cheese_Cauliflower',
							'Iridium_Bar',
							'Gold_Bar',
							'Battery_Pack',
							'Pepper_Poppers',
							'Rhubarb_Pie'
						]
					},
					{
							name : 'Penny',
							anniversaire : '2 Automne',
							likes : [
								'Red_Plate',
								'Diamond',
								'Emerald',
								'Melon',
								'Poppyseed_Muffin',
								'Poppy',
								'Roots_Platter',
								'Sandfish',
								'Tom_Kha_Soup'
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
    
    /**
     * Function qui sélectionne le personnage voulu
     */
    handleSliderImage : function(){
        
        // On sélectionne l'élément qui va recevoir l'image (on le fait à l'extérieur de la boucle pour éviter d'avoir à le sélectionner autant de fois qu'il ya d'images)
        const sliderElement = document.querySelectorAll('.carousel-item');
        // console.log(sliderElement);
        for (const element of sliderElement) {
            element.addEventListener('click', app.handleClick)
        }
    }


};
    // on initialise l'app dès que le document est prêt
    document.addEventListener('DOMContentLoaded', app.init);
