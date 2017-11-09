// this is a basic guessing practice game
// generate a random number and store it for later

// prompt user for a guess between 1 and xx

//check to see if that guess is correct
//if wrong, prompt for another guess
//remove a life
//repeat until correct or lives = 0

//if userguess = random number, tell them great job
//how many attempts
//thank them for playing

var UserNumber = 10;
var Lives = 0;
var MaxLives = 10;
var Letters = ["abcdefghijklmnopqrstuvwxyz"];

var RandomNumber = Math.floor(Math.random() * UserNumber) + 1;
console.log (RandomNumber);

while (Guesses != RandomNumber) 
{
    var Guesses = prompt("Test your psychic strength! Pick a number between 1 and " + UserNumber);
    Lives +=1;
    
    if (Lives > MaxLives) 
    {
        document.write("You are not a psychic, or at least, not today...")
         break;
    }
    
    if (Lives == 9){
        prompt("WARNING, 1 guess left.. you may not be a psychic");
        break;
    }
    
    if (Guesses == RandomNumber){
        document.write("Whoa, you are a powerful psychic! How did you know that " + RandomNumber + " was the answer? ")
        document.write("It only took you " + Lives + " tries!")

    }

}