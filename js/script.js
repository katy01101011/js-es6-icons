const iconsArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona,
// in cui è presente il nome dell'icona e l'icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare
// le icone del colore corrispondente.

// BONUS
// Aggiungere alla pagina una select in cui le options corrispondono ai
// vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select,
// visualizzare solamente le icone corrispondenti.

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona,
// in cui è presente il nome dell'icona e l'icona stessa.

/* * <div class="icon-card">
    <i class="fas fa-smile"></i>
    <span>
        Smile
    </span>
* </div> */

const iconContainer = document.getElementById('icon-container');

let iconCards = iconsArray.forEach(element => {
    // Creo il 'div'
    iconCard = document.createElement('div');
    iconCard.classList.add('icon-card');
    iconContainer.append(iconCard);
    // Creo l'elemento 'i'
    iconIcon = document.createElement('i');
    iconIcon.classList.add(`${element.family}`, `${element.prefix}${element.name}`);
    iconCard.append(iconIcon);
    // Creo l'elemento 'span'
    iconSpan = document.createElement('span');
    iconSpan.innerHTML = `${element.name}`;
    iconCard.append(iconSpan);
});

console.log(iconContainer);