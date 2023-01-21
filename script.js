
// Global variables
var playerHand = 0;
var dealerHand = 0;
var initialPrompt = confirm("Would you like to play a game of Blackjack against the almighty computer?")

// Generates random number between 4 and 21 inclusive.
let randomInitialPlayerCard = function (min, max) {
    min = Math.ceil(4);
    max = Math.floor(21);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates random number between 2 and 11 inclusive.
let randomInitialDealerCard = function (min, max) {
    min = Math.ceil(2);
    max = Math.floor(11);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Deals the player a random number between 4 and 21 inclusive.
function dealToPlayer(){
    if(initialPrompt){
        confirm("Your hand is " + randomInitialPlayerCard() + ". " + "The dealer shows " + randomInitialDealerCard() + "." + "  Select OK for HIT or Cancel for STAND.");
    }
}

// Calls the deal to Player function.
dealToPlayer();
   
// If the player has 21 they win! 

   
// Deals a random number between 2 and 11 inclusive to the dealer.
// function dealToDealer(){
//     if(initialPrompt){
//         randomInitialDealerCard();
//     }
// }



function playerHit(){
// If the player hits, add a number between 2 and 11.
// If the player goes over 21 the lose. 
}
   

     
// If the player has 21, stay for them.
     
// Repeat until they choose to stay or they bust
     
// Once player stays add a number between 2 and 11 to the dealer's hand.
     
// If dealer number is less than 17 add another number
     
// Repeat until the number is over over 17 but less than 21, or if the dealer goes over 21
     
// If dealer goes over 21 they lose.
  
// Once dealer stops, and neither player bust, compare each number to 21. Whoever is closer wins!

// Pseudocode the outline of your game before you write any code.

// Create functions if you begin to repeat yourself.