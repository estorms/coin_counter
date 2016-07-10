//Write a program that will convert a dollar amount to the number //of coins that make up the amount. Use the common American //coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter (input) {
  
  var coinPurse = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
  };
  
  var totalCalculated = 0;
  
  if (.25 <= input) {
    coinPurse.quarters = Math.floor(input / .25);
    var numQuarters = coinPurse.quarters;
    totalCalculated = numQuarters * 0.25;
    }

    if (totalCalculated <= input && input > 0) {
        coinPurse.dimes = Math.floor((input - totalCalculated) / .10);
        var numDimes = coinPurse.dimes;
          totalCalculated = totalCalculated + (numDimes * .10);
          
          if (totalCalculated <= input && input > 0) {
          coinPurse.nickels = Math.floor((input - totalCalculated) /.05);
          var numNickels = coinPurse.nickels;
          totalCalculated = totalCalculated + (numNickels * 0.05);
            
            if (totalCalculated <= input && input > 0) {
                  coinPurse.pennies = parseInt((input - totalCalculated) / .01);
            }
          } 
        }
  
  return coinPurse;
}


console.log(coinCounter(.67));
console.log(coinCounter(.5));
console.log(coinCounter(.33));
console.log(coinCounter(.20));
console.log(coinCounter(.01));
console.log(coinCounter(.04));
console.log(coinCounter(1.26));


//var coins = coinCounter()
//console.log();


