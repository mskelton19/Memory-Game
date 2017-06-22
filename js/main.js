var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[2];

cardsInPlay.push("queen");
cardsInPlay;
console.log("User flipped queen")

var cardTwo = cards[3];

cardsInPlay.push("king");
cardsInPlay;
console.log("User flipped king")

if (cardsInPlay.length === 2 && cardOne === cardTwo) {
	alert("You found a match!");
} else { 
	alert("Sorry, try again.");
}


