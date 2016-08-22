var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var board = document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}	
};

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png' alt='King of Hearts'>";
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png' alt='Queen of Hearts'>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

function isMatch(cards) {
	var allCards = document.querySelectorAll('.card');
	setTimeout (function() {
		for (var i = 0; i < allCards.length; i++) {
			allCards[i].style.background = 'yellow';
			allCards[i].innerHTML = '';
		}
		}, 1000);
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}	
};

createBoard();