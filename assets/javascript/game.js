
var winScore;
var lossesScore;
var match;


//random number to match from 30-99
randomMatch = Math.floor((Math.random() * 69) + 30);
$("#match").html('Try to match: ' + randomMatch); 
//4 crystals - done
for (var i = 0; i < 4; i++){
//random numbers for crystals - done
//number should be from 1 -10
    var random = Math.floor((Math.random()* 12 ) + 1);
    console.log(random);
    var crystal = $("<div>");
//new number every game to the 4 crystals
    crystal.attr({"class": 'crystal', "data-random":random});
// console.log(crystal)
    $(".crystals").append(crystal);
  
}

//clicking crystals to equal the random number made.
//if not equal to random number lose
//if equal to random number win
//keep track of wins or losses 
//reset after win or loss but keep scores