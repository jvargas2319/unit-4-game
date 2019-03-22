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

    var playerScore = 0; //on reset change to 0
    var wins = 0; // on reset keep storing players wins
    var losses = 0;// on reset keepl storing player losses
    var randomNum = 0;// on reset change to new random number

    function genNumber(min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);

    }

    randomNum = genNumber(19, 120);
    $(".randomNum").html(randomNum);// update html on reset
    var gem1 = genNumber(1, 12);// update to new random number on reset
    var gem2 = genNumber(1, 12);// update to new random number on reset
    var gem3 = genNumber(1, 12);// update to new random number on reset
    var gem4 = genNumber(1, 12);// update to new random number on reset

    function reset() {
        gem1 = genNumber(1, 12);// update to new random number on reset
        gem2 = genNumber(1, 12);// update to new random number on reset
        gem3 = genNumber(1, 12);// update to new random number on reset
        gem4 = genNumber(1, 12)

        playerScore = 0; //on reset change to 0
        $('.playerScoreText').html(playerScore);
        randomNum = genNumber(19, 120);
        $(".randomNum").html(randomNum);// update html on reset
      
    }

    $('#gem1').click(function () {
        playerScore = playerScore + gem1;
        $('.playerScoreText').html(playerScore);
        compScore();
    });

    $('#gem2').click(function () {
        playerScore = playerScore + gem2;
        $('.playerScoreText').html(playerScore);
        compScore();
    });
    $('#gem3').click(function () {
        playerScore = playerScore + gem3;
        $('.playerScoreText').html(playerScore);
        compScore();
    });
    $('#gem4').click(function () {
        playerScore = playerScore + gem4;
        $('.playerScoreText').html(playerScore);
        compScore();
    });

    var compScore = function () {
        if (playerScore === randomNum) {
            alert("You da Champ!!!");
            wins++;
            $(".win").html(wins);
            reset();
        } else if (playerScore > randomNum) {
            alert("You lost");
            losses++;
            $(".losse").html(losses);
            reset();
        }
    }


});