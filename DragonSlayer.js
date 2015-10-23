var slaying = true
youHit = Math.floor(Math.random() * 2)
damageThisRound = Math.floor(Math.random() * 5 + 1)
totalDamage = 0
var ready = prompt("Are you ready?")
var = gameFunction = function() {
confirm("Ladies and Gentleman, welcome to 1.js!  I am D! Your host.  Are you ready to take on the dragon? Please answer concisely; Yes or No?)
console.log(ready);
  if(ready === "Yes) {
    console.log("That's phenomenal to hear! Especially considering the dragon is right behind you!");
    console.log('You look up and see the dragon.  You brandish your handy misericorde blade');
} else {
    console.log("Sorry to hear that sir.  It was a pleasure meeting your acquaitances for the moment. Good bye old Chap!");
    console.log('A dragon spears you from behind with its claw.  Like water, the blood rushes out of your perforated chest. Your spiffy clothes are ruined. You day is ruined now. And you're dead");
    
}
while(slaying) {
    if(youHit) {
        console.log('Congratulations! You hit the dragon!');
        totalDamage += damageThisRound;
            if(totalDamage >= 4) {
                console.log("You have slayed the dragon!");
                slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } 
    else {
        console.log("You lose. The dragon has defeated you. If you stopped sucking and fixed your aim, you might the dragon.");
        slaying = false;
    }
}
}
gameFunction();
