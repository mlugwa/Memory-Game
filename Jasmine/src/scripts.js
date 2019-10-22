
const cardElementList = document.querySelectorAll('.memory-game-card');

function rotateCard180()
{
	console.log("This card was clicked.");
	console.log(this); //This will console log the element which was clicked.
}
cardElementList.forEach(cardElementList => cardElementList.addEventListener('click', rotateCard180))