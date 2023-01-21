
// Global variables
var playerHand = 0;
var dealerHand = 0;
var initialConfirm = confirm("Would you like to play a game of Blackjack against the almighty computer?")

// Generates random number between 4 and 21 inclusive.
let randomNumberTo21 = function (min, max) {
    min = Math.ceil(4);
    max = Math.floor(21);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates random number between 2 and 11 inclusive.
let randomNumberTo11 = function (min, max) {
    min = Math.ceil(2);
    max = Math.floor(11);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Deals the player a random number between 4 and 21 inclusive.
function dealToPlayer21(){
    playerHand = playerHand + randomNumberTo21();      
}

// Deals the player a random number between 4 and 11 inclusive.
function dealToPlayer11(){
    playerHand = playerHand + randomNumberTo11();
}

// Deals the dealer a random number between 2 and 11 inclusive.
function dealToDealer(){
    dealerHand = dealerHand + randomNumberTo11();
}

// Player Stands - Alerted to player in case player chooses to stand at any point during the game.
function playerStands(){
    alert("You chose to stand with " + playerHand + ".");
}


function nextPlayerGame(){
    if(playerHand === 21){
        alert("Your hand is now " + playerHand + ". " + "The dealer will pull his next cards now.");
        dealToDealer();
        while (dealerHand < 17 ) {
            alert("You stand with " + playerHand + ". " + " Dealers hand is " + dealerHand + ". Dealer will pull another card.");
        dealToDealer();
        }
    } else {
        var playersChoice = confirm("Your hand is " + playerHand + ". " + "The dealer shows " + dealerHand + "." + "  Select OK for HIT or Cancel for STAND.");
    } if(playersChoice){
        dealToPlayer11();
        if(playerHand > 21){
            alert("Your hand is now " + playerHand + ". You have lost the game. ");
        } else {
            nextPlayerGame();
        } 
    } else {
        playerStands();
    }
}


function firstPlayerGame(){
    if(playerHand === 21){
        alert("Your initial hand was 21, you have won the game. Congratulations!");
    } else {
        var playersChoice = confirm("Your hand is " + playerHand + ". " + "The dealer shows " + dealerHand + "." + "  Select OK for HIT or Cancel for STAND.");
    }
    if(playersChoice){
        dealToPlayer11();
        if(playerHand > 21){
            alert("Your hand is now " + playerHand + ". You have lost the game. ");
        } else {
            nextPlayerGame();
        } 
    } else {
        playerStands();
    }
}



if(initialConfirm){
    dealToPlayer21();
    dealToDealer();
    firstPlayerGame();
}








// function playerHit()

// // If the player hits, add a number between 2 and 11.
// // If the player goes over 21 the lose. 

   

     
// If the player has 21, stay for them.
     
// Repeat until they choose to stay or they bust
     
// Once player stays add a number between 2 and 11 to the dealer's hand.
     
// If dealer number is less than 17 add another number
     
// Repeat until the number is over over 17 but less than 21, or if the dealer goes over 21
     
// If dealer goes over 21 they lose.
  
// Once dealer stops, and neither player bust, compare each number to 21. Whoever is closer wins!

// Pseudocode the outline of your game before you write any code.

// Create functions if you begin to repeat yourself.