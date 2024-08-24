function rollDice() {
    let goldCoins = 0;
    for (i=0; i<10; i++) {
        const roll = (Math.floor((Math.random()*6) +1));
        if (roll === 1) {
            alert('You rolled a one. Game over, no more rolls!');
            alert('Your final total is ' +goldCoins +".");
            break;
        }
        else if(roll === 4) {
            alert('You rolled a four.');
            if (goldCoins >0) {
                goldCoins = goldCoins -1;
                alert('Sorry you lost a coin. Your new total is ' +goldCoins +".")
            }
        }
        else if (roll < 5) {
            alert ("You rolled a " +roll +".");
            alert ('Your total coins remains ' +goldCoins +".")
            continue;
        }
        if (roll === 5) {
            alert("Congratulations, you rolled a 5, you win five gold coins.");
            goldCoins = roll + goldCoins;
            alert("Your total coins is now " +goldCoins +".");
            }
        else if (roll === 6) {
            alert ("Congratulations, you rolled a 6, you win six gold coins.");
            goldCoins = roll + goldCoins;
            alert("Your total coins is now " +goldCoins +"."); 
        }
      }
}