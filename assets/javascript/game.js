$(document).ready(function() {
	var scoreMatch;
	var wins = 0;
	var losses = 0;
	var crystalValue1;
	var crystalValue2;
	var crystalValue3;
	var crystalValue4;
    var userScore;
    
function startGame (){
    userScore = 0;

    // Getting a random number for the game - Done
    scoreMatch = 20 + (Math.floor(Math.random()*102));


    // Getting random values for each crystal - Done
    crystalValue1 = Math.floor(1 + (Math.random()*12));
    crystalValue2 = Math.floor(1 + (Math.random()*12));
    crystalValue3 = Math.floor(1 + (Math.random()*12));
    crystalValue4 = Math.floor(1 + (Math.random()*12));

     // Moving scores to HTML
    $('#randomScore').html('Match me if you can: ' + scoreMatch);
    $('#totalScore').html(userScore);
    $('#winsScore').html('Wins: ' + wins);
    $('#lossesScore').html('Losses: ' + losses);
}



//if not equal to random number lose
//if equal to random number win
//keep track of wins or losses 
//reset after win or loss but keep scores

});
