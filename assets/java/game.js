/*
create layout for the game
    i need a header with game title
    div to store the gyms
    div to store random number
    dive to store wins and loses
    div to store the instructions for the game
    dive to store the playes score

    

    

when you push on the gem the value of the gem is added to your score
if you match the games random number you win
    if players score is equal to random number
        you win
    if players score is less then random number
        keep playing
    else if players score is greater then random number
        you lose.
when you win you mark down the win
    if player wins
        add one to wins
        reset game.

 when you lose you mark down your loss
    if player loses
        add loss to losses
        reset the game.
if you win/lose the game restarts
when game restarts you get a new random number and all gems will have new hidden values.
in player rules tell player not to refresh the page otherwise the game will restart.


*/

/*four picturs of gems with each gem holding a specific value that you can press on
    each gem holds a random value that is hidden from the player
    hidden random value = 1-12
    store the randomw value into each gem
    do not display the value of the gem
    add the value of the gem to players score each time it is clicked
   start players score at 0
   every time player clicks on a gem add it to players score
   when game resets generate new random values for gem*/







/*when the game starts you are giving a random number
random number = 19-120
store the random number and display it in its div
when game resets generate new random number*/

$(document).ready(function () {

    var playerScore = 0;
    var wins = 0;
    var losses = 0;
    var randomNum = 0;
    var gems = [];
    function genNumber(min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);

    }

    console.log(genNumber(19, 120));





});