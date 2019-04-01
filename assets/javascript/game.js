$(document).ready(function() {
	var scoreMatch;
	var wins = 0;
	var losses = 0;
	var crystalValue1;
	var crystalValue2;
	var crystalValue3;
	var crystalValue4;
	var userScore;

//random number to match from 30-99
function startGame (){
    userScore = 0;

    // Getting a random number between 19-120 for the game 
    scoreMatch = 19 + (Math.floor(Math.random()*102));

    // Getting random values for each crystal between 1-12
    crystalValue1 = Math.floor(1 + (Math.random()*12));
    crystalValue2 = Math.floor(1 + (Math.random()*12));
    crystalValue3 = Math.floor(1 + (Math.random()*12));
    crystalValue4 = Math.floor(1 + (Math.random()*12));
  
}
//clicking crystals to equal the random number made. - done
$(".crystal").click(function (){ 

 var crystalNum = parseInt($(this).attr('data-random'));
console.log(crystalNum);

//if not equal to random number lose
//if equal to random number win
//keep track of wins or losses 
//reset after win or loss but keep scores

})});
