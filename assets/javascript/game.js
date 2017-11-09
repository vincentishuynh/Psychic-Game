//defines variables
var wins= 0;
var losses= 0;
var guessesLeft= 9;
var guessesSoFar = [];
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerInput = alphabetArray[Math.floor(Math.random()*alphabetArray.length)]; 
var arrayIndex = 0;

//function that updates information and fills out data to html
var update = function(){
	document.querySelector("#wins").innerHTML = "Wins: " + wins;
	document.querySelector("#losses").innerHTML = "losses: " + losses;
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
	document.querySelector("#guessedSoFar").innerHTML = "What you have guessed so far: " + guessesSoFar;
	
}
// called the function
update();

//everytime the user presses a key it will save the input and compare it to the computers input to see if matches
document.onkeyup = function(event){
        var userInput = event.key;
        if(userInput==computerInput){
        	guessesLeft = 9;
        	guessesSoFar=[];
        	arrayIndex = 0;
        	wins++;
        	computerInput = alphabetArray[Math.floor(Math.random()*alphabetArray.length)];
        	update(); 
        }else{
        	guessesLeft--;
        	guessesSoFar[arrayIndex] = userInput;
        	arrayIndex++;
        	update();
        }

        if (guessesLeft == 0){
        	losses++;
        	guessesLeft = 9;
        	guessesSoFar = [];
                arrayIndex = 0;
        	update();
        }
        }
