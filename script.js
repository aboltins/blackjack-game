
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
   if(playerHand === 21) {
    alert("You're hand is " + playerHand + "." )
   }
   dealToDealer();
   if(dealerHand > 21){
    alert("Dealers hand is " + dealerHand + ". You're hand is " + playerHand + ". You won!!")
    return;
   }
   if(dealerHand > playerHand){
    alert("Dealers hand is " + dealerHand + ". You're hand is  " + playerHand +  ". You Lost!!");
    return;
   }
   if(dealerHand < 17 && dealerHand < playerHand){
    alert("Dealers hand is " + dealerHand +  ". You're hand is " + playerHand +  ". Dealer will pull his next card! ");
    playerStands();
   }
}


function nextPlayerGame(){
    if(playerHand === 21){
        playerStands();
        return;
    } else {
        var playersChoice = confirm("Your hand is " + playerHand + ". " + "The dealer shows " + dealerHand + "." + "  Select OK for HIT or Cancel for STAND.");
    } if(playersChoice){
        dealToPlayer11();
        if(playerHand > 21){
            alert("Your hand is " + playerHand + ". You have lost the game. ");
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
        return;
    } else {
        var playersChoice = confirm("Your initital hand is " + playerHand + ". " + "The dealer shows " + dealerHand + "." + "  Select OK for HIT or Cancel for STAND.");
    }
    if(playersChoice){
        dealToPlayer11();
        if(playerHand > 21){
            alert("Your hand is " + playerHand + ". You have lost the game. ");
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
