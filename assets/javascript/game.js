var win;
var lost;
var randomNumber;
//4 crystals - done
for (var i = 0; i < 4; i++){
//random numbers for crystals - done
    var random = Math.floor((Math.random()* 12 ) + 1);
    console.log(random);
    var crystal = $("<div>");
    crystal.attr("class", 'crystal');
// console.log(crystal)
    $(".crystals").append(crystal);
  
}

//4 crystals - done
//random numbers for crystals
//new number every game to the 4 crystals
//number should be from 1 -10
//random number to match from 1-100
//clicking crystals to equal the random number made.
//if not equal to random number lose
//if equal to random number win
//keep track of wins or losses 
//reset after win or loss but keep scores