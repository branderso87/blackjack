/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  let valueTotal = 0;
  let aceCount = 0;
  
  for(i = 0; i < hand.length; i++){
    if((hand[i] === "K") || (hand[i] === "Q") || (hand[i] === "J")) {
      hand[i] = 10;
    } else if (hand[i] === "A"){
      hand[i] = 11;
      aceCount += 1
    } else {
      hand[i] = parseInt(hand[i]);
    }
    valueTotal += hand[i];
  }
  if (valueTotal > 21 && aceCount >= 1){
    valueTotal = valueTotal - 10 * aceCount;
  }
  return valueTotal;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
