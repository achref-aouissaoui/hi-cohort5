 function guessMyNumber(n) { 
 var upperBound = 5;
 if (n > upperBound) { 
 return 'Out of bounds! Please try a number between 0 and upperBound.'; 
 } else if (n === randInt(upperBound)) { 
 return 'You guessed my number! the right number is'randInt(upperBound); 
 } 
 return 'Nope! That wasnt it!'; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n + 1)) 
 }